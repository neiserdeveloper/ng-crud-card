import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CardModel } from '../model/card-model';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  URL_API: string = environment.API_CARD;
  constructor(private httpClient: HttpClient) {

  }

  getCards(): Observable<CardModel[]> {
    return this.httpClient.get<CardModel[]>(this.URL_API + '/list').pipe(map(res => res));
  }

  saveCard(request: any): Observable<any> {
    return this.httpClient.post<any>(this.URL_API + '/save', request).pipe(map(resp => resp));
  }

  updateCard(request: any): Observable<any> {
    return this.httpClient.post<any>(this.URL_API + '/update', request).pipe(map(resp => resp));
  }

  deleteCard(id: number): Observable<any> {
    return this.httpClient.get<any>(this.URL_API + '/delete/' + id).pipe(map(resp => resp));
  }
}
