import AndroidUtils from "./application/android";
import ExcelsUtils from "./application/excels";
import IOSUtils from "./application/ios";
// import ReactNativeUtils from "./application/reactnative";
// import merge1 from "./input/merge1"
// import merge2 from "./input/merge2"
// import Vue from "./application/vue"
// import fs from "fs";



(async () => {

  console.log("init")
  // let excelsData = await ExcelsUtils.readExcel("input/DSF.xlsx")
  // let reactData = ReactNativeUtils.readI18n()
  // ReactNativeUtils.creatJSfile(reactData, excelsData)
  // console.log(excelsData)


  //  console.log("read")
  //  let reactData = ReactNativeUtils.readI18n()
  // await ExcelsUtils.outputExcel(reactData,"DSF準備翻譯文件")
  //  console.log("create")
  //  ReactNativeUtils.creatJSfile(reactData,excelsData)


  // //生成 android strings
  //  AndroidUtils.creatStringsXML(androidData,excelsData)
  //
  //
  const iosData = await IOSUtils.localizableStrings()
  // await ExcelsUtils.outputExcel(iosData,"IOS準備的翻譯文件")
  //  IOSUtils.creatLocalizable(iosData,excelsData)


  //
  // Vue.mergeFile(merge1,merge2)
  const androidData = await AndroidUtils.stringsXml()


  await ExcelsUtils.outputAndroidAndIOSExcel(androidData, iosData, "FDCT翻譯文件")




  // await ExcelsUtils.outputExcel(androidData, "Android翻譯文件")



})()




