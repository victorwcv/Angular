import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchResponse } from '../interfaces/gifs.interfaces';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  // Properties
  public gifList: Gif[] = [];

  private _tagsHistory: string[] = [];
  private apiKey: string = 'TG6abiWS5eo5qgnMQmvGsXRWBQEg9QGs';
  private url: string = 'https://api.giphy.com/v1/gifs';

  // Constructor
  constructor(private http: HttpClient) {}

  // Getters
  get tagsHistory() {
    return [...this._tagsHistory];
  }

  // Methods
  private organizeHistory(tag: string) {
    tag = tag.toLowerCase().trim();

    if (this._tagsHistory.includes(tag)) {
      this._tagsHistory = this._tagsHistory.filter((oldTag) => oldTag !== tag);
    }

    this._tagsHistory.unshift(tag);
    this._tagsHistory = this.tagsHistory.slice(0, 10);
  }

  searchTag(tag: string): void {
    if (tag.length <= 1) return;
    this.organizeHistory(tag);

    // fetch params
    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('limit', '10')
      .set('q', tag);

    // fetching data with http
    this.http
      .get<SearchResponse>(`${this.url}/search`, { params })
      .subscribe((res) => {
        this.gifList = res.data;
        console.log(this.gifList);
      });
  }
}
