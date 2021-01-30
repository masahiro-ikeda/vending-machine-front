import React from 'react'
import './payment-amount.css'

// 投入金額を表示させる
const PaymentAmount = (props) => {

    return (
        <div class="paymentAmount">{`￥ ${props.paymentAmount}`}</div>
    )
}

export default PaymentAmount