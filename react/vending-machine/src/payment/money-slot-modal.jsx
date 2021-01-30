import React from 'react'
import Modal from "react-modal"

const MoneySlotModal = (props) => {

    // モーダルのcss定義
    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            textAlign: 'center'
        }
    };

    return (
        <Modal
            isOpen={props.isModalOpen}
            onRequestClose={() => props.setIsOpen(false)}
            style={customStyles}
        >
            <div class="moneyButton">
                {props.useableMoney.map(money => {
                    return <img src={`./${money}yen.png`} alt="" onClick={() => props.pay(money)}></img>
                })}
            </div>
            <button onClick={() => props.setIsOpen(false)} >閉じる</button>
        </Modal>
    )

}

export default MoneySlotModal