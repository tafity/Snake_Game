export default class Score {
    constructor( scoreBlock, score = 0 ) {
        this.best = document.querySelector('.best');
        this.scoreBlock = document.querySelector( scoreBlock );
        this.score = score;
        this.draw();

    }

    incScore() {
        this.score++;
        this.draw();
   }

    setToZero() {
        this.score = 0;
        this.draw();
    }
    scoreBest() {
        this.best.innerHTML = localStorage.getItem('game-score');
        localStorage.setItem('game-score', 5);
        this.best.innerHTML = localStorage.getItem('game-score');
        this.draw();
        this.incScore();
    }

    draw() {
        this.scoreBlock.innerHTML = this.score;
        this.best.innerHTML = this.best;
    }
    
}