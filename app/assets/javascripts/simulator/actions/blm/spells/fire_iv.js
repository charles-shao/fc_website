blm.actions.FireIV = function(observers) {
  var action = observers.actionObserver.action;

  // The presence of Umbral Ice means this spell should not even be castable
  indexOfUmbralIce = observers.effectObserver.indexOf(blm.traits.UmbralIce);
  if (indexOfUmbralIce > -1) {
    // Raise exception
  }

  var multiplier = jobActions.utils.calculateDamageBuffs(observers.effectObserver.effects);
  var potency = jobActions.utils.calculatePotency(action, multiplier);

  // Requies Astral Fire and Enochain to cast, does not refresh AF duration
  indexOfEnochian = observers.effectObserver.indexOf(blm.traits.Enochian);
  indexOfAstralFire = observers.effectObserver.indexOf(blm.traits.AstralFire);
  if (indexOfAstralFire > -1 && indexOfEnochian > -1) {
    effect = observers.effectObserver.effects[indexOfAstralFire];
    // astralFire = effect.obj;
    // Count the duration down depending on cast/gcd time
  } else {
    // Raise Exception
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
