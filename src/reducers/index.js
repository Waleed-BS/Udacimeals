import {
  ADD_RECIPE,
  REMOVE_FROM_CALENDAR
} from '../actions'

const initialCalendarState = {
  sunday: {
    breakfast: null,
    lunch: null,
    dinner: null,
  },
  monday: {
    breakfast: null,
    lunch: null,
    dinner: null,
  },
  tuesday: {
    breakfast: null,
    lunch: null,
    dinner: null,
  },
  wednesday: {
    breakfast: null,
    lunch: null,
    dinner: null,
  },
  thursday: {
    breakfast: null,
    lunch: null,
    dinner: null,
  },
  friday: {
    breakfast: null,
    lunch: null,
    dinner: null,
  },
  saturday: {
    breakfast: null,
    lunch: null,
    dinner: null,
  },
}

// reducer function

/*
responsible for deciding the shape and the initial state of the
store and when an action is dispatched, the state it
returns will become the new state of the store.
*/

function calendar (state = initialCalendarState, action) {
  const { day, recipe, meal } = action

  switch (action.type) {
    case ADD_RECIPE:
    return {
      ...state,
      [day]: {
        ...state[day],
        [meal]: recipe.label,
      }
    }
    case REMOVE_FROM_CALENDAR:
    return {
      ...state,
      [day]: {
        ...state[day],
        [meal]: null,
      }
    }

    default:
    return state
  }

}

export default calendar
