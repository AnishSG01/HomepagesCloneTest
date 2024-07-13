import { Component } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-widget-grid',
  templateUrl: './widget-grid.component.html',
  styleUrls: ['./widget-grid.component.scss']
})
export class WidgetGridComponent {
  movies = [
    { name: 'Widget 1', size: 1, desc: 'BP Info' },
    { name: 'Widget 2', size: 1, desc: 'Transaction Details' },
    { name: 'Widget 3', size: 1, desc: 'Sales in Recievable' },
    { name: 'Widget 4', size: 1, desc: 'Credit Rating' },
    { name: 'Widget 5', size: 2, desc: 'Recievable Overview' },
    { name: 'Widget 6', size: 2, desc: 'Account Contacts' },
  ];

  // Separate the movies into two lists for demonstration
  horizontalMovies = this.movies.slice(0, 2);
  verticalMovies = this.movies.slice(2);

  trackMovie(index: number, movie: { name: string; size: number; desc: string }): string {
    return movie.name;
  }

  drop(event: CdkDragDrop<{ name: string; size: number; desc: string }[]>) {
    if (event.previousContainer === event.container) {
      // Move item within the same list
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      // Move item to a different list
      transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
    }
    console.log(this.horizontalMovies);
    console.log(this.verticalMovies);
  }
}
