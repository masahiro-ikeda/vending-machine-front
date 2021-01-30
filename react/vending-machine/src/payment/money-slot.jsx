import React from "react";
import MoneySlotModal from './money-slot-modal'
import './money-slot.css';

// お金の投入口
const MoneySlot = (props) => {
    const [isModalOpen, setIsOpen] = React.useState(false);

    // 支払えるお金
    const useableMoney = [10, 50, 100, 500, 1000];

    return (
        <div>
            <img class="moneySlot" src="./moneySlot.png" alt="" onClick={() => setIsOpen(true)}></img>
            <MoneySlotModal
                isModalOpen={isModalOpen}
                setIsOpen={(bool) => setIsOpen(bool)}
                useableMoney={useableMoney}
                pay={(money) => props.pay(money)}
            />
        </div>
    );
}

export default MoneySlot
