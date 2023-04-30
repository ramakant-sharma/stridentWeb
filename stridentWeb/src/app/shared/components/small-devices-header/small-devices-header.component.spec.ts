import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallDevicesHeaderComponent } from './small-devices-header.component';

describe('SmallDevicesHeaderComponent', () => {
  let component: SmallDevicesHeaderComponent;
  let fixture: ComponentFixture<SmallDevicesHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmallDevicesHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmallDevicesHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
