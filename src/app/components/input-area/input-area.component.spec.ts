/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { InputAreaComponent } from './input-area.component';

describe('InputAreaComponent', () => {
  let component: InputAreaComponent;
  let fixture: ComponentFixture<InputAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
