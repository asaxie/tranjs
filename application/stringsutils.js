export default class StringUtils {
    static formatDot(string){
        return string
            .replace(/“/g,"/“")
            .replace(/”/g,"/”")
            .replace(/"/g,"/\"")
    }
    static funcChina(obj) {

        if (/.*[\u4e00-\u9fa5]+.*$/.test(obj)) {
            return false;
        }
        return true;
    }
}
