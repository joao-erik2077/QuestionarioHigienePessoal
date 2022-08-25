import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { IChoice } from 'src/app/model/IChoice.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private URL: string = 'http://localhost:3333/formulario';
  private corsHeader : any;

  constructor(private http: HttpClient) { }

  public postForms(model: IChoice) {
    console.log(model);
    this.corsHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Origin': '*'
    });
    this.http.post<Observable<IChoice>>(this.URL, JSON.stringify(model), {headers: this.corsHeader})
      .subscribe(
        (val) => {
          console.log("POST call successful value returned in body",
            val);
        },
        response => {
          console.log("POST call in error", response);
        },
        () => {
          console.log("The POST observable is now completed.");
        });
  }
}
