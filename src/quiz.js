class Quiz {
    // YOUR CODE HERE:
    //
    // 1. constructor (questions, timeLimit, timeRemaining)
    constructor(questions, timeLimit, timeRemaining){
        this.questions = questions; //array
        this.timeLimit = timeLimit; //number
        this.timeRemaining = timeRemaining; //number
        this.correctAnswers = 0; //
        this.currentQuestionIndex = 0;
    }
    // 2. getQuestion()
        getQuestion(){
            return this.questions[this.currentQuestionIndex];
        }
    // 3. moveToNextQuestion()
        moveToNextQuestion(){
            this.currentQuestionIndex++
        }
    // 4. shuffleQuestions()
        shuffleQuestions(){
        for (let i=0; i<this.questions.length; i++){
            const j = Math.floor(Math.random()* (i+1));
            [this.questions[i], this.questions[j]] = [this.questions[j], this.questions[i]]
        }
        return this.questions
    }

    // 5. checkAnswer(answer)
        checkAnswer(answer){
            if(answer === this.questions[this.currentQuestionIndex].answer){
                this.correctAnswers++
            }
        }
    
    // 6. hasEnded()
        hasEnded(){
            if (this.currentQuestionIndex<this.questions.length){
                return false;
            } else{
                return true;
            }
        }
    
        filterQuestionsByDifficulty(difficulty) {
            if (typeof difficulty !== 'number' || difficulty < 1 || difficulty > 3) {
                return;
            }
            this.questions = this.questions.filter(questionInstance => questionInstance.difficulty === difficulty)
        }
        averageDifficulty() {
            let averageDiff = 0;
            const sumDifficulty = this.questions.reduce((acc, question) => {
                return acc + question.difficulty;
            }, 0)
            return averageDiff = sumDifficulty / this.questions.length;
        }
    }


