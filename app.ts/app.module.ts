import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import {MyListComponent} from './mylist.component';
import {ProductsComponent} from './products.component';
import {ProductService} from './products.service';

@NgModule({
	imports: [
		BrowserModule,
		FormsModule
	],
	declarations: [
		AppComponent,
		MyListComponent,
		ProductsComponent
	],
	providers: [ProductService],
	bootstrap: [AppComponent]
})
export class AppModule {}
