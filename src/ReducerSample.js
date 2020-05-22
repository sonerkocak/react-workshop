import React, {useReducer} from "react";

function reducer(state, action) {
    switch (action.type) {
        case 'increment':
            return {...state, likeCount: state.likeCount + 1};
        case 'decrement':
            return {...state, likeCount: state.likeCount - 1};
        default:
            throw new Error();
    }
}

const initialState = {messageId: 1, likeCount: 0};

export default function ReducerSample() {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <>
            Count: {state.likeCount}
            <button onClick={() => dispatch({type: 'decrement'})}>-</button>
            <button onClick={() => dispatch({type: 'increment'})}>+</button>
        </>
    );
}
