import AndroidUtils from "./android";

const Excel = require('exceljs');
const qs = require('qs');
const fs = require('fs');
// const androidXml = require("./strings.xml")
const xml = require("node-xml-lite");


var test = (async () => {
    console.log("----------start---------")
    const workbook = new Excel.Workbook();
    let data = await workbook.xlsx.readFile("test.xlsx");

    // fs.readFile("strings.xml","utf-8",(error,data)=>{
    //     if (error) {
    //         console.log("error",error)
    //     }else {
    //         console.log("data",data)
    //
    //
    //     }
    // })


    let androidXML = await AndroidUtils.stringsXml()
    console.log("android",androidXML)


    workbook.eachSheet( (worksheet, sheetId)=> {

        worksheet.getSheetValues().map((item,index)=>{
            // console.log(index,item[2]+ " :" + item[5])

        })

    });
 // console.log("android",qs.stringify(androidXml))
    console.log("----------END-----------")

})()



