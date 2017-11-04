import { CHANGE_LABEL, CHANGE_TITLE } from './homeActions';

export default function homeReducer(state = {}, action) {
    switch (action.type) {
    case CHANGE_LABEL:
    case CHANGE_TITLE:
        return Object.assign({}, state, {
            label: action.label
        });
    default:
        return state;
    }
}
