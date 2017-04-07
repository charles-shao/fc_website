function GcdObserver() {
  const BASE_GCD = 2.5;

  var self = this;

  self.onGlobalCooldown = false;
  self.gcdAt = 0;

  self.triggerGlobalCooldown = function() {
    self.onGlobalCooldown = true;
    self.gcdAt = BASE_GCD;
  }

  self.resetGlobalCooldown = function(timer) {
    if (BASE_GCD <= timer) {
      self.onGlobalCooldown = false;
      self.gcdAt = 0;
    } else {
      self.onGlobalCooldown = true;
      self.gcdAt = self.gcdAt - timer;
    }
  }

}
