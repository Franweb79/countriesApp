import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeeCountryComponent } from './see-country.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('SeeCountryComponent', () => {
  let component: SeeCountryComponent;
  let fixture: ComponentFixture<SeeCountryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeeCountryComponent ],
      imports:[RouterTestingModule, HttpClientModule, BrowserAnimationsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeeCountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
