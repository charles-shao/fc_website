var fire = function(observers) {
  var action = observers.actionObserver.action;
  var multiplier = jobActions.utils.calculateDamageBuffs(observers.effectObserver.effects);
  var potency = jobActions.utils.calculatePotency(action, multiplier);

  // Trigger Firestarter proc; if Sharpcast is active then set the proc chance
  // to 100%

  // Remove Umbral Ice, no stacks of Astral Fire is gained
  indexOfUmbralIce = observers.effectObserver.indexOf(blm.traits.UmbralIce);
  if (indexOfUmbralIce > -1) {
    observers.effectObserver.removeAtIndex(indexOfUmbralIce);
  } else {
    // Grant Astral Fire if none is found in effects
    indexOfAstralFire = observers.effectObserver.indexOf(blm.traits.AstralFire);
    if (indexOfAstralFire > -1) {
      // Grant additional stack
      effect = observers.effectObserver.effects[indexOfAstralFire];
      astralFire = effect.obj;
      astralFire.increaseStack();
      effect.refreshDuration(astralFire.attributes().duration);
    } else {
      astralFire = new blm.traits.AstralFire();
      astralFire.increaseStack();

      effect = new Effect(astralFire);
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
