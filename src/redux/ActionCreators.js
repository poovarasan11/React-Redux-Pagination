
import * as action from "./ActionTypes"

export function page_action(payload) {
    return ({ type: action.PAGE_DATA_CHANGE, payload })
}
export function page_number(payload) {
    return ({ type: action.PAGE_NUMBER, payload })
}
export function before_date_action(payload) {
    return ({ type: action.BEFORE_DATE, payload })
}
export function after_date_action(payload) {
    return ({ type: action.AFTER_DATE, payload })
}


