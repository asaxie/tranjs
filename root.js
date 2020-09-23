import AndroidUtils from "./application/android";
import ExcelsUtils from "./application/excels";
import IOSUtils from "./application/ios";

 (async () => {
    console.log("----------read Excel---------")

    let excelsData  = await ExcelsUtils.readExcel("input/test.xlsx")
    console.log("----------read Excel End---------")


    console.log("----------start creat android---------")

    let androidData = await AndroidUtils.stringsXml()
    let outputExcel = await ExcelsUtils.outputExcel(androidData)

    AndroidUtils.creatStringsXML(androidData,excelsData)

    console.log("----------END creat android-----------")



    console.log("-------------start creat ios------------")

    let iosData = await IOSUtils.localizableStrings()

    console.log("-------------end creat ios------------")

})()




