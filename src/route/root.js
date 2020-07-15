import React, { useState } from "react";
import S1 from "./s1";
import S2 from "./s2";
import S3 from "./s3";

function Top(){
    return <div className="CPMT TOP">
        <span className="tit m">CSS Grid</span>
        <span className="tit s">基于弹性布局的栅格系统</span>
    </div>
}

function Nav({DATA, EV_CHANGE}){
    const list = Array.isArray(DATA) && "function" === typeof EV_CHANGE ? DATA.map(obj => <li key={obj.key} onClick={() => EV_CHANGE(obj.key)}>{obj.tit}</li>) : [];
    return <ul className="CPMT NAV DF">
        {list}
    </ul>
}

export default function(){
    const sArr = [{tit:"主页", key:"home", Tar:S1}, {tit:"关于", key:"about", Tar:S2}, {tit:"文档", key:"doc", Tar:S3}],
        sKvs = sArr.reduce((prev, {key, Tar}) => ({...prev, [key]:Tar}), {});
    const [curr, setCurr] = useState(sArr[0].key);
    const Sub = sKvs[curr];

    return <div className="ROUTE ROOT">
        <Top/>
        <Nav DATA={sArr} EV_CHANGE={setCurr}/>
        <Sub/>
    </div>
}
