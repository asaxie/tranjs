import * as xml from "node-xml-lite";
import fs from "fs"
import StringUtils from "./stringsutils";

const androidStart = "<?xml version=\"1.0\" encoding=\"utf-8\"?>\n" +
    "<resources xmlns:xliff=\"urn:oasis:names:tc:xliff:document:1.2\">\n"

const androidEnd = "</resources>"

export default class AndroidUtils {

    static stringsXml(name = "strings") {
        return new Promise(((resolve, reject) => {
            xml.parseFile(`./input/${name}.xml`, (error, data) => {
                if (error) {
                    reject(error)
                    console.log("error", error)
                } else {
                    let obj = {}
                    data.childs.map((item, index) => {
                        if (item && item.attrib && item.attrib.name) {
                            obj[item.attrib.name] = item.childs && item.childs[0]
                        }
                    })
                    resolve(obj)
                }
            })
        }))
    }

    static creatString(key, value) {
        return `    <string name=\"${key}\">${value}</string>\n`
    }

    static creatStringsXML(init, tran, name = "strings") {

        // console.log("init",init)
        // console.log("tran",tran)

        let keys = Object.keys(init)

        let inputEnRes = androidStart
        let inputPtRes = androidStart
        let inputZhRes = androidStart
        let inputZhHansRes = androidStart

        let hasKeys = []


        keys.map((key, index) => {
            let value = init[key]

            for (let t in tran) {

                if (tran[t].zh == value) {

                    if (tran[t].zhNew) {
                        inputZhRes += this.creatString(key, tran[t].zhNew)
                    } else {
                        inputZhRes += this.creatString(key, tran[t].zh)
                    }

                    hasKeys.push(key)


                    inputEnRes += this.creatString(key, StringUtils.formatDot(tran[t].en))
                    inputPtRes += this.creatString(key, StringUtils.formatDot(tran[t].pt))
                    inputZhHansRes += this.creatString(key, tran[t].zhHans)
                    break
                }
            }

        })

        inputPtRes += "\n    <!--未翻譯的-->\n"
        inputEnRes += "\n    <!--未翻譯的-->\n"
        inputZhRes += "\n<!--未翻譯的-->\n"
        inputZhHansRes += "\n<!--未翻譯的-->\n"
        //拼接未翻譯的
        keys.map((key, index) => {
            if (hasKeys.indexOf(key) == -1) {
                inputEnRes += this.creatString(key, init[key])
                inputPtRes += this.creatString(key, init[key])
                inputZhRes += this.creatString(key, init[key])
                inputZhHansRes += this.creatString(key, init[key])
            }
        })

        inputEnRes += androidEnd
        inputPtRes += androidEnd
        inputZhRes += androidEnd
        inputZhHansRes += androidEnd


        fs.writeFile(`./output/en/${name}.xml`, inputEnRes, {}, (err => {
            if (err) {
                console.log("error", err)
            }
        }))

        fs.writeFile(`./output/pt/${name}.xml`, inputPtRes, {}, (err => {
            if (err) {
                console.log("error", err)
            }
        }))

        fs.writeFile(`./output/zh/${name}.xml`, inputZhRes, {}, (err => {
            if (err) {
                console.log("error", err)
            }
        }))

        fs.writeFile(`./output/zhhans/${name}.xml`, inputZhHansRes, {}, (err => {
            if (err) {
                console.log("error", err)
            }
        }))
    }

}
