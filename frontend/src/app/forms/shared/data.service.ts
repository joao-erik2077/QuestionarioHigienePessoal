import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IChoice } from 'src/app/model/IChoice.model';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService implements OnInit{

  private URL : string = 'http://localhost:3000/formulario';

  constructor(private http: HttpClient) { }

  sendForms(formsData : any) {
    let sendData: IChoice[] = []
    formsData.forEach((element : any) => {
      sendData.push(element.currentValue);
    });
    console.log(sendData);
    let [p1, p2, p3, p4, p5] = sendData;
    this.http
      .post<any>(this.URL, {'p1': p1, 'p2': p2, 'p3': p3, 'p4': p4, 'p5': p5})
      .pipe(map((retorno) => retorno));
  }

  ngOnInit() {
    let escolha: IChoice = {
      p1: 0,
      p2: 0,
      p3: 0,
      p4: 0,
      p5: 0,
    };
    this.http.post<any>(this.URL, escolha)
  }
}
