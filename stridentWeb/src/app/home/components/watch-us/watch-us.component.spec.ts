import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchUsComponent } from './watch-us.component';

describe('WatchUsComponent', () => {
  let component: WatchUsComponent;
  let fixture: ComponentFixture<WatchUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WatchUsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WatchUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
