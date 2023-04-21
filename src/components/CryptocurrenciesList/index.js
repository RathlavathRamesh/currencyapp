// Write your JS code here
import './index.css'
import {Component} from 'react'
import CryptoItem from '../CryptocurrencyItem'

class CurrencyItem extends Component {
  render() {
    const {data} = this.props
    return (
      <div>
        <h1 className="heading">Cryptocurrency Tracker</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          alt="cryptocurrency"
          className="bgImage"
        />
        <ul className="Items-Box">
          <div className="box">
            <p>CoinType</p>
            <div className="sm">
              <p className="usd">USD</p>
              <p className="usd">EURO</p>
            </div>
          </div>
          {data.map(each => (
            <CryptoItem item={each} key={each.id} />
          ))}
        </ul>
      </div>
    )
  }
}
export default CurrencyItem
