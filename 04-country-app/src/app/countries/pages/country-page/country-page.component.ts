import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountriesService } from '../../services/countries.service';
import { switchMap } from 'rxjs';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
})
export class CountryPageComponent implements OnInit {
  public country?: Country;

  constructor(
    private activatedRoute: ActivatedRoute,
    private countriesService: CountriesService,
    private router: Router
  ) {}

  get traductions() {
    return this.country
      ? Object.values(this.country.translations).map((value) => value.common)
      : [];
  }

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap(({ id }) =>
          this.countriesService.searchCountryByAlphaCode(id)
        )
      )
      .subscribe((country) => {
        if (!country) return this.router.navigateByUrl('');

        return (this.country = country);
      });
  }
}
