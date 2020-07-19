import React from "react";
import FNS from "../util/func";

export default function(){
    const lst1 = FNS.factoryList(9, {tit:"BP1" ,className:"C"}),
        lst2 = FNS.factoryList(9, {tit:"BP2"   ,className:"C"}),
        lst3 = FNS.factoryList(9, {tit:"BP3"   ,className:"C"}),
        lst4 = FNS.factoryList(9, {tit:"BP4"   ,className:"C"}),
        lst5 = FNS.factoryList(9, {tit:"BP5"   ,className:"C"}),
        lst6 = FNS.factoryList(9, {tit:"BP6"   ,className:"C"}),
        lst7 = FNS.factoryList(9, {tit:"BP7"   ,className:"C"});
    return <div className="ROUTE S3 FA">
        <ul className="DF BP1">{lst1}</ul>
        <ul className="DF BP2">{lst2}</ul>
        <ul className="DF BP3">{lst3}</ul>
        <ul className="DF BP4">{lst4}</ul>
        <ul className="DF BP5">{lst5}</ul>
        <ul className="DF BP6">{lst6}</ul>
        <ul className="DF BP7">{lst7}</ul>
    </div>
}
