import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DraggableWidgetComponentComponent } from './draggable-widget-component.component';

describe('DraggableWidgetComponentComponent', () => {
  let component: DraggableWidgetComponentComponent;
  let fixture: ComponentFixture<DraggableWidgetComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DraggableWidgetComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DraggableWidgetComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
