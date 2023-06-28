import Excel from "exceljs"
import StringUtils from "./stringsutils";

export default class ExcelsUtils {

    //去左右空格;
    static trim(s) {
        if (s) {
            try {
                return s.replace(/(^\s*)|(\s*$)/g, "");
            } catch (error) {
            }

        }
        return s;
    }


    static async readExcel(path) {
        const workbook = new Excel.Workbook();
        await workbook.xlsx.readFile(path);


        return new Promise((resolve, reject) => {
            let data = []

            workbook.eachSheet((worksheet, sheetId) => {

                worksheet.getSheetValues().map((item, index) => {
                    let list = {}
                    list.key = index
                    let zh = this.trim(item[2])
                    list.zh = this.trim(item[2])
                    if (zh && zh.richText && zh.richText.length > 0) {
                        let d = ""
                        zh.richText.map((t, i) => {
                            d = d + t.text
                        })
                        list.zh = d.trim()
                    }


                    try {
                        list.zhNew = this.trim(item[4])

                        list.pt = this.trim(item[5])
                        list.en = this.trim(item[6])



                    } catch (err) {
                        console.log(`readExcel error`, err)
                        console.log(`item[4]`, list)

                    }

                    data.push(list)
                })

            });

            resolve(data)
        })
    }

    static async outputExcel(data, name = "翻譯文件") {

        const workbook = new Excel.Workbook();
        const worksheet = workbook.addWorksheet('翻譯');

        worksheet.columns = [
            { header: 'Android序號', key: '序號', width: 30 },//A
            { header: '中文', key: '中文', width: 30 },//B
            { header: '屬性.', key: '屬性', width: 30 },//C
            { header: '中文變更（若有)', key: '中文變更（若有）', width: 30 },//D
            { header: '英文', key: '英文', width: 30 },//F
            { header: '葡文', key: '葡文', width: 30 },//G
            { header: '備註', key: '備註', width: 30 },//H
        ]

        let keys = Object.keys(data)

        let mIndex = 0
        keys.map((item, index) => {
            let value = data[item]

            if (!StringUtils.funcChina(value)) {

            }
            mIndex++;
            worksheet.getCell("A" + (mIndex + 1)).value = item
            worksheet.getCell("B" + (mIndex + 1)).value = value ? value : ""

            // worksheet.commit();
        })
        await workbook.xlsx.writeFile(`output/excel/${name}.xlsx`)
    }

    static async outputAndroidAndIOSExcel(androidData, iosData, name = "翻譯文件") {

        const workbook = new Excel.Workbook();
        const worksheet = workbook.addWorksheet('翻譯');

        const iosFindKeys = Object.keys(iosData).filter(ios => Object.values(androidData).includes(iosData[ios]))
        const androidFindKeys = Object.keys(androidData).filter(android => Object.values(iosData).includes(androidData[android]))

        // console.log("ios",iosFindKeys)
        // console.log("android",androidFindKeys)

        const androidNotFind = Object.keys(androidData).filter(it => !androidFindKeys.includes(it))
        const iosNotFind = Object.keys(iosData).filter(it => !iosFindKeys.includes(it))

        worksheet.columns = [
            { header: 'Android序號', key: '序號', width: 30 },//A
            { header: 'IOS序號', key: '序號', width: 30 },//B
            { header: '中文', key: '中文', width: 30 },//C
            { header: '中文變更（若有)', key: '中文變更（若有）', width: 30 },//E
            { header: '英文', key: '英文', width: 30 },//F
            { header: '葡文', key: '葡文', width: 30 },//G
            { header: '備註', key: '備註', width: 30 },//H
        ]


        let mIndex = 0
        //先寫入共有的
        androidFindKeys.map(it => {
            const androidValue = androidData[it]

            const iosTitleList = Object.keys(iosData).filter(it => iosData[it] === androidValue)
            let iosT = ""
            if (iosTitleList && iosTitleList.length) {
                iosT = iosTitleList[0]
            }

            mIndex++;
            worksheet.getCell("A" + (mIndex + 1)).value = it
            worksheet.getCell("B" + (mIndex + 1)).value = iosT
            worksheet.getCell("C" + (mIndex + 1)).value = androidValue ? androidValue : ""
        })

        //再寫入非共有的
        androidNotFind.map(it => {
            const androidValue = androidData[it]
            mIndex++;
            worksheet.getCell("A" + (mIndex + 1)).value = it
            worksheet.getCell("B" + (mIndex + 1)).value = ""
            worksheet.getCell("C" + (mIndex + 1)).value = androidValue ? androidValue : ""
        })

        iosNotFind.map(it => {
            const iosValue = iosData[it]
            mIndex++;
            worksheet.getCell("A" + (mIndex + 1)).value = ""
            worksheet.getCell("B" + (mIndex + 1)).value = it
            worksheet.getCell("C" + (mIndex + 1)).value = iosValue ? iosValue : ""
        })

        // worksheet.commit();
        await workbook.xlsx.writeFile(`output/excel/${name}.xlsx`)
    }
}
