import * as xml from "node-xml-lite";
import fs from "fs"

const androidStart = "<?xml version=\"1.0\" encoding=\"utf-8\"?>\n" +
    "<resources xmlns:xliff=\"urn:oasis:names:tc:xliff:document:1.2\">\n"

const androidEnd = "</resources>"

export default class AndroidUtils {

    static stringsXml() {
        return new Promise(((resolve, reject) => {
            xml.parseFile("strings.xml", (error, data) => {
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



    static creatStringsXML(init,tran){

        let keys = Object.keys(init)

        let inputEnRes = androidStart
        let inputPtRes = androidStart

        keys.map((key,index)=>{
            let value = init[key]

             for (let t in tran){
                 if (tran[t].zh == value) {
                     inputEnRes +=`<string name=\"${key}\">${tran[t].en}</string>\n`
                     inputPtRes +=`<string name=\"${key}\">${tran[t].pt}</string>\n`
                     break
                 }
             }

        })

        inputEnRes +=androidEnd
        inputPtRes +=androidEnd


        fs.writeFile("input/en/strings.xml",inputEnRes,{},(err => {
            if (err){
                console.log("error",err)
            }
        }))

        fs.writeFile("input/pt/strings.xml",inputPtRes,{},(err => {
            if (err){
                console.log("error",err)
            }
        }))

    }

}
