import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { IChoice } from 'src/app/model/IChoice.model';

@Injectable({
  providedIn: 'root'
})
export class DataService{

  private URL : string = 'http://localhost:3000/formulario';

  constructor(private http: HttpClient) { }

  public postForms(model : IChoice) : Observable<IChoice>  {
    console.log(model);
    return this.http
      .post<IChoice>(this.URL, model)
      .pipe(map((retorno) => retorno));
  }
}
