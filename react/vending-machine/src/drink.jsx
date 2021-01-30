import React from 'react'
import Axios from 'axios'
import './drink.css'

const Drink = (props) => {

    // 購入処理
    const buy = () => {
        Axios
            .post('http://localhost:8080/api/buy', {
                drinkId: props.drinkId
            })
            .then((result) => {
                alert(result.data.drink.drinkName);
                props.initialize();
            })
            .catch((error) => {
                alert("error");
            })
    }

    return (
        <section class="drink">
            <img class="drink-img" src={`./${props.drinkName}.png`} alt=""></img>
            {props.drinkTemperature === "cold" ?
                <p class="cold-bar">つめたい</p> : <p class="hot-bar">あたたかい</p>
            }
            <p class="drink-price">{`￥ ${props.drinkPrice}`}</p>
            <div class="button-wrapper">
                <button class="purchase-button" onClick={buy} disabled={!props.saleable}>購入</button>
            </div>
        </section>
    )

}

export default Drink