import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Game } from '@bg-hoard/util-interface';
import { formatRating } from '@bg-hoard/store/util-formatters';

@Component({
  selector: 'bg-hoard-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private _http: HttpClient, @Inject('baseUrl') private _baseUrl: string) { }
  title = 'Board Game Hoard';
  games = this._http.get<Game[]>(`${this._baseUrl}/api/games`);
  formatRating = formatRating;
}
