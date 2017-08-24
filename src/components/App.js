import React, { Component } from 'react';
import { addRecipe } from '../actions'

class App extends Component {
  state = {
    calendar: null
  }

  componentDidMount () {
    const { store } =  this.props
    /*
    "store.subscribe(callback)"
    takes in a listener callback function
    that will be invoked whenever the state of the store changes.
    */
    store.subscribe(() => {
      this.setState(() => ({
        calendar: store.getState()
      }))
    })
  }

  submitFood = () => {
    const { store } = this.props
    /*
    "store.dispatch(action)""
    takes in an action object and will call the reducer function,
    passing it the current state and the action which was
    dispatched.
    */
    store.dispatch(addRecipe({
      day: 'monday',
      meal: 'breakfast',
      recipe: {
        label: this.input.value
      }
    }))

    this.input.value = ''
  }

  render() {
    return (
      <div>
        <input
          type='text'
          ref={(input) => this.input = input}
          placeholder="Monday's Breakfast"
          />
        <button onClick={this.submitFood}>Submit</button>

        <pre>
          Monday's Breakfast: {this.state.calendar && this.state.calendar.monday.breakfast}
        </pre>
      </div>
    )
  }
}

export default App;
