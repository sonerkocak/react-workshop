import React, {useEffect} from "react";
import useStateWithLocalStorage from "./useStateWithLocalStorage";

export default function AltSayfa(props) {

    const [sayi, setSayi] = useStateWithLocalStorage(0, 'sayi');

    useEffect(() => {
       console.log('AltSayfa yüklendi');

       return () => console.log('AltSayfa kalkıyor');
    }, []);

    return (
        <>
            <div>
                Alt sayfa
            </div>
            <div>
                <button onClick={() => setSayi(sayi + 1)} >Alt Sayfa Artır {sayi}</button>
            </div>
        </>
    );

}
