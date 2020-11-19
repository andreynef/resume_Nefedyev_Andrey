import {ON_TITLE_CLICK} from "../actionTypes/actionTypes";

export function onTitleClickHandler(id) {
    return {
        type: ON_TITLE_CLICK,
        id
    }
}



