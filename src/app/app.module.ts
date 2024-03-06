import { MatTableModule } from '@angular/material/table';
import { StockDetailComponent } from './stock-detail/stock-detail.component';
import { AppComponent } from './app.component';
import { StockListComponent } from './stock-list/stock-list.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    StockListComponent,
    StockDetailComponent
    // Other components
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatTableModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
