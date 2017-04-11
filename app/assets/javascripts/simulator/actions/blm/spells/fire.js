blm.actions.Fire = function(observers) {
  var action = observers.actionObserver.action;
  var castTime = action.castTime;
  var effects = observers.effectObserver.activeEffects();
  var multiplier = jobActions.utils.calculateDamageBuffs(effects);

  indexOfAstralFire = observers.effectObserver.indexOf(blm.traits.AstralFire);
  indexOfUmbralIce = observers.effectObserver.indexOf(blm.traits.UmbralIce);

  // The presence of Umbral Ice should reduce the potency of the fire action
  // by the base * scalar depending on the number of stacks

  if (indexOfUmbralIce > -1) {
    umbralIce = effects[indexOfUmbralIce].obj;
    multiplier = multiplier * umbralIce.attributes().fireDmgMultiplier;

    // The presence of Umbral Ice should reduce the cast time of the fire spell
    // when at 3 stacks
    castTime = castTime * umbralIce.attributes().fireCastTimeMultiplier;
  } else if (indexOfAstralFire > -1) {
    astralFire = effects[indexOfAstralFire].obj;

    multiplier = multiplier * astralFire.attributes().fireDmgMultiplier;
  }

  // Apply Umbral Ice multipliers before handling Astral Fire stacks
  var potency = jobActions.utils.calculatePotency(action, multiplier);

  // Remove Umbral Ice, no stacks of Astral Fire is gained
  if (indexOfUmbralIce > -1) {
    observers.effectObserver.removeAtIndex(indexOfUmbralIce);
  } else {
    // Grant stack of Astral Fire if found in effects
    if (indexOfAstralFire > -1) {
      effect = effects[indexOfAstralFire];
      astralFire = effect.obj;

      // Grant additional stack, up to a maximum of 3
      astralFire.increaseStack();

      // Reduce all effect timers
      observers.effectObserver.tick(castTime);

      effect.refreshDuration(astralFire.attributes().duration);

      // Update observer
      observers.effectObserver.replaceAtIndex(indexOfAstralFire, new Effect(astralFire));
    } else {
      astralFire = new blm.traits.AstralFire();
      effect = new Effect(astralFire);

      // Reduce all effect timers
      observers.effectObserver.tick(castTime);

      // Add AF after tick
      observers.effectObserver.add(effect);
    }
  }

  // Apply cast time
  observers.encounterObserver.extend(castTime);

  // Trigger Firestarter proc; if Sharpcast is active then set the proc chance
  // to 100%

  // Table viewer wrapper
  this.viewer = new Viewer({
    name: action.name,
    potency: potency,
    castTime: castTime,
    potencyPerSecond: (potency / castTime),
    multiplier: multiplier,
    activeEffects: effects,
    encounterTime: observers.encounterObserver.timeAt()
  });
}
