import Excel from "exceljs"

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
            { header: '序號', key: '序號', width: 30 },//A
            { header: '中文', key: '中文', width: 30 },//B
            { header: '屬性.', key: '屬性', width: 30 },//C
            { header: '中文變更（若有)', key: '中文變更（若有）', width: 30 },//D
            { header: '英文', key: '英文', width: 30 },//F
            { header: '葡文', key: '葡文', width: 30 },//G
            { header: '備註', key: '備註', width: 30 },//H
        ]

        let keys = Object.keys(data)

        keys.map((item, index) => {
            let value = data[item]
            worksheet.getCell("A" + (index + 2)).value = index + 1
            worksheet.getCell("B" + (index + 2)).value = value ? value : ""
            // worksheet.commit();
        })
        await workbook.xlsx.writeFile(`output/excel/${name}.xlsx`)
    }
}
