import { Component } from '@angular/core';
import {
  CdkDrag,
  CdkDragDrop,
  CdkDragPlaceholder,
  CdkDropList,
  moveItemInArray,
} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-draggable-widget-component',
  templateUrl: './draggable-widget-component.component.html',
  styleUrl: './draggable-widget-component.component.scss',
})
export class DraggableWidgetComponentComponent {
  // movies = [
  //   'Episode I - The Phantom Menace',
  //   'Episode II - Attack of the Clones',
  //   'Episode III - Revenge of the Sith',
  //   'Episode IV - A New Hope',
  //   'Episode V - The Empire Strikes Back',
  //   'Episode VI - Return of the Jedi',
  //   'Episode VII - The Force Awakens',
  //   'Episode VIII - The Last Jedi',
  //   'Episode IX - The Rise of Skywalker',
  // ];

  // drop(event: CdkDragDrop<string[]>) {
  //   moveItemInArray(this.movies, event.previousIndex, event.currentIndex);
  // }

  // items = ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];

  // drop(event: CdkDragDrop<string[]>) {
  //   moveItemInArray(this.items, event.previousIndex, event.currentIndex);
  // }
}
