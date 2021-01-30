import React from 'react'
import Axios from 'axios'
import Drinks from './drinks'
import Payment from './payment'
import './vending-machine.css'

export default class VendingMachine extends React.Component {

  // コンストラクタ
  constructor(props) {
    super(props)
    this.state = {
      drinks: [],
      paymentAmount: 0
    }
  }

  // 初期表示時の処理
  componentDidMount() {
    this.initialize();
  }

  // stateの初期化
  initialize = () => {
    this.fetchPaymentAmount();
    this.searchDrinks();
  }

  // 支払い済みの金額を取得
  fetchPaymentAmount = () => {
    Axios
      .get('http://localhost:8080/api/paymentAmount')
      .then((result) => {
        this.setState({
          paymentAmount: result.data
        });
      })
      .catch((error) => {
        alert("error")
      })
  }

  // APIから飲み物一覧を取得
  searchDrinks = () => {
    Axios
      .get('http://localhost:8080/api/drinks')
      .then((result) => {
        this.setState({
          drinks: result.data
        });
      })
      .catch((error) => {
        alert("error")
      })
  }

  render() {
    return (
      <div id="main-container">
        <Drinks
          drinks={this.state.drinks}
          initialize={this.initialize}
        />
        <Payment
          paymentAmount={this.state.paymentAmount}
          initialize={this.initialize}
        />
      </div>
    )
  }


}
