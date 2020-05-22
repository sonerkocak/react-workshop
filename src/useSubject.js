import {useEffect, useState} from "react";

export default function useSubject(subject, initialValue) {

    const [data, setData] = useState(initialValue);

    useEffect(() => {
        const abonelik = subject.subscribe(deger => setData(deger) );

        return () => abonelik.unsubscribe();
    });

    return data;
}