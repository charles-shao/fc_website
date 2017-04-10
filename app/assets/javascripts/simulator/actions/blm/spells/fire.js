blm.actions.Fire = function(observers) {
  var action = observers.actionObserver.action;
  var castTime = action.castTime;
  var multiplier = jobActions.utils.calculateDamageBuffs(observers.effectObserver.effects);

  indexOfAstralFire = observers.effectObserver.indexOf(blm.traits.AstralFire);
  indexOfUmbralIce = observers.effectObserver.indexOf(blm.traits.UmbralIce);

  // The presence of Umbral Ice should reduce the potency of the fire action
  // by the base * scalar depending on the number of stacks

  if (indexOfUmbralIce > -1) {
    umbralIce = observers.effectObserver.effects[indexOfUmbralIce].obj;
    multiplier = multiplier * umbralIce.attributes().fireDmgMultiplier;

    // The presence of Umbral Ice should reduce the cast time of the fire spell
    // when at 3 stacks
    castTime = castTime * umbralIce.attributes().fireCastTimeMultiplier;
  } else if (indexOfAstralFire > -1) {
    astralFire = observers.effectObserver.effects[indexOfAstralFire].obj;

    multiplier = multiplier * astralFire.attributes().fireDmgMultiplier;
  }

  // Apply Umbral Ice multipliers before handling Astral Fire stacks
  var potency = jobActions.utils.calculatePotency(action, multiplier);

  // Remove Umbral Ice, no stacks of Astral Fire is gained
  if (indexOfUmbralIce > -1) {
    observers.effectObserver.removeAtIndex(indexOfUmbralIce);
  } else {
    // Grant Astral Fire if none is found in effects
    if (indexOfAstralFire > -1) {
      effect = observers.effectObserver.effects[indexOfAstralFire];
      astralFire = effect.obj;

      // Grant additional stack, up to a maximum of 3
      astralFire.increaseStack();

      effect.refreshDuration(astralFire.attributes().duration);
    } else {
      astralFire = new blm.traits.AstralFire();

      // Grant initial stack
      astralFire.increaseStack();

      effect = new Effect(astralFire);
      observers.effectObserver.add(effect);
    }
  }

  // Apply cast time
  observers.encounterObserver.extend(castTime);

  // Trigger Firestarter proc; if Sharpcast is active then set the proc chance
  // to 100%

  // Table viewer wrapper
  this.viewerAttr = function() {
    return {
      name: action.name,
      potency: potency,
      multiplier: multiplier,
      activeEffects: observers.effectObserver.effects,
      encounterTime: observers.encounterObserver.timeAt()
    };
  }
}
