import React, {useEffect} from "react";

export default function AltSayfa(props) {

    useEffect(() => {
       console.log('AltSayfa yüklendi');

       return () => console.log('AltSayfa kalkıyor');
    }, []);


    return (
        <div>
            Alt sayfa
        </div>
    );

}
