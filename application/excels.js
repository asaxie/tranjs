
import Excel from "exceljs"

export default class ExcelsUtils {


    static async readExcel(path){
        const workbook = new Excel.Workbook();
        await workbook.xlsx.readFile(path);

        return new Promise((resolve, reject) => {
            let data  = []

            workbook.eachSheet( (worksheet, sheetId)=> {


                worksheet.getSheetValues().map((item,index)=>{
                    let list = {}
                    list.key = index
                    list.zh = item[2]
                    list.en = item[5]
                    list.pt = item[6]
                    data.push(list)
                })

            });

            resolve(data)
        })
    }

    static async outputExcel(data){
        return new Promise((resolve, reject) => {

        })
    }
}
