import fs from "fs";
import * as qs from "qs";

//去掉註釋
const reg = /(\n+)|(\/{2,}.*?(\r|\n))|(\/\*(\n|.)*?\*\/)/g
export default class IOSUtils {

    static localizableStrings() {


        return new Promise((resolve, reject) => {

            fs.readFile("./input/Localizable.strings", "utf-8", ((err, data) => {
                if (err) {
                    console.log("error", err)
                    reject(err)
                } else {
                    let format = data.replace(reg,"")
                    console.log("data",qs.parse(format,{ delimiter: /[;,]/ }) )
                    resolve(data)
                }


            }))

        })
    }
}
