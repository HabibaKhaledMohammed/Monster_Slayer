new Vue({
  el: "#app",
  data: {
    actionLog: [],
    monsterHealth: 100,
    playerHealth: 100,
    showNewGameControls: true,
    healCount: 3,
    attackCount: 0,
    damageDealt: 0,
    damageTaken: 0,
    hmSpecialAttacks: 0,
  },
  methods: {
    rand(min, max) {
      return Math.floor(Math.random() * ((max - min) + 1) + min);
    },
    increaseAttackCount() {
      if (this.attackCount < 8) {
        this.attackCount++;
      }
    },
    playerAttack() {
     
    },
    playerSpecialAttack() {
    
    },
    monsterAttack(min, max) {
     
    },
    healPlayer() {
     
    },
    startNewGame() {
      this.playerHealth = 100;
      this.monsterHealth = 100;
      this.healCount = 3;
      this.attackCount = 0;
      this.damageDealt = 0;
      this.damageTaken = 0;
      this.hmSpecialAttacks= 0;
      this.showNewGameControls = false;
      this.actionLog = [];
    },
    playerSurrender() {
      this.playerHealth = 0;
      this.showNewGameControls = true;
    },
    logActioin(actionTaken, entity, color, value) {
      let action = {
        actionTaken: actionTaken,
        entity: entity,
        class: 'alert-' + color,
        actionValue: value
      };
      this.actionLog.push(action);
    },
  },
  computed: {
    healsUsed: function() {
        return 3- this.healCount;
    }
  },
  watch: {
    monsterHealth: function() {
       if(this.monsterHealth<=0){
        this.monsterHealth=0;
        this.showNewGameControls=true;
      }
    }
    ,
    playerHealth: function() {
     if(this.playerHealth<=0){
        this.playerHealth=0;
        this.showNewGameControls=true;
      }
    }
  },
})
