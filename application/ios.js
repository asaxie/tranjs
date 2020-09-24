import fs from "fs";
import * as qs from "qs";

//去掉註釋
const reg = /\/\*[\s\S]*\*\/|\/\/.*/
export default class IOSUtils {

    static localizableStrings(path = "./input/Localizable.strings") {

        return new Promise((resolve, reject) => {

            fs.readFile(path, "utf-8", ((err, data) => {
                if (err) {
                    console.log("error", err)
                    reject(err)
                } else {
                     let format1 = data.replace(reg,"")
                     let format2 = format1.replace(/;\n/g,"&")

                    let iosObj = {}
                    let body  = qs.parse(format2)

                    let keys = Object.keys(body)

                    keys.map((item,index)=>{
                        let key = item.replace(/\n/g,"")
                        let value = body[item].trim()
                        value = value.substring(1,value.length - 1)

                        iosObj[key]  = value
                    })

                    resolve(iosObj)
                }


            }))

        })
    }

    static creatLocalizable(init,tran,name = "Localizable"){
        console.log("IOS 開始生成")

        let keys = Object.keys(init)

        let inputEnRes = ""
        let inputPtRes = ""
        let inputZhRes = ""

        let hasKeys = []


        keys.map((key, index) => {
            let value = init[key]

            for (let t in tran) {

                if (tran[t].zh == value) {

                    if (tran[t].zhNew) {
                        inputZhRes += `${key} = "${tran[t].zhNew}"\n`
                    }else {
                        inputZhRes += `${key} = "${tran[t].zh}"\n`
                    }

                    hasKeys.push(key)
                    inputEnRes += `${key} = "${tran[t].en}"\n`
                    inputPtRes += `${key} = "${tran[t].pt}"\n`

                    break
                }
            }

        })

        inputPtRes += "\n<!--未翻譯的-->\n"
        inputEnRes += "\n<!--未翻譯的-->\n"
        inputZhRes += "\n<!--未翻譯的-->\n"
        //拼接未翻譯的
        keys.map((key, index) => {
            if (hasKeys.indexOf(key) == -1) {
                inputEnRes += `${key} = "${init[key]}"\n`
                inputPtRes += `${key} = "${init[key]}"\n`
                inputZhRes += `${key} = "${init[key]}"\n`
            }
        })



        fs.writeFile(`./output/en/${name}.strings`, inputEnRes, {}, (err => {
            if (err) {
                console.log("IOS EN 生成失敗", err)
            }else {
                console.log("IOS EN 生成成功")
            }
        }))

        fs.writeFile(`./output/pt/${name}.strings`, inputPtRes, {}, (err => {
            if (err) {
                console.log("IOS PT 生成失敗", err)
            }else {
                console.log("IOS PT 生成成功")

            }
        }))

        fs.writeFile(`./output/zh/${name}.strings`, inputZhRes, {}, (err => {
            if (err) {
                console.log("IOS ZH 生成失敗", err)
            }else {
                console.log("IOS ZH 生成成功")
            }
        }))
    }


}
