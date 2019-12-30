// Your code goes here
let totalPrize = 0;
let firstAttempPrize = 100;
let secondAttempPrize = 50;
let thirdAttempPrize = 25;
let iterrationNumber = 9;
let chances = 3;




let wannaPlay = confirm('Do you want to play a game');
if (wannaPlay) {
    anotherGame: for (;;) {
        let rn = Math.floor(Math.random() * iterrationNumber);
        for (let i = 0; i < 3; i++) {
            let prizeCanWin;
            if (i === 0) {
                prizeCanWin = firstAttempPrize;
            } else if (i === 1) {
                prizeCanWin = secondAttempPrize;
            } else if (i === 2) {
                prizeCanWin = thirdAttempPrize;
            }
            // eslint-disable-next-line max-len
            let answer = +prompt('Choose a roulette pocket number from 0 to ' + (iterrationNumber - 1) + ', chances left: ' + chances + ', Total prize: ' + totalPrize + '$, Possible prize on current attemp: ' + prizeCanWin + '$');
            chances = chances - 1;
            if (answer === rn) {
                if (i === 0) {
                    totalPrize += firstAttempPrize;
                } else if (i === 1) {
                    totalPrize += secondAttempPrize;
                } else if (i === 2) {
                    totalPrize += thirdAttempPrize;
                }
                alert(`Congratulation, you won! Your prize is ${totalPrize}$`)
                let guess = confirm('Do you want to continue?');
                if (!guess) {
                    chances = 3;
                    iterrationNumber = 9;
                    firstAttempPrize = 100;
                    secondAttempPrize = 50;
                    thirdAttempPrize = 25;
                    alert(`Thank you for your participation. Your prize is ${totalPrize}$`)
                    let again = confirm('do you want to play again?');
                    if (again) {
                        continue anotherGame;
                    } else {
                        break anotherGame;
                    }
                } else {
                    chances = 3;
                    iterrationNumber += 4;
                    firstAttempPrize *= 2;
                    secondAttempPrize *= 2;
                    thirdAttempPrize *= 2;
                    continue anotherGame;
                }
            }
        }
        chances = 3;
        iterrationNumber = 9;
        firstAttempPrize = 100;
        secondAttempPrize = 50;
        thirdAttempPrize = 25;
        alert(`Thank you for your participation. Your prize is ${totalPrize}$`)
        let again2 = confirm('Do you wanna play again?');
        if (again2) {
            continue anotherGame;
        } else {
            break anotherGame;
        }
    }
} else {
    alert('You did not become a billionaire, but can.')
}