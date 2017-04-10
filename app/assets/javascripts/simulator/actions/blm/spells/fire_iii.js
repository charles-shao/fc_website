blm.actions.FireIII = function(observers) {
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

  // Remove Umbral Ice
  indexOfUmbralIce = observers.effectObserver.indexOf(blm.traits.UmbralIce);
  if (indexOfUmbralIce > -1) {
    observers.effectObserver.removeAtIndex(indexOfUmbralIce);
  }

  // Grant max Astral Fire stacks
  indexOfAstralFire = observers.effectObserver.indexOf(blm.traits.AstralFire);
  if (indexOfAstralFire > -1) {
    // Ensure AF is at max stacks before refreshing duration
    effect = observers.effectObserver.effects[indexOfAstralFire];
    astralFire = effect.obj;
    astralFire.maxStack();
    effect.refreshDuration(astralFire.attributes().duration);
  } else {
    astralFire = new blm.traits.AstralFire();
    astralFire.maxStack();

    effect = new Effect(astralFire);
    observers.effectObserver.add(effect);
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
