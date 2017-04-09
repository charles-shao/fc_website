// ============================================================================
// Actions for BLM/ THM
// ============================================================================
var actions = {
  Fire: function(observers) {
    this.potency = function() {
      return jobActions.utils.calculatePotency(observers);
    }

    // Remove Umbral Ice
    // Grant Astral Fire if none is found in effects
    indexOfAstralFire = observers.effectObserver.indexOf(jobActions.traits.AstralFire);
    if (indexOfAstralFire > -1) {
      // Grant additional stack
      astralFire = observers.effectObserver.effects[indexOfAstralFire];
      astralFire.increaseStack();
      console.log("astral attr")
      console.log(astralFire.attributes());
    } else {
      console.log("create astral fire buff")
      astralFire = new jobActions.traits.AstralFire();
      astralFire.increaseStack();
      observers.effectObserver.add(astralFire);
    }
  },
  Blizzard: function() {
    this.potency = function() {
      return jobActions.utils.calculatePotency(observers);
    }
  }
};

// ============================================================================
// Traits for BLM/ THM
// ============================================================================
var traits = {
  AstralFire: function() {
    var stack = 0;
    var valuesAtStack = [
      { dmgMultiplier: 1.0, fireMpCostScaler: 1.0, iceMpCostScaler: 1.0, iceHasteMultiplier: 1.0, mpRegen: true },
      { dmgMultiplier: 1.4, fireMpCostScaler: 2.0, iceMpCostScaler: 0.5, iceHasteMultiplier: 1.0, mpRegen: false },
      { dmgMultiplier: 1.6, fireMpCostScaler: 2.0, iceMpCostScaler: 0.25, iceHasteMultiplier: 1.0, mpRegen: false },
      { dmgMultiplier: 1.8, fireMpCostScaler: 2.0, iceMpCostScaler: 0.25, iceHasteMultiplier: 1.5, mpRegen: false },
    ]

    this.increaseStack = function() {
      if (stack < 3) {
        stack += 1;
      }
    }

    this.attributes = function() {
      return valuesAtStack[stack];
    }
  },
  UmbralIce: function() {
    var stacks = 0;
    var valuesAtStack = [
      { dmgMultiplier: 1.0, fireMpCostScaler: 1.0, iceMpCostScaler: 1.0, fireHasteMultiplier: 1.0, mpRegen: true },
      { dmgMultiplier: 1.0, fireMpCostScaler: 0.5, iceMpCostScaler: 1.0, fireHasteMultiplier: 1.0, mpRegen: true },
      { dmgMultiplier: 1.0, fireMpCostScaler: 0.25, iceMpCostScaler: 1.0, fireHasteMultiplier: 1.0, mpRegen: true },
      { dmgMultiplier: 1.0, fireMpCostScaler: 0.25, iceMpCostScaler: 1.0, fireHasteMultiplier: 1.5, mpRegen: true },
    ]

    this.increaseStack = function() {
      if (stack < 3) {
        stack += 1;
      }
    }

    this.attributes = function() {
      return valuesAtStack[stack];
    }
  }
}

var utils = {
  calculatePotency: function(observers) {
    dmgMultiplier = jobActions.utils.calculateDamageBuffs(observers.effectObserver.effects)
    actionPotency = observers.actionObserver.action.potency;
    return actionPotency * dmgMultiplier;
  },
  calculateDamageBuffs: function(effects) {
    base = 1.0;

    // for (var i in effects) {
    //   effect = effects[i];
    //
    //   if (effect.isDmgBuff()) {
    //     base = base * effect.modifier;
    //   }
    // }

    return base;
  },
  calculateCriticalBuffs: function(effects) {
    percentage = 10;

    // for (var i in effects) {
    //   effect = effects[i];
    //
    //   if (effect.isCritBuff()) {
    //     percentage = percentage + effect.modifier;
    //   }
    // }

    return percentage;
  }
};

// ============================================================================
// Initialise job actions
// ============================================================================
var jobActions = {
  actions: actions,
  traits: traits,
  utils: utils
};
