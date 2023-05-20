import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AskedQuestionComponent } from './asked-question.component';

describe('AskedQuestionComponent', () => {
  let component: AskedQuestionComponent;
  let fixture: ComponentFixture<AskedQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AskedQuestionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AskedQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
