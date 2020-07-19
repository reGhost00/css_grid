import React, { useState } from "react";
import S1 from "./s1";
import S2 from "./s2";
import S3 from "./s3";
import S4 from "./s4";

function Top(){
    return <div className="CPMT TOP FN DF">
        <span className="tit m">CSS Grid</span>
        <span className="tit s">基于弹性布局的栅格系统</span>
    </div>
}

function Nav({DATA, CURR, EV_CHANGE}){
    const list = Array.isArray(DATA) && "function" === typeof EV_CHANGE ? DATA.map(obj => <li className={`it${CURR === obj.key ? " active" : ""}`} key={obj.key} onClick={() => EV_CHANGE(obj.key)}>{obj.tit}</li>) : [];
    return <ul className="CPMT NAV DF FN">
        {list}
    </ul>
}

export default function(){
    const sArr = [{tit:"关于", key:"about", Tar:S2}, {tit:"主页", key:"home", Tar:S1}, {tit:"文档", key:"doc", Tar:S3}, {tit:"表单", key:"form", Tar:S4}],
        sKvs = sArr.reduce((prev, {key, Tar}) => ({...prev, [key]:Tar}), {});
    const [curr, setCurr] = useState(sArr[0].key);
    const Sub = sKvs[curr];

    return <div className="ROUTE ROOT DF FDC">
        <Top/>
        <Nav DATA={sArr} CURR={curr} EV_CHANGE={setCurr}/>
        <Sub/>
    </div>
}
