function Slot(index, observers) {
  this.id = index;

  var validAction = true;
  var action = observers.actionObserver.action;
  var actionObjectName = action.objectName;
  var jobIdentifier = observers.jobObserver.job.identifier;

  // Handle global cooldown trigger
  if (observers.actionObserver.isGcdAbility()) {
    console.log("Triggered GCD ability");
    // Trigger GCD before cast
    //
    // TODO: check for any haste effects active and make that the base GCD
    // for as long as it is active for
    playerRecastTime = 2.5;
    observers.gcdObserver.triggerGlobalCooldown(playerRecastTime);
  } else {
    console.log("Triggered oGCD ability");
    // If we are still in GCD lock, check if any instant cast abiltiies are made.
    // They should cost no time to the encounter if woven.
    if (observers.gcdObserver.isCoolingDown()) {
      // If time bleeds over GCD then take the overtime value and add as a cast time.
      overtime = observers.gcdObserver.overtime(action.animationLock);
      if (overtime > 0) {
        observers.actionObserver.action.castTime = overtime;
      }
    } else {
      // oGCDs are clipping into GCDs
      observers.actionObserver.action.castTime = observers.actionObserver.action.animationLock;
    }
  }

  console.log(observers.actionObserver.action);
  // Execute ability
  try {
    var actionBehaviour = new jobActions[jobIdentifier].actions[actionObjectName](observers);
    this.viewer = actionBehaviour.viewer;
  }
  catch(message) {
    // TODO: trigger modal because its nicer
    console.log(message)
  }

  // Evaluate global cooldown after cast; casts shorter than GCD will still need
  // to wait the full duration
  observers.gcdObserver.tickGlobalCooldown(this.viewer.castTime);

  this.isValidAction = function() {
    return validAction;
  };
}
