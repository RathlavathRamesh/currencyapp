// Write your JS code here
import './index.css'
import {Component} from 'react'

class CryptoItem extends Component {
  render() {
    const {item} = this.props
    const {currencyLogo, currencyName, usdValue, euroValue} = item
    return (
      <li className="box2">
        <div className="sm">
          <img src={currencyLogo} alt={currencyName} className="logo" />
          <p className="cuname">{currencyName}</p>
        </div>
        <div className="sm">
          <p className="usd1">{usdValue}</p>
          <p className="usd1">{euroValue}</p>
        </div>
      </li>
    )
  }
}
export default CryptoItem
