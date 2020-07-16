import React from "react";
import FNS from "../util/func";

export default function(){
    const lst1 = FNS.factoryList(3, {tit:"弹性" ,className:"FN"}),
        lst2 = FNS.factoryList(5, {tit:"弹性"   ,className:"FN"}),
        lst3 = FNS.factoryList(7, {tit:"弹性"   ,className:"FN"});
    return <div className="ROUTE S1 FA">
        <ul className="DF">{lst1}</ul>
        <ul className="DF">{lst2}</ul>
        <ul className="DF">{lst3}</ul>
    </div>
}
