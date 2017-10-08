import { Action } from '@ngrx/store';

export const INCREMENT = 'INCREMENT';
export const INCREMENT_BY = 'INCREMENT_BY';
export const DECREMENT = 'DECREMENT';
export const RESET = 'RESET';

export class CounterAction implements Action {
	type: any;
	constructor(public payload: any) { }
}

export function counterReducer(state: number = 0, action: CounterAction) {
	switch (action.type) {
		case INCREMENT:
			return state + 1;
		case INCREMENT_BY:
			return state + action.payload;
		case DECREMENT:
			return state - 1;
		case RESET:
			return 0;
		default:
			return state;
	}
}
