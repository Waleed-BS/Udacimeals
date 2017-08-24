
/*
constant rather than strings,
when its passed to reduce, better to use constant for comparison
*/
export const ADD_RECIPE = 'ADD_RECIPE'
export const REMOVE_FROM_CALENDAR = 'REMOVE_FROM_CALENDAR'

// Action Creators

/*
An action is a payload of information describing state 
changing events that occur in the application.
*/

export function addRecipe({ day, recipe, meal }) {
  return {
    type: ADD_RECIPE,
    recipe,
    day,
    meal,
  }
}

export function removeFromCalendar({ day, meal }) {
  return {
    type: REMOVE_FROM_CALENDAR,
    day,
    meal,
  }
}
