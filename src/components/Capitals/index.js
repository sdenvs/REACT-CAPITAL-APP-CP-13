import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here
class Capitals extends Component {
  state = {clicked: false}

  changed = () => {
    this.setState({clicked: true})
  }

  render() {
    return (
      <div className="bgContainer">
        <div className="card">
          <h1>Countries and Capitals</h1>
          <div>
            <select
              className="selectEl"
              onChange={this.changed}
              name="capitals"
              id="capitals"
            >
              {countryAndCapitalsList.map(eachItem => (
                <option value={eachItem.country}>
                  {eachItem.capitalDisplayText}
                </option>
              ))}
            </select>
            <span>is capital of which country?</span>
          </div>
          <h1>{document.getElementById('capitals').value}</h1>
        </div>
      </div>
    )
  }
}

export default Capitals
