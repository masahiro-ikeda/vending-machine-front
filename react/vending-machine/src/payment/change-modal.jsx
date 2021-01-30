import React from 'react'
import Modal from "react-modal"
import Change from './change'

const ChangeModal = (props) => {

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
            onRequestClose={() => {props.setIsOpen(false)}}
            style={customStyles}
        >
            <p>返金</p>
            {props.changes.map(change => {
                return <Change
                    amount={change.amount}
                    quantity={change.quantity}
                />
            })}
            <br />
            <br />
            <button onClick={() => {props.setIsOpen(false)}} >閉じる</button>
        </Modal>
    )
}

export default ChangeModal