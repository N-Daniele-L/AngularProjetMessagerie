import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewbureauComponent } from './newbureau.component';

describe('NewbureauComponent', () => {
  let component: NewbureauComponent;
  let fixture: ComponentFixture<NewbureauComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewbureauComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewbureauComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
