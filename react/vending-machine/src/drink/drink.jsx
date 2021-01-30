import React from 'react'
import Axios from 'axios'
import PurchaseModal from './purchase-modal'
import ChangeModal from '../payment/change-modal'
import './drink.css'

const Drink = (props) => {

    const [isPurchaseModalOpen, setIsPurchaseModalOpen] = React.useState(false);
    const [isChangeModalOpen, setIsChangeModalOpen] = React.useState(false);
    const [changes, setChanges] = React.useState([]);

    // 購入処理
    const buy = () => {
        Axios
            .post('http://localhost:8080/api/buy', {
                drinkId: props.drinkId
            })
            .then((result) => {
                setChanges(result.data.changes);
                setIsChangeModalOpen(true);
                setIsPurchaseModalOpen(true);
                props.initialize();
            })
            .catch((error) => {
                alert("error");
            })
    }

    return (
        <div>
            <div class="drink">
                <img class="drink-img" src={`./${props.drinkName}.png`} alt=""></img>
                {props.drinkTemperature === "cold" ?
                    <p class="cold-bar">つめたい</p> : <p class="hot-bar">あたたかい</p>
                }
                <p class="drink-price">{`￥ ${props.drinkPrice}`}</p>
                <div class="button-wrapper">
                    <button class="purchase-button" onClick={buy} disabled={!props.saleable}>購入</button>
                </div>
            </div>

            <ChangeModal
                isModalOpen={isChangeModalOpen}
                setIsOpen={(bool) => setIsChangeModalOpen(bool)}
                changes={changes}
            />

            <PurchaseModal
                isModalOpen={isPurchaseModalOpen}
                setIsOpen={(bool) => setIsPurchaseModalOpen(bool)}
                drinkName={props.drinkName}
            />
        </div>
    )
}

export default Drink