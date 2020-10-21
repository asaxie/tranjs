export default class StringUtils {
    static formatDot(string){
        return string
            .replace(/“/g,"/“")
            .replace(/”/g,"/”")
            .replace(/"/g,"/\"")
    }
}
