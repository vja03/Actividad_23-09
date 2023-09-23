import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TodosFeriados } from '../pages/interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ApiTallerService {

  constructor(private httpclient: HttpClient) { }

  getTodosFeriados(){
    return this.httpclient.get<TodosFeriados>('https://api.victorsanmartin.com/feriados/en.json')
  }

}
