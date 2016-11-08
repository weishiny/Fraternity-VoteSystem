"use strict";
import { ADD_DATA, REMOVE_DATA } from '../constants/commonActionTypes'
import * as lodash from 'lodash'

export default function common(state = {
        heros: []
    }, action) {
	switch (action.type) {
        case ADD_DATA:
            return lodash.assignIn({}, state, {
                heros: lodash.concat(state.heros, action.hero)
            });
		default:
			return state;
	}
}
