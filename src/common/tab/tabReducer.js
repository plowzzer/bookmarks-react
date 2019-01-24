const INITIAL_STATE = { selected: '' }

const TAB_SELECTED = 'TAB_SELECTED'

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case TAB_SELECTED:
            return { ...state, selected: action.payload }
        default:
            return state
    }
}