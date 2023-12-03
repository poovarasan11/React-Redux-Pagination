import * as actions from './ActionTypes'

//state
const initialState = {
    tableData: [],
    pageCount: 10,
    pageNumber: 1,
    beforeDate: "",
    afterDate: "",
}
//Reducer
export default function appReducer(state = initialState, action) {
    // console.log("before state Check::", state)
    // console.log("data input store::", action.payload)
    const { type, payload } = action;
    if (type === actions.PAGE_NUMBER) {
        state = { ...state, pageNumber: payload }

    } else if (type === actions.PAGE_DATA_CHANGE) {
        state = { ...state, tableData: payload }
    } else if (type === actions.AFTER_DATE) {
        state = { ...state, afterDate: payload }
    } else if (type === actions.BEFORE_DATE) {
        state = { ...state, beforeDate: payload }
    }
    return state
}
