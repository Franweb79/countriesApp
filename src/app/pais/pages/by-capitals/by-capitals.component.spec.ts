import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ByCapitalsComponent } from './by-capitals.component';
import { HttpClientModule } from '@angular/common/http';

describe('ByCapitalsComponent', () => {
  let component: ByCapitalsComponent;
  let fixture: ComponentFixture<ByCapitalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ByCapitalsComponent ],
      imports:[HttpClientModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ByCapitalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
