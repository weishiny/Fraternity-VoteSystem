"use strict";
import { ADD_DATA } from '../constants/commonActionTypes';

export function addHero(item) {
	return {
        type: ADD_DATA,
        hero: item
	};
}
