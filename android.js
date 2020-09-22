import * as xml from "node-xml-lite";


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
}
