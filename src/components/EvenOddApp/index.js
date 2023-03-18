import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {Count: 0}

  IncrimentButton = () => {
    const {Count} = this.state
    const randomNumber = Math.floor(Math.random() * 100)
    const newCount = Count + randomNumber
    this.setState({Count: newCount})
  }

  render() {
    const {Count} = this.state
    const Iseven = Count % 2 === 0
    const result = Iseven ? 'Even' : 'Odd'

    return (
      <div className="app-container">
        <div className="count-container">
          <h1 className="count">Count {Count}</h1>
          <p className="number-category">Count is {result}</p>
          <div>
            <button
              className="increment-button"
              type="button"
              onClick={this.IncrimentButton}
            >
              Increment
            </button>
          </div>
          <p className="note">*Increase By Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
