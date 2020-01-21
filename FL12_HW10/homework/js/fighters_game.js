class Fighter {
    constructor(obj) {
        this.properties = obj;
        this.wins = 0;
        this.loses = 0;
    }
    getName() {
        return this.properties.name;
    }
    getDamage() {
        return this.properties.damage;
    }
    getStrength() {
        return this.properties.strength;
    }
    getAgility() {
        return this.properties.agility;
    }
    getHealth() {
        return this.properties.health;
    }
    attack(defender) {
        let stats = defender.getStrength() + defender.getAgility();
        let mathChance = Math.random() * 100;
        if (mathChance >= stats) {
            this.dealDamage(defender);
        } else {
            console.log(this.properties.name + ': ' + 'attack missed')
        }
    }
    logCombatHistory() {
        console.log('Name: ' + this.properties.name + ', Wins:' + this.wins + ', Losses: ' + this.loses)
    }
    heal(points) {
        this.properties.health += points;
        if (this.properties.health > 100) {
            this.properties.health = 100;
        }
    }
    dealDamage(defender) {
        let damage = this.getDamage();
        let health = defender.getHealth();
        defender.properties.health = health - damage;
        if (defender.properties.health < 0) {
            defender.properties.health = 0;
        }
        // eslint-disable-next-line max-len
        console.log(this.properties.name + ' deal ' + this.properties.damage + ' damage; ' + defender.properties.name + ' have ' + defender.properties.health + ' health')
    }
    addWin() {
        this.wins += 1;
    }
    addLose() {
        this.loses += 1;
    }
}

function battle(man1, man2) {
    if (man1.getHealth() === 0) {
        console.log(man1.getName() + '- HP equal to 0');
        return;
    } else if (man2.getHealth() === 0) {
        console.log(man2.getName() + '- HP equal to 0');
        return;
    } else {
        man1.attack(man2);
        if (man2.getHealth() === 0) {
            man1.addWin();
            man2.addLose()
            // eslint-disable-next-line max-len
            console.log(man1.getName() + ' is a winner' + '| Stats: ' + ' Wins ' + man1.wins + ' / Loses:' + man1.loses);
            return
        }
        man2.attack(man1);
        if (man1.getHealth() === 0) {
            man2.addWin();
            man1.addLose();
            // eslint-disable-next-line max-len
            console.log(man2.getName() + ' is a winner' + '| Stats: ' + ' Wins ' + man2.wins + ' / Loses:' + man2.loses);
            return
        }
        battle(man1, man2);
    }
}

let fighter1 = new Fighter({
    name: 'Creator',
    damage: 20,
    strength: 30,
    agility: 20,
    health: 100
});
let fighter2 = new Fighter({
    name: 'Death',
    damage: 25,
    strength: 20,
    agility: 25,
    health: 100
});

battle(fighter1, fighter2);