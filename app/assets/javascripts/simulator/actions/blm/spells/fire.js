blm.actions.Fire = function(observers) {
  var action = observers.actionObserver.action;
  var uiMultiplier = blm.utils.baseDmgMultiplier;

  // The presence of Umbral Ice should reduce the potency of the fire action
  // by the base * scalar depending on the number of stacks
  indexOfUmbralIce = observers.effectObserver.indexOf(blm.traits.UmbralIce);
  if (indexOfUmbralIce > -1) {
    umbralIce = observers.effectObserver.effects[indexOfUmbralIce].obj;
    uiMultiplier = uiMultiplier * umbralIce.attributes().fireDmgMultiplier;
  }

  var multiplier = jobActions.utils.calculateDamageBuffs(observers.effectObserver.effects);
  // Apply Umbral Ice multipliers before handling Astral Fire stacks
  multiplier = multiplier * uiMultiplier;

  var potency = jobActions.utils.calculatePotency(action, multiplier);

  // Trigger Firestarter proc; if Sharpcast is active then set the proc chance
  // to 100%

  // Remove Umbral Ice, no stacks of Astral Fire is gained
  if (indexOfUmbralIce > -1) {
    observers.effectObserver.removeAtIndex(indexOfUmbralIce);
  } else {
    // Grant Astral Fire if none is found in effects
    indexOfAstralFire = observers.effectObserver.indexOf(blm.traits.AstralFire);

    if (indexOfAstralFire > -1) {
      effect = observers.effectObserver.effects[indexOfAstralFire];
      astralFire = effect.obj;

      // Grant additional stack, up to a maximum of 3
      astralFire.increaseStack();

      // Update damage multiplers for next cast
      effect.updateDmgMultiplier(astralFire.attributes().fireDmgMultiplier);
      effect.refreshDuration(astralFire.attributes().duration);
    } else {
      astralFire = new blm.traits.AstralFire();

      // Grant initial stack
      astralFire.increaseStack();
      effect = new Effect(astralFire);

      // Update damage multiplers for next cast
      effect.updateDmgMultiplier(astralFire.attributes().fireDmgMultiplier);
      observers.effectObserver.add(effect);
    }
  }

  this.viewerAttr = function() {
    return {
      name: action.name,
      potency: potency,
      multiplier: multiplier,
      activeEffects: observers.effectObserver.effects
    };
  }
}
