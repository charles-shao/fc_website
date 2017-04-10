blm.actions.Blizzard = function(observers) {
  var action = observers.actionObserver.action;
  var afMultiplier = blm.utils.baseDmgMultiplier;

  // The presence of Astral Fire should reduce the potency of the ice action
  // by the base * scalar depending on the number of stacks
  indexOfAstralFire = observers.effectObserver.indexOf(blm.traits.AstralFire);
  if (indexOfAstralFire > -1) {
    astralFire = observers.effectObserver.effects[indexOfAstralFire].obj;
    afMultiplier = afMultiplier * astralFire.attributes().iceDmgMultiplier;
  }

  var multiplier = jobActions.utils.calculateDamageBuffs(observers.effectObserver.effects);
  // Apply Astral Fire multipliers before handling Umbral Ice stacks
  multiplier = multiplier * afMultiplier;

  var potency = jobActions.utils.calculatePotency(action, multiplier);

  if (indexOfAstralFire > -1) {
    // Remove Astral Fire, no stacks of Umbral Ice is gained
    observers.effectObserver.removeAtIndex(indexOfAstralFire);
  } else {
    // Grant Umbral Ice if none is found in effects
    indexOfUmbralIce = observers.effectObserver.indexOf(blm.traits.UmbralIce);
    if (indexOfUmbralIce > -1) {
      effect = observers.effectObserver.effects[indexOfUmbralIce];
      umbralIce = effect.obj;

      // Grant additional stack
      umbralIce.increaseStack();
      effect.refreshDuration(umbralIce.attributes().duration);
    } else {
      umbralIce = new blm.traits.UmbralIce();
      umbralIce.increaseStack();

      effect = new Effect(umbralIce);
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
