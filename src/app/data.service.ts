import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  zomatoUrl = 'https://zomato-10788-default-rtdb.asia-southeast1.firebasedatabase.app/'
  constructor(private http: HttpClient) { }

  createPosts(data) {
    return this.http.post(this.zomatoUrl, data);
  }
}
