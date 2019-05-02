import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReativeFormBuilderComponent } from './reative-form-builder.component';

describe('ReativeFormBuilderComponent', () => {
  let component: ReativeFormBuilderComponent;
  let fixture: ComponentFixture<ReativeFormBuilderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReativeFormBuilderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReativeFormBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
