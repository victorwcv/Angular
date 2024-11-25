import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Gif, SearchResponse } from "../interfaces/gifs.interfaces";
import { environment } from "../../../.environments/environment";

@Injectable({
  providedIn: "root",
})
export class GifsService {
  // Properties
  public gifList: Gif[] = [];

  private _tagsHistory: string[] = [];
  private apiKey: string = environment.apikey;
  private url: string = environment.endpoint;

  // Constructor
  constructor(private http: HttpClient) {
    this.loadLocalStorage();
    console.log("Gif service ready!");
  }

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

    this.saveLocaleStorage();
  }

  private saveLocaleStorage(): void {
    localStorage.setItem("history", JSON.stringify(this._tagsHistory));
  }

  private loadLocalStorage(): void {
    const temporal = localStorage.getItem("history");
    if (!temporal) return;
    this._tagsHistory = JSON.parse(temporal);

    if (this._tagsHistory.length === 0) return;
    this.searchTag(this._tagsHistory[0]);
  }

  searchTag(tag: string): void {
    if (tag.length <= 1) return;
    this.organizeHistory(tag);

    // fetch params
    const params = new HttpParams()
      .set("api_key", this.apiKey)
      .set("limit", "10")
      .set("q", tag);

    // fetching data with http
    this.http
      .get<SearchResponse>(`${this.url}/search`, { params })
      .subscribe((res) => {
        this.gifList = res.data;
      });
  }
}
