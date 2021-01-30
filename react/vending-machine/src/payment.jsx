import React from 'react'
import Axios from 'axios'
import PaymentAmount from './paymentAmount'
import Repayment from './repayment'
import MoneySlot from './moneySlot'

const Payment = (props) => {

    // お金を入れる
    const pay = (money) => {
        Axios
            .post('http://localhost:8080/api/pay', {
                amount: money
            })
            .then((result) => {
                props.initialize();
            })
            .catch((error) => {
                alert("pay: error");
            })
    }

    // 返金
    const repay = () => {
        Axios
            .post('http://localhost:8080/api/repay')
            .then((result) => {
                props.initialize();
            })
            .catch((error) => {
                alert("repay: error");
            })
    }

    return (
        <div>
            <div id="payment-container">
                <PaymentAmount
                    paymentAmount={props.paymentAmount}
                />
                <Repayment
                    repay={repay}
                />
                <MoneySlot
                    pay={(money) => pay(money)}
                />
            </div>
        </div>
    )

}

export default Payment