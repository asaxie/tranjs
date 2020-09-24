import AndroidUtils from "./application/android";
import ExcelsUtils from "./application/excels";
import IOSUtils from "./application/ios";

 (async () => {

    let excelsData  = await ExcelsUtils.readExcel("input/test.xlsx")
    let androidData = await AndroidUtils.stringsXml()
    //生成翻譯文件
     await ExcelsUtils.outputExcel(androidData,"android準備翻譯文件")

    //生成 android strings
     AndroidUtils.creatStringsXML(androidData,excelsData)



    let iosData = await IOSUtils.localizableStrings()
    await ExcelsUtils.outputExcel(iosData,"IOS準備的翻譯文件")

})()




