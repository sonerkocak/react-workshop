import React, {useEffect, useState} from "react";
import AltSayfa from "./AltSayfa";
import './sayfa.css';
import useTimer from "./useTimer ";
import ReducerSample from "./ReducerSample";
import SubjectSample from "./SubjectSample";

export default function Sayfa(props) {

    const [sayi, setSayi] = useState(0);
    const [sayiKati, setSayiKati] = useState(0);
    const [altSayfaGoster, setAltSayfaGoster] = useState(true);

    const [obje, setObje] = useState({id: 1, adi: 'Bir'});

    useTimer(val => {
        //console.log(val);
        setSayi(sayi + 1);
    }, 5000, true);

    useEffect(() => {
        setSayiKati(sayi * sayi);
    }, [sayi]);

    function sayiArtir() {
        setSayi(sayi + 1);
    }

    function setObjeFn() {
        const newObje = {...obje, adi: 'İki'};
        setObje(newObje);
    }

    return (
        <div>
            <div className="baslik" style={{backgroundColor: 'blue'}}>
                {props.baslik ?? '[No title]'}
                <button onClick={sayiArtir} >Artır</button>
                {' '}
                <button onClick={() => setAltSayfaGoster(!altSayfaGoster)} >Alt Sayfa Toggle</button>
                <button onClick={setObjeFn}>setObje</button>
            </div>
            <div>
                {sayi} ^2 {sayiKati}
            </div>
            <div>
                {altSayfaGoster && <AltSayfa />}
            </div>
            <div>
                {obje.adi}
            </div>
            <div>
                <ReducerSample />
            </div>
            <div>
                <SubjectSample />
            </div>
            {props.goster &&
            <div>
                {props.children}
            </div>}
        </div>
    );

}
