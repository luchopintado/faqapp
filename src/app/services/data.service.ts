import { Injectable } from '@angular/core';
import { Question } from '../models/Question';

@Injectable()
export class DataService {

  questions: Question[];

  constructor() {
    /*
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
    ];*/
  }

  // Get questions from LS
  getQuestions () {
    if (localStorage.getItem('questions') === null) {
      this.questions = [];
    } else {
      this.questions = JSON.parse(localStorage.getItem('questions'));
    }

    return this.questions;
  }

  // Add question from LS
  addQuestion (question: Question) {
    this.questions.unshift(question);

    // Init local var
    let questions;

    if (localStorage.getItem('questions') === null) {
      questions = [];
      // Push new question
      questions.push(question);
      // Set new array to LS
      localStorage.setItem('questions', JSON.stringify(questions));
    } else {
      questions = JSON.parse(localStorage.getItem('questions'));
      // Add new question
      questions.unshift(question);
      // Set new array to LS
      localStorage.setItem('questions', JSON.stringify(questions));
    }
  }

  // Remove question from LS
  removeQuestion (question: Question) {
    const index = this.questions.findIndex(q => q === question);
    this.questions.splice(index, 1);
    localStorage.setItem('questions', JSON.stringify(this.questions));
  }
}
