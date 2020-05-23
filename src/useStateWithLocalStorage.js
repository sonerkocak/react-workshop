import {useEffect, useState} from "react";

export default function useStateWithLocalStorage(initialVal, key) {

    const [val, setVal] = useState(initialVal);

    useEffect(() => {
        console.log('Read from LS');
        const valFromLS = localStorage.getItem(key);
        if (valFromLS) {
            console.log(JSON.parse(valFromLS));
            setVal(JSON.parse(valFromLS));
        }
    }, [key]);

    useEffect(() => {
        console.log('Set to LS');
        const valToLS = JSON.stringify(val);
        console.log(valToLS);
        localStorage.setItem(key, valToLS);
    }, [key, val]);

    return [val, setVal];
}
