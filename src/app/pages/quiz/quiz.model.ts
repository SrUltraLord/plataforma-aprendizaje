export class Quiz {
    question: string;
    answer: { option: string, correct: boolean}[];

    constructor(){
        this.question = '';
        this.answer = [];
    }
}
