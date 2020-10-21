import zh from "../input/zh-hant"
import fs from "fs";
import * as qs from "qs";

export default class ReactNativeUtils {

    static readI18n() {


        return this.exchange(zh)
    }

    static exchange(obj, lastKey) {
        let keys = Object.keys(obj)

        let data = {}

        keys.map((item, index) => {

            let value = obj[item]

            if (value instanceof Object) {
                data = Object.assign(data, this.exchange(value, item))
            } else {
                if (lastKey) {
                    data[lastKey + "." + item] = value
                } else {
                    data[item] = value
                }
            }

        })


        return data
    }


    static creatJSfile(init, tran) {

        let keys = Object.keys(init)

        let inputEnRes = Object.assign({}, zh)
        let inputPtRes = Object.assign({}, zh)
        let inputZhRes = Object.assign({}, zh)


        keys.map((key, index) => {


            let value = init[key]

            for (let t in tran) {
                if (tran[t].zh == value) {
                    let zhContent = tran[t].zhNew ? tran[t].zhNew : tran[t].zh
                    let en = tran[t].en
                    let pt = tran[t].pt

                    if (key.indexOf(".") > -1) {
                        let mKeys = key.split(".")
                        inputZhRes[mKeys[0]][mKeys[1]] = zhContent
                        inputEnRes[mKeys[0]][mKeys[1]] = en
                        inputPtRes[mKeys[0]][mKeys[1]] = pt
                    } else {
                        inputZhRes[key] = zhContent
                        inputEnRes[key] = en
                        inputPtRes[key] = pt
                    }

                    break
                }
            }

        })



        fs.writeFile(`./output/en/en.json`, "export default" + JSON.stringify(inputEnRes), "utf-8", (err => {
            if (err) {
                console.log("error", err)
            }
        }))

        fs.writeFile(`./output/pt/pt.js`, "export default" + JSON.stringify(inputPtRes), {}, (err => {
            if (err) {
                console.log("error", err)
            }
        }))

        fs.writeFile(`./output/zh/zh-hant.js`,  "export default" + JSON.stringify(inputZhRes), {}, (err => {
            if (err) {
                console.log("error", err)
            }
        }))

    }

}