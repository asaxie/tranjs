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


    static funcChina(obj) {

        if (/.*[\u4e00-\u9fa5]+.*$/.test(obj)) {
            return false;
        }
        return true;
    }

    isTranSuccess() {

    }

    static creatJSfile(init, tran) {

        let keys = Object.keys(init)
        let inputPtRes = JSON.parse(JSON.stringify(zh));
        let inputZhRes = JSON.parse(JSON.stringify(zh));
        let inputEnRes = JSON.parse(JSON.stringify(zh));
        let cc = {}
        let dd = []

        keys.map((key, index) => {

                let value = init[key]

                let hasTran = false

                for (let t in tran) {
                    if (tran[t].zh == value
                        ||
                        tran[t].zh == value.replace("：", "")
                        ||
                        tran[t].zhNew == value
                        ||
                        tran[t].zhNew == value.replace("：", "")
                        ||
                        tran[t].en == value
                        ||
                        tran[t].en == value.replace("：", "")
                        ||
                        tran[t].en == value.replace(":", "")
                    ) {
                        hasTran = true
                        const hasExt = value.indexOf("：") > -1 || value.indexOf(":") > -1


                        let zhContent = tran[t].zhNew ? tran[t].zhNew : tran[t].zh;

                        let en = tran[t].en;
                        let pt = tran[t].pt;

                        if (hasExt) {
                            zhContent += "："
                            en += ":"
                            pt += ":"
                        }

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

                            }

                        } else {
                            inputZhRes[key] = zhContent
                            inputEnRes[key] = en
                            inputPtRes[key] = pt
                        }


                        break
                    }
                }

                if (!hasTran) {

                    if (!this.funcChina(value)) {
                        if (!cc[value] && !cc[value + "："] && !cc[value + ":"]) {

                            dd.push(!value.endsWith("：") ? value : value.substring(0, value.length - 1))
                            cc[value] = true
                            cc[value + "："] = true
                            cc[value + ":"] = true
                        }

                    }
                }
            }
        )

        dd = dd.sort(
            function compareFunction(param1, param2) {
                return param1.localeCompare(param2, "zh");
            }
        )

        dd.map(it => {
            console.log(it)
        })
        setTimeout(() => {
            fs.writeFile(`./output/pt/pt.json`, JSON.stringify(inputPtRes), {}, (err => {
                if (err) {
                    console.log("error", err)
                }
            }))
        }, 2000)


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
