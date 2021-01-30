import React from 'react'
import Drink from './drink'
import './drinks.css';

const Drinks = (props) => {
    return (
        <div id="drink-container">
            <div class="drink-list">
                {props.drinks.map((drink) => {
                    return <Drink
                        drinkId={drink.drinkId}
                        drinkName={drink.drinkName}
                        drinkPrice={drink.drinkPrice}
                        drinkTemperature={drink.drinkTemperature}
                        saleable={drink.saleable}
                        initialize={props.initialize}
                    />
                })}
            </div>
        </div>
    )
}

export default Drinks