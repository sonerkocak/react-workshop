import React, {useRef} from "react";

export default function TextInputWithFocusButton() {

    const inputEl = useRef(null);

    const onButtonClick = () => {
        inputEl.current.focus();
    };

    return (
        <>
            <input autoFocus ref={inputEl} type="text" />
            <button onClick={onButtonClick}>Focus the input</button>
        </>
    );
}
