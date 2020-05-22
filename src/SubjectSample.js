import React from "react";
import useSubject from "./useSubject";
import {saatGuncelle, saatSubject} from "./Magaza";
import useTimer from "./useTimer ";

export default function SubjectSample() {

    const time = useSubject(saatSubject, null);

    useTimer(val => {
        saatGuncelle();
    }, 1000, true);

    return(
        <div>
            {time}
        </div>
    );

}