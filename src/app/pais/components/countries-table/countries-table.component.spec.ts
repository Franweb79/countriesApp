import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountriesTableComponent } from './countries-table.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('CountriesTableComponent', () => {
  let component: CountriesTableComponent;
  let fixture: ComponentFixture<CountriesTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountriesTableComponent ],
      imports: [HttpClientModule, BrowserAnimationsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CountriesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
