blm.actions.FireIV = function(observers) {
  var action = observers.actionObserver.action;

  var multiplier = jobActions.utils.calculateDamageBuffs(observers.effectObserver.effects);
  var potency = jobActions.utils.calculatePotency(action, multiplier);

  indexOfUmbralIce = observers.effectObserver.indexOf(blm.traits.UmbralIce);
  indexOfEnochian = observers.effectObserver.indexOf(blm.traits.Enochian);
  indexOfAstralFire = observers.effectObserver.indexOf(blm.traits.AstralFire);

  // The presence of Umbral Ice means this spell should not even be castable
  if (indexOfUmbralIce > -1) {
    throw("Fire IV cannot be casted under the presence of UI");
  }

  // Requies Astral Fire and Enochain to cast, does not refresh AF duration
  if (indexOfAstralFire > -1 && indexOfEnochian > -1) {
    effect = observers.effectObserver.effects[indexOfAstralFire];
    astralFire = effect.obj;

    // Count the duration down depending on cast/gcd time
  } else {
    // Raise Exception
    throw("Fire IV cannot be casted without AF and Enochian");
  }

  this.viewer = new Viewer({
    name: action.name,
    potency: potency,
    multiplier: multiplier,
    activeEffects: effects,
    encounterTime: observers.encounterObserver.timeAt()
  });
}
