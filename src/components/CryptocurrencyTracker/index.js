// Write your code here
import './index.css'
import Loader from 'react-loader-spinner'
import {Component} from 'react'
import CurrencyItem from '../CryptocurrenciesList'

class CryptocurrencyTracker extends Component {
  state = {isLoading: true}

  componentDidMount() {
    this.getjasondata()
  }

  getjasondata = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    const formatted = data.map(each => ({
      id: each.id,
      currencyLogo: each.currency_logo,
      currencyName: each.currency_name,
      usdValue: each.usd_value,
      euroValue: each.euro_value,
    }))
    this.setState({isLoading: false, data: formatted})
  }

  render() {
    const {isLoading, data} = this.state
    return (
      <div className="bgConataintr">
        {isLoading ? (
          <div data-testid="loader" className="loader">
            <Loader type="Rings" color="#ffffff" height={80} width={80} />
          </div>
        ) : (
          <CurrencyItem data={data} />
        )}
      </div>
    )
  }
}
export default CryptocurrencyTracker
