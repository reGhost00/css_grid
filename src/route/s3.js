import React from "react";
import FNS from "../util/func";

export default function(){
    const lst1 = FNS.factoryList(9, {tit:"BP1" ,className:"C"}),
        lst2 = FNS.factoryList(9, {tit:"BP2"   ,className:"C"}),
        lst3 = FNS.factoryList(9, {tit:"BP3"   ,className:"C"});
    return <div className="ROUTE S3 FA">
        <ul className="R BP1">{lst1}</ul>
        <ul className="R BP2">{lst2}</ul>
        <ul className="R BP3">{lst3}</ul>
    </div>
}
