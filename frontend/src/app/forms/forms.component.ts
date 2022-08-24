import { Component, OnInit } from '@angular/core';
import { DataService } from './shared/data.service';
import { IChoice } from 'src/app/model/IChoice.model';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {

  questionValues: IChoice = {
    p1: 1,
    p2: 1,
    p3: 1,
    p4: 1,
    p5: 1,
  }

  questionData = [
    {
      id: 1,
      sentence: 'Qual é sua média de banhos?',
      answers: [
        '1 a cada 2 dias',
        '1 por dia',
        '2 por dia',
        '3 ou mais',
        'Não tomo banho',
      ],
    },
    {
      id: 2,
      sentence: 'Qual é sua média de escovação dentária no dia-a-dia?',
      answers: [
        '1 vez',
        '2 vezes',
        '3 vezes ou mais',
        'Não escovo os dentes',
      ],
    },
    {
      id: 3,
      sentence: 'Qual é seu tempo médio de banho?',
      answers: [
        '5 minutos ou menos',
        '5-10 minutos',
        '10-15 minutos',
        '15 minutos ou mais',
      ],
    },
    {
      id: 4,
      sentence: 'Você fecha sua torneira ao escovar os dentes?',
      answers: [
        'Sim',
        'Não',
      ],
    },
    {
      id: 5,
      sentence: 'Você utiliza fio dental?',
      answers: [
        'Sim',
        'Não',
      ],
    },
  ]

  constructor(private dataService : DataService) { }

  switchInput(event : any): void {
    let id = parseInt(event.target.id);
    let target = parseInt(event.target.value)+1;
    if (id == 1) {
      this.questionValues.p1 = target;
    } else if(id == 2) {
      this.questionValues.p2 = target;
    } else if(id == 3) {
      this.questionValues.p3 = target;
    } else if(id == 4) {
      this.questionValues.p4 = target;
    } else {
      this.questionValues.p5 = target;
    }
  }

  submitForms(): void {
    this.dataService.postForms(this.questionValues);
    //window.location.reload();
  }

  ngOnInit(): void {}

}
