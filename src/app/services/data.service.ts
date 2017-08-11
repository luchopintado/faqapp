import { Injectable } from '@angular/core';
import { Question } from '../models/Question';

@Injectable()
export class DataService {

  questions: Question[];

  constructor() {
    this.questions = [
      {
        text: 'Do you know Angular 4?',
        answer: 'Oh yeah! :D',
        hide: true
      },
      {
        text: 'What is your favorite framework?',
        answer: 'Im not sure =S',
        hide: true
      },
      {
        text: 'Do you know ES6?',
        answer: 'Oh yeah! Is pretty awesome!!',
        hide: true
      }
    ];
  }

  getQuestions () {
    return this.questions;
  }

  addQuestion (question: Question) {
    this.questions.unshift(question);
  }

}
