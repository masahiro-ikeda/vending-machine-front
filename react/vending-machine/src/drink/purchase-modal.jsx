import React from 'react'
import Modal from "react-modal";

// 購入したドリンクを表示するモーダル
const PurchaseModal = (props) => {

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
            <img src={`./${props.drinkName}.png`} height="200px" alt=""></img>
            <p>ご購入ありがとうございます。</p>
            <button onClick={() => props.setIsOpen(false)} >閉じる</button>
        </Modal>
    )
}

export default PurchaseModal