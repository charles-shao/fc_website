function GcdObserver(baseGcd) {
  // If no base GCD is found then fallback to the default
  const BASE_GCD = 2.5;

  var onGlobalCooldown = false;
  var gcdAt = 0;

  this.triggerGlobalCooldown = function() {
    onGlobalCooldown = true;
    gcdAt = BASE_GCD;
  }

  this.tickGlobalCooldown = function(timer) {
    if (BASE_GCD <= timer) {
      onGlobalCooldown = false;
      gcdAt = 0;
    } else {
      onGlobalCooldown = true;
      gcdAt = gcdAt - timer;
    }
  }

  this.timeRemaining = function() {
    return gcdAt;
  }

  this.isGcdLocked = function() {
    return onGlobalCooldown;
  }

}
