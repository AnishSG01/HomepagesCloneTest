import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { DraggableWidgetComponentComponent } from './Components/draggable-widget-component/draggable-widget-component.component';
import { WidgetGridComponent } from './Components/widget-grid/widget-grid.component';

@NgModule({
  declarations: [
    AppComponent,
    DraggableWidgetComponentComponent,
    WidgetGridComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DragDropModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
