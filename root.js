import AndroidUtils from "./android";
import ExcelsUtils from "./excels";

var test = (async () => {
    console.log("----------start creat android---------")

    let excelsData  = await ExcelsUtils.readExcel("test.xlsx")
    let androidData = await AndroidUtils.stringsXml()
    AndroidUtils.creatStringsXML(androidData,excelsData)

    console.log("----------END creat android-----------")



})()




