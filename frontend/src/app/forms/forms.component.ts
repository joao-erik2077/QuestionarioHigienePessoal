import { Component, OnInit } from '@angular/core';
import { DataService } from './shared/data.service';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {

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
      currentValue: 1
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
      currentValue: 1
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
      currentValue: 1
    },
    {
      id: 4,
      sentence: 'Você fecha sua torneira ao escovar os dentes?',
      answers: [
        'Sim',
        'Não',
      ],
      currentValue: 1
    },
    {
      id: 5,
      sentence: 'Você utiliza fio dental?',
      answers: [
        'Sim',
        'Não',
      ],
      currentValue: 1
    },
  ]

  constructor(private dataService : DataService) { }

  changeValue(changes : any): void {
    console.log(changes);
  }

  submitForms(): void {
    this.dataService.sendForms(this.questionData);
    //window.location.reload();
  }

  ngOnInit(): void {}

}
