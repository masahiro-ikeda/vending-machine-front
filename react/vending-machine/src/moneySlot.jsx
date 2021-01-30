import React from "react";
import Modal from "react-modal";
import './moneySlot.css';

// お金の投入口
const MoneySlot = (props) => {
    const [isModalOpen, setIsOpen] = React.useState(false);

    // モーダルのcss定義
    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)'
        }
    };

    // 支払えるお金
    const useableMoney = [10, 50, 100, 500, 1000];

    Modal.setAppElement("#root");

    return (
        <div>
            <img class="moneySlot" src="./moneySlot.png" alt="" onClick={() => setIsOpen(true)}></img>
            <Modal
                isOpen={isModalOpen}
                onRequestClose={() => setIsOpen(false)}
                style={customStyles}
            >
                <div class="moneyButton">
                    {useableMoney.map(money => {
                        return <img src={`./${money}yen.png`} alt="" onClick={() => props.pay(money)}></img>
                    })}
                </div>
            </Modal>
        </div>
    );
}

export default MoneySlot
