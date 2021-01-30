import React from 'react'

const Change = (props) => {

    return (
        <>
            <img id={props.amount} src={`./${props.amount}yen.png`} height="80px" alt="" />
            <label for={props.amount}>{` ✕ ${props.quantity}`}</label>
        </>
    )
}

export default Change