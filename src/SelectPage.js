import React, {useState} from "react";

const options = [
    {id: 1, name: 'Option-1'},
    {id: 2, name: 'Option-2'},
    {id: 3, name: 'Option-3'},
];

export default function SelectPage() {

    const [selected, setSelected] = useState(null);

    return (
        <>
            {options.map(val =>
            <div key={val.id}>
                <button onClick={() => setSelected(val.id)} disabled={selected === val.id}>{val.name}</button>
            </div>)}
        </>
    );

}
