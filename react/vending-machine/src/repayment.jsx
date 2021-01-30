import React from 'react'
import './repayment.css'

// 返金レバー
const Repayment = (props) => {

    return(
        <img class="repayment" src="./repayment.png" alt="" onClick={props.repay}/>
    )
}

export default Repayment