import { Injectable } from '@angular/core';
import { Quiz } from './quiz.model';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  quizzes: Quiz[]= [
    {
      question: 'En la tabla periódica moderna existen:',
      answer: [
        {option: '7 columnas', correct: false},
        {option: '18 grupos', correct: true},
        {option: '18 elementos de transición en el tercer período', correct: false},
        {option: '7 gases nobles', correct: false}
      ]
    },
    {
      question: 'Los números cuánticos del último electrón de un elemento son: 4, 1, -1, -1/2 entonces:',
      answer: [
        {option: 'su número atómico es 18', correct: false},
        {option: 'su ión divalente negativo presenta una configuración electrónica iguala a la del Kr', correct: true},
        {option: 'es un alcalino-térreo', correct: false},
        {option: 'es un halógeno', correct: false}
      ]
    },
    {
      question: 'Los elementos A y B pertenecen a un mismo periodo, entonces:',
      answer: [
        {option: 'presentan distinto efecto de pantalla', correct: true},
        {option: 'tienen los mismo estados de oxidación', correct: false},
        {option: 'tienen igual capa de valencia', correct: false}
      ]
    },
    {
      question: 'Entre los elementos que tienen múltiples estados de oxidación están:',
      answer: [
        {option: 'los del gripo 1A', correct: false},
        {option: 'todos los gases nobles', correct: false},
        {option: 'los metales de transición', correct: true},
        {option: 'algunos alcalino-térreos', correct: false}
      ]
    }
  ]

  constructor() { }

  getQuizzes(){
    return this.quizzes;
  }

}

