import React from "react";
import FNS from "../util/func";

export default function(){
    const lst1 = FNS.factoryList(3, {tit:"弹性" ,className:"FN"}),
        lst2 = FNS.factoryList(5, {tit:"弹性"   ,className:"FA2"}),
        lst3 = FNS.factoryList(7, {tit:"弹性"   ,className:"FA3"});
    return <div className="ROUTE S1 FA">
        <ul className="DF">{lst1}</ul>
        <ul className="DF">{lst2}</ul>
        <ul className="DF">{lst3}</ul>
        <ul className="DF">
            <li _odd={1} className="FN col">FN</li>
            <li  className="FN col">FN</li>
            <li _odd={1} className="FG2 col">FG2</li>
            <li  className="FG2 col">FG2</li>
            <li _odd={1} className="FG3 col">FG3</li>
        </ul>
        <ul className="DF">
            <li _odd={1} className="FN col">FN</li>
            <li className="FN col">FN</li>
            <li _odd={1} className="FG4 col">FG4</li>
            <li className="FA col">FA</li>
        </ul>
    </div>
}
