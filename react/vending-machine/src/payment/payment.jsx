import React from 'react'
import Axios from 'axios'
import PaymentAmount from './payment-amount'
import Repayment from './repayment'
import MoneySlot from './money-slot'
import ChangeModal from './change-modal'
import './payment.css'

const Payment = (props) => {

    const [repayments, setRepayments] = React.useState([]);
    const [isModalOpen, setIsOpen] = React.useState(false);

    // お金を入れる処理
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

    // 返金処理
    const repay = () => {
        Axios
            .post('http://localhost:8080/api/repay')
            .then((result) => {
                const repayments = result.data.repayments;
                if (repayments.length === 0) {
                    return;
                }
                setRepayments(repayments);
                setIsOpen(true);
                props.initialize();
            })
            .catch((error) => {
                alert("repay: error");
            })
    }

    return (
        <div id="payment-container">
            <div class="payment-component">
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
            <ChangeModal
                isModalOpen={isModalOpen}
                setIsOpen={(bool) => setIsOpen(bool)}
                changes={repayments}
            />
        </div>
    )

}

export default Payment