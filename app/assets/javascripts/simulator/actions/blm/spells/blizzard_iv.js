blm.actions.BlizzardIV = function(observers) {
  var action = observers.actionObserver.action;
  var castTime = action.castTime;
  var effects = observers.effectObserver.activeEffects();
  var multiplier = jobActions.utils.calculateDamageBuffs(effects);

  indexOfUmbralIce = observers.effectObserver.indexOf(blm.traits.UmbralIce);
  indexOfEnochian = observers.effectObserver.indexOf(blm.traits.Enochian);
  indexOfAstralFire = observers.effectObserver.indexOf(blm.traits.AstralFire);

  // The presence of Astral Fire means this spell should not even be castable
  if (indexOfAstralFire > -1) {
    throw("Blizzard IV cannot be casted under the presence of AF");
  }

  // Does not refresh UI duration, ticks occurs before Enochian is refrehed
  observers.effectObserver.tick(castTime);

  // Requies Umbral Ice and Enochain to cast
  if (indexOfUmbralIce > -1 && indexOfEnochian > -1) {
    effect = effects[indexOfEnochian];
    enochian = effect.obj;

    if (enochian.attributes().refreshable) {
      enochian.increaseRefreshStack();

      // Update observer
      observers.effectObserver.replaceAtIndex(indexOfEnochian, new Effect(enochian));
    }
    // multiplier = multiplier * astralFire.attributes().fireDmgMultiplier;
  } else {
    // Raise Exception
    throw("Blizzard IV cannot be casted without UI and Enochian");
  }

  // Apply cast time
  observers.encounterObserver.extend(castTime);

  var potency = jobActions.utils.calculatePotency(action, multiplier);

  this.viewer = new Viewer({
    name: action.name,
    potency: potency,
    potencyPerSecond: (potency / castTime),
    multiplier: multiplier,
    activeEffects: effects,
    encounterTime: observers.encounterObserver.timeAt()
  });

}
