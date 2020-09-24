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
}
