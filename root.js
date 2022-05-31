import AndroidUtils from "./application/android";
import ExcelsUtils from "./application/excels";
import IOSUtils from "./application/ios";
import ReactNativeUtils from "./application/reactnative";
import merge1 from "./input/merge1"
import merge2 from "./input/merge2"
import Vue from "./application/vue"
import {countriesIso,countries} from "./input/phonecode"
import fs from "fs";
 (async () => {

     console.log("init")
     let excelsData  = await ExcelsUtils.readExcel("input/cesl2.xlsx")

     console.log("read")
     let reactData = ReactNativeUtils.readI18n()

     console.log("create")
     ReactNativeUtils.creatJSfile(reactData,excelsData)



     // let androidData = await AndroidUtils.stringsXml()
    //生成翻譯文件
    //  await ExcelsUtils.outputExcel(androidData,"android準備翻譯文件")
    //
    // //生成 android strings
    //  AndroidUtils.creatStringsXML(androidData,excelsData)
    //
    //
    // let iosData = await IOSUtils.localizableStrings()
    // await ExcelsUtils.outputExcel(iosData,"IOS準備的翻譯文件")
    //  IOSUtils.creatLocalizable(iosData,excelsData)

     //
     // await ExcelsUtils.outputExcel(reactData,"RN翻譯文件3")
     //
    // Vue.mergeFile(merge1,merge2)


})()




