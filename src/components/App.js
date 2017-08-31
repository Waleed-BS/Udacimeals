import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addRecipe, removeFromCalendar } from '../actions'
import { capitalize } from '../utils/helpers'
import CalendarIcon from 'react-icons/lib/fa/calendar-plus-o'

class App extends Component {

  render() {
    // console.log('Props ', this.props)
    const { calendar, remove } = this.props
    const mealOrder = ['breakfast', 'lunch', 'dinner']


    return (
      <div id='container'>
        <ul className="meal-types">
        {
          mealOrder.map( (mealType) => (
            <li key={mealType} className='subheader'>
              {capitalize(mealType)}
            </li>
          ))
        }
        </ul>

        <div className='calendar'>
          <div className='days'>
            {calendar.map(({ day }) => <h3 key={day} className='subheader'>{capitalize(day)}</h3>)}
          </div>
          <div className='icon-grid'>
            {calendar.map(({ day, meals }) => (
              <ul key={day}>
                {mealOrder.map((meal) => (
                  <li key={meal} className='meal'>
                    {meals[meal]
                      ? <div className='food-item'>
                          <img src={meals[meal].image} alt={meals[meal].label}/>
                          <button onClick={() => remove({meal, day})}>Clear</button>
                        </div>
                      : <button className='icon-btn'>
                          <CalendarIcon size={30}/>
                        </button>}
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>

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
