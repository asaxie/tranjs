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

                if (lastKey) {
                    console.log(`nice`, this.exchange(value, item))
                    let res = this.exchange(value, item)

                    Object.keys(res).map(item => {
                        data[lastKey + "." + item] = res[item]
                    })

                } else {
                    data = Object.assign(data, this.exchange(value, item))
                }

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

        const inputPtRes = JSON.parse(JSON.stringify(zh));

        const inputZhRes = JSON.parse(JSON.stringify(zh));

        const inputEnRes = JSON.parse(JSON.stringify(zh));

        keys.map((key, index) => {

            let value = init[key]

            for (let t in tran) {
                if (tran[t].zh == value) {
                    let zhContent = tran[t].zhNew ? tran[t].zhNew : tran[t].zh;

                    const en = tran[t].en;
                    const pt = tran[t].pt;

                    if (key.indexOf(".") > -1) {
                        let mKeys = key.split(".")

                        //todo 臨時修改套二
                        if (mKeys.length > 2) {
                            inputZhRes[mKeys[0]][mKeys[1]][mKeys[2]] = zhContent;

                            inputEnRes[mKeys[0]][mKeys[1]][mKeys[2]] = en;

                            inputPtRes[mKeys[0]][mKeys[1]][mKeys[2]] = pt;
                        } else {
                            inputZhRes[mKeys[0]][mKeys[1]] = zhContent;

                            inputPtRes[mKeys[0]][mKeys[1]] = pt;

                            inputEnRes[mKeys[0]][mKeys[1]] = en;
                            console.log(`en`, inputEnRes[mKeys[0]][mKeys[1]])
                            console.log(`en2`, en)
                            console.log(`en3`, inputPtRes[mKeys[0]][mKeys[1]])
                        }

                    } else {
                        inputZhRes[key] = zhContent
                        inputEnRes[key] = en
                        inputPtRes[key] = pt

                    }



                    break
                }
            }

        })

        fs.writeFile(`./output/pt/pt.json`, JSON.stringify(inputPtRes), {}, (err => {
            if (err) {
                console.log("error", err)
            }
        }))

        setTimeout(() => {
            fs.writeFile(`./output/en/en.json`, JSON.stringify(inputEnRes), "utf-8", (err => {
                if (err) {
                    console.log("error", err)
                }
            }))
        }, 0)



        // fs.writeFile(`./output/zh/zh-hant.js`, "export default" + JSON.stringify(inputZhRes), {}, (err => {
        //     if (err) {
        //         console.log("error", err)
        //     }
        // }))

    }

}
