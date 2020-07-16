import React from "react";
import FNS from "../util/func";

export default function(){
    const lst1 = FNS.factoryList(5, {tit:"R" ,className:"C"}),
        lst2 = FNS.factoryList(9, {tit:"R"   ,className:"C"}),
        lst3 = FNS.factoryList(17, {tit:"R"   ,className:"C"});
    return <div className="ROUTE S1 FA">
        <ul className="R BP3">{lst1}</ul>
        <ul className="R">{lst2}</ul>
        <ul className="R">{lst3}</ul>
    </div>
}
