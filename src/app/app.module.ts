import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputSectionComponent } from './Components/input-section/input-section.component';
import { ToDolistComponent } from './Components/to-dolist/to-dolist.component';

@NgModule({
  declarations: [AppComponent, InputSectionComponent, ToDolistComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
