import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    AppComponent  // Добавляем компонент сюда
  ],
  providers: [],
  bootstrap: [AppComponent]  // Указываем, что AppComponent будет корневым компонентом
})
export class AppModule { }
