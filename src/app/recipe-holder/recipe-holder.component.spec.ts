import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeHolderComponent } from './recipe-holder.component';

describe('RecipeHolderComponent', () => {
  let component: RecipeHolderComponent;
  let fixture: ComponentFixture<RecipeHolderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeHolderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeHolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
