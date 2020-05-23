import {useEffect, useRef, useState} from "react";

export default function useStateWithLocalStorage(initialVal, key) {

    const [val, setVal] = useState(initialVal);

    const actualVal = useRef();

    useEffect(() => {
        actualVal.current = val;
    }, [val]);

    useEffect(() => {
        console.log('Read from LS');
        const valFromLS = localStorage.getItem(key);
        if (valFromLS) {
            console.log(JSON.parse(valFromLS));
            setVal(JSON.parse(valFromLS));
        }

        return () => writeToLS();
    // eslint-disable-next-line
    }, []);

    function writeToLS() {
        console.log('Set to LS');
        const valToLS = JSON.stringify(actualVal.current);
        console.log(valToLS);
        localStorage.setItem(key, valToLS);
    }

    return [val, setVal];
}
