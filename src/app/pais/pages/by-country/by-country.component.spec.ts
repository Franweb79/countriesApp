import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ByCountryComponent } from './by-country.component';
import { CountryService } from '../../services/country.service';
import { InputComponentComponent } from '../../components/input-component/input-component.component';

describe('ByCountryComponent', () => {
  let component: ByCountryComponent;
  let fixture: ComponentFixture<ByCountryComponent>;
  let _countryService:CountryService;

  let inputComponent:InputComponentComponent;
  let fixtureInput: ComponentFixture<InputComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ByCountryComponent, InputComponentComponent ],
      imports:[HttpClientModule],
      providers:[CountryService]

    })
    .compileComponents();

    fixture = TestBed.createComponent(ByCountryComponent);
    fixtureInput=TestBed.createComponent(InputComponentComponent);
    component = fixture.componentInstance;
    inputComponent=fixtureInput.componentInstance;
    fixture.detectChanges();
    fixtureInput.detectChanges();
    _countryService=TestBed.inject(CountryService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should search',async()=>{

    inputComponent.term="spain";
    inputComponent.pressedKeyEvent();
   await component.search(inputComponent.term);

    expect(component.term).toBe("spain");

    expect(component.byCountryResults.length).toBeGreaterThan(0);
  })
});
