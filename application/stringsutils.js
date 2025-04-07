export default class StringUtils {
    static formatDot(string){
        if (string && string.replace) {
            return string
            .replace(/“/g,"/“")
            .replace(/”/g,"/”")
            .replace(/"/g,"/\"")
        }

        return ''
    }
    static funcChina(obj) {

        if (/.*[\u4e00-\u9fa5]+.*$/.test(obj)) {
            return false;
        }
        return true;
    }
}
