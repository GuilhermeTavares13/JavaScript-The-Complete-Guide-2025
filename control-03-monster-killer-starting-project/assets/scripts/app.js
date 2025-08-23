const ATTACK_VALUE = 10;
const STRONG_ATTACK_VALUE = 17;
const MONSTER_ATTACK_VALUE = 14;
const HEAL_VALUE = 20;

let chosenMaxLife = 100;
let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;

adjustHealthBars(chosenMaxLife);

function endRound() {

    const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
    currentPlayerHealth -= playerDamage;

     
    if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {

        alert('You won!');
    }
    else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {

        alert('You lost!');
    }
    else if (currentPlayerHealth <= 0 && currentMonsterHealth <= 0) {

        alert('You have a draw!');
    }
}

function damageHandler(playerAttack) {
    const damage = dealMonsterDamage(playerAttack);    
    currentMonsterHealth -= damage;
    endRound();
}

function attachHandler() {
    damageHandler(ATTACK_VALUE);
}

function strongAttackHandler() {
    damageHandler(STRONG_ATTACK_VALUE);
}

function healPlayerHandler() {

    let healValue;

    if (currentPlayerHealth >= chosenMaxLife - HEAL_VALUE) {
        // healValue = 0;
        alert('You can\'t heal to more than your max initial health.');
        healValue = chosenMaxLife - currentPlayerHealth;
    }
    else {
        healValue = HEAL_VALUE;
    }

    currentPlayerHealth += healValue;
    endRound();
}


attackBtn.addEventListener('click',attachHandler);
strongAttackBtn.addEventListener('click',strongAttackHandler);
healBtn.addEventListener('click',healPlayerHandler);
