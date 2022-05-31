


export default class Vue {
    //配對中文有而英文沒有
    static mergeFile(zhs, ens, lastProps = ``) {


        Object.keys(zhs).map(it => {
            let zh = zhs[it]
            if (zh && typeof zh === 'object') {
                let en = ens[it]

                if (!en) {
                    console.log("這個值需要補充", `${lastProps} ${it}`)
                } else {
                    this.mergeFile(zh, en, lastProps + ` ` + it)
                }
            } else {
                let en = ens[it]

                if (!en) {
                    console.log("這個值需要補充", `${lastProps} ${it}`)
                }
            }
        })

    }
}