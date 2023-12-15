import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditbureauComponent } from './editbureau.component';

describe('EditbureauComponent', () => {
  let component: EditbureauComponent;
  let fixture: ComponentFixture<EditbureauComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditbureauComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditbureauComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
