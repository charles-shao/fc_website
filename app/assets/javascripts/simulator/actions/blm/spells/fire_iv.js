blm.actions.FireIV = function(observers) {
  var action = observers.actionObserver.action;
  var castTime = action.castTime;
  var effects = observers.effectObserver.activeEffects();
  var multiplier = jobActions.utils.calculateDamageBuffs(effects);

  indexOfUmbralIce = observers.effectObserver.indexOf(blm.traits.UmbralIce);
  indexOfEnochian = observers.effectObserver.indexOf(blm.traits.Enochian);
  indexOfAstralFire = observers.effectObserver.indexOf(blm.traits.AstralFire);

  // The presence of Umbral Ice means this spell should not even be castable
  if (indexOfUmbralIce > -1) {
    throw("Fire IV cannot be casted under the presence of UI");
  }

  // Requies Astral Fire and Enochain to cast
  if (indexOfAstralFire > -1 && indexOfEnochian > -1) {
    effect = effects[indexOfAstralFire];
    astralFire = effect.obj;
    multiplier = multiplier * astralFire.attributes().fireDmgMultiplier;
  } else {
    // Raise Exception
    throw("Fire IV cannot be casted without AF and Enochian");
  }

  // Does not refresh AF duration
  observers.effectObserver.tick(castTime);

  // Apply cast time
  observers.encounterObserver.extend(castTime);

  var potency = jobActions.utils.calculatePotency(action, multiplier);

  this.viewer = new Viewer({
    name: action.name,
    potency: potency,
    multiplier: multiplier,
    activeEffects: effects,
    encounterTime: observers.encounterObserver.timeAt()
  });
}
