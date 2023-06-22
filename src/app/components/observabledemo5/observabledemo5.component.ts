import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {
  debounceTime,
  delay,
  exhaustMap,
  fromEvent,
  map,
  Observable,
  of,
  switchMap,
} from 'rxjs';

interface PeopleData {
  name: string;
  birthYear: string;
  height: number;
  weight: number;
  eyeColor: string;
}
@Component({
  selector: 'app-observabledemo5',
  templateUrl: './observabledemo5.component.html',
  styleUrls: ['./observabledemo5.component.css'],
})
export class Observabledemo5Component implements OnInit {
  searchResult$: Observable<PeopleData> | undefined;

  search = new FormControl();

  searchFormGroup = new FormGroup({
    search: this.search,
  });

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.exhaustMapDemo();

    this.searchResult$ = this.search.valueChanges.pipe(
      switchMap((term) =>
        this.http.get<any>(`https://swapi.dev/api/people/?search=${term}`)
      ),
      map((response) =>
        response.count > 0 ? response.results[0] : { name: 'No results' }
      ),
      map(
        (response) =>
          ({
            name: response.name,
            birthYear: response.birth_year,
            height: Number(response.height),
            weight: Number(response.mass),
            eyeColor: response.eye_color,
          } as PeopleData)
      )
    );
  }

  exhaustMapDemo() {
    const clicks = fromEvent(document, 'click');
    const result = clicks.pipe(
      exhaustMap(() => this.http.get('https://fakestoreapi.com/products'))
    );
    result.subscribe((x) => console.log(x));
  }

}
