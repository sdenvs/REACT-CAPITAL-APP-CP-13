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
  state = {country: countryAndCapitalsList[0].country}

  changed = () => {
    const idChanged = document.getElementById('capitals').value
    const changedObj = countryAndCapitalsList.filter(
      eachItem => eachItem.id === idChanged,
    )
    this.setState({country: changedObj[0].country})
  }

  OptionsTag = props => {
    const {details} = props
    const {capitalDisplayText, id} = details
    return <option value={id}>{capitalDisplayText}</option>
  }

  render() {
    const {country} = this.state
    return (
      <div className="bgContainer">
        <div className="card">
          <h1>Countries And Capitals</h1>
          <div>
            <select
              className="selectEl"
              onChange={this.changed}
              name="capitals"
              id="capitals"
            >
              {countryAndCapitalsList.map(eachItem => (
                <this.OptionsTag key={eachItem.id} details={eachItem} />
              ))}
            </select>
            <p>is capital of which country?</p>
          </div>
          <h1>{country}</h1>
        </div>
      </div>
    )
  }
}

export default Capitals
