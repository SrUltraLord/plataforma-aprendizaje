import { Component, OnInit } from '@angular/core';
import { Quiz } from './quiz.model';
import { QuizService } from './quiz.service';


@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  quizzes: Quiz[] = [];

  currentQuiz = 0;

  constructor( private quizService:  QuizService) { }

  ngOnInit(): void {

    this.quizzes = this.quizService.getQuizzes();

  }

}
