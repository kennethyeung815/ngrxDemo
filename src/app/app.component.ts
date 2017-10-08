import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable} from 'rxjs/Observable';
import { INCREMENT, DECREMENT, RESET } from './reducers/counter.reducer';

interface AppState {
	counter: number;
	message: string;
}

@Component({
	selector: 'app-root',
	template: `
		<h1>Current Count: {{ counter$ | async }}</h1>
		
		<button (click)="increment()">Increment</button>
		<button (click)="decrement()">Decrement</button>
		<button (click)="reset()">Reset Counter</button>
		
		<br /><br />
		Code from:
		<a href="https://github.com/ngrx/platform/blob/master/docs/store/README.md" target="_blank">
			https://github.com/ngrx/platform/blob/master/docs/store/README.md
		</a>
	`
})

export class AppComponent {
	counter$: Observable<number>;
	
	constructor(private store: Store<AppState>) {
		this.counter$ = store.select('counter');
	}
	
	increment(){
		this.store.dispatch({ type: INCREMENT });
	}
	
	decrement(){
		this.store.dispatch({ type: DECREMENT });
	}
	
	reset(){
		this.store.dispatch({ type: RESET });
	}
}
