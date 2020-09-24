import * as xml from "node-xml-lite";
import fs from "fs"

const androidStart = "<?xml version=\"1.0\" encoding=\"utf-8\"?>\n" +
    "<resources xmlns:xliff=\"urn:oasis:names:tc:xliff:document:1.2\">\n"

const androidEnd = "</resources>"

export default class AndroidUtils {

    static stringsXml(path = "./input/strings.xml") {
        return new Promise(((resolve, reject) => {
            xml.parseFile(path, (error, data) => {
                if (error) {
                    reject(error)
                    console.log("error", error)
                } else {
                    let obj = {}
                    data.childs.map((item, index) => {
                        if (item.attrib && item.attrib.name) {
                            obj[item.attrib.name] = item.childs[0]
                        }
                    })
                    resolve(obj)
                }
            })
        }))
    }


    static creatStringsXML(init, tran) {

        let keys = Object.keys(init)

        let inputEnRes = androidStart
        let inputPtRes = androidStart
        let inputZhRes = androidStart

        let hasKeys = []


        keys.map((key, index) => {
            let value = init[key]

            for (let t in tran) {

                if (tran[t].zh == value) {

                    if (tran[t].zhNew) {
                        inputZhRes += `    <string name=\"${key}\">${tran[t].zhNew}</string>\n`
                    }

                    hasKeys.push(key)
                    inputEnRes += `    <string name=\"${key}\">${tran[t].en}</string>\n`
                    inputPtRes += `    <string name=\"${key}\">${tran[t].pt}</string>\n`
                    break
                }
            }

        })

        inputPtRes += "\n    <!--未翻譯的-->\n"
        inputEnRes += "\n    <!--未翻譯的-->\n"
        //拼接未翻譯的
        keys.map((key, index) => {
            if (hasKeys.indexOf(key) == -1) {
                inputEnRes += `    <string name=\"${key}\">${init[key]}</string>\n`
                inputPtRes += `    <string name=\"${key}\">${init[key]}</string>\n`
            }
        })

        inputEnRes += androidEnd
        inputPtRes += androidEnd
        inputZhRes += androidEnd


        fs.writeFile("./output/en/strings.xml", inputEnRes, {}, (err => {
            if (err) {
                console.log("error", err)
            }
        }))

        fs.writeFile("./output/pt/strings.xml", inputPtRes, {}, (err => {
            if (err) {
                console.log("error", err)
            }
        }))

        fs.writeFile("./output/zh/strings.xml", inputZhRes, {}, (err => {
            if (err) {
                console.log("error", err)
            }
        }))

    }

}
