import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CardModel } from '../model/card-model';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor(private httpClient: HttpClient) {

   }

   getCards(): Observable<CardModel[]>{
    return this.httpClient.get<CardModel[]>('http://localhost:9000/api/v1/card'+ '/list').pipe(map(res => res));
   }

    saveCard(request: any): Observable<any> {
      return this.httpClient.post<any>('http://localhost:9000/api/v1/card' + '/save', request).pipe(map(resp => resp));
    }

    updateCard(request: any): Observable<any> {
      return this.httpClient.post<any>('http://localhost:9000/api/v1/card' + '/update', request).pipe(map(resp => resp));
    }

    deleteCard(id: number): Observable<any> {
      return this.httpClient.get<any>('http://localhost:9000/api/v1/card' + '/delete/'+ id).pipe(map(resp => resp));
    }
}
