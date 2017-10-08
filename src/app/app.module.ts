import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { counterReducer } from './reducers/counter.reducer';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		StoreModule.forRoot({ counter: counterReducer }),
		StoreDevtoolsModule.instrument({
			maxAge: 100
		}),
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
