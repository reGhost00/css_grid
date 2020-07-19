import React from "react";

export default {
    factoryList(len, opts){
        const {tit="" ,...attr} = opts,
            length = len*1 || 1;
        return Array.from({length}, (a, i) => <li key={i} _odd={i & 1 && true} {...attr}>{i+" "+tit}</li>)
    }
}
