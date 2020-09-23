import AndroidUtils from "./application/android";
import ExcelsUtils from "./application/excels";

 (async () => {
    console.log("----------start creat android---------")

    let excelsData  = await ExcelsUtils.readExcel("input/test.xlsx")
    let androidData = await AndroidUtils.stringsXml()
    AndroidUtils.creatStringsXML(androidData,excelsData)

    console.log("----------END creat android-----------")



})()




