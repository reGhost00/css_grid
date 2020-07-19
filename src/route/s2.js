import React from "react";
import FNS from "../util/func";

export default function(){

    const Lst1 = <>
        <li _odd="" className="C5">C5</li>
        <li className="C5">C5</li>
        <li _odd="" className="C10">C10</li>
        <li className="C10">C10</li>
    </>

    return <div className="ROUTE S2 FA">
        <ul className="DF JCC BP9 BP8 BP7 BPR">{Lst1}</ul>
        <ul className="DF JCC BP11 BP10 BP9 BPR">{Lst1}</ul>
        <ul className="DF W BP2">
            <li _odd="" className="C C30BP6 C20BP5 C10BP4">C30BP6 C20BP5 C10BP4</li>
            <li className="C C30BP6 C25BP5 C20BP4">C30BP6 C25BP5 C20BP4</li>
            <li _odd="" className="C C10BP9 C15BP7">C10BP9 C15BP7</li>
            <li className="C C15BP10 C20BP8">C15BP10 C20BP8</li>
            <li _odd="" className="C10">C10</li>
        </ul>
        <ul className="DF W BP1">
            <li _odd="" className="C5 BP11">BP1</li>
            <li className="C5 BP12">BP2</li>
            <li _odd="" className="C3 BP7">BP2</li>
            <li className="C7 BP7">BP3</li>
            <li _odd="" className="C9 BP5">BP4</li>
        </ul>
    </div>
}
