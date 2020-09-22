
const Excel = require('exceljs');
const qs = require('qs');

(async () => {
    console.log("----------start---------")
    const workbook = new Excel.Workbook();
    let data = await workbook.xlsx.readFile("safp.xlsx");

    workbook.eachSheet( (worksheet, sheetId)=> {

        worksheet.getSheetValues().map((item,index)=>{
            console.log(index,item[2]+ " :" + item[5])

        })

    });

    console.log("----------END-----------")

})()
