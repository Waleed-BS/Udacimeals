import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addRecipe, removeFromCalendar } from '../actions'

class App extends Component {

  render() {
    console.log('Props ', this.props)
    return (
      <div>
        Hello World
      </div>
    )
  }
}

/*
takes in the state as an aurgment and maps it to be a usable prop
*/
function mapStateToProps({ calendar, food }) {
  const dayOrder = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

  return {
    calendar: dayOrder.map((day) => ({
      day,
      meals: Object.keys(calendar[day]).reduce((meals, meal) => {
        meals[meal] = calendar[day][meal]
        ? food[calendar[day][meal]] // food item rather than just ID
        : null
        // console.log("day =", day)
        // console.log("meal =", meal)
        // console.log("meals =", meals)
        return meals
      }, {})
    }))
  }

}

function mapDispatchToProps(dispatch) {
  return {
    //wrapping action creators inside mapDispatchToProps
    selectRecipe: (data) => dispatch(addRecipe(data)),
    remove: (data) => dispatch(removeFromCalendar(data)),
  }
}

/*
connect() connects a React component to the Redux store.
To dispatch an action inside this component,
connect that component to be able to call dispatch
*/
export default connect(mapStateToProps, mapDispatchToProps)(App);
