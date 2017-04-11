function GcdObserver() {
  this.onGlobalCooldown = false;
  this.gcdAt = 0;

  console.log(this.gcdAt);

  this.triggerGlobalCooldown = function() {
    this.onGlobalCooldown = true;
    this.gcdAt = 2.5;
  }

  this.tickGlobalCooldown = function(timer) {
    if (2.5 <= timer) {
      this.onGlobalCooldown = false;
      this.gcdAt = 0;
    } else {
      this.onGlobalCooldown = true;
      this.gcdAt =this. gcdAt - timer;
    }
  }

  this.overtime = function(time) {
    console.log(time)
    console.log(this.gcdAt)
    overtime = this.gcdAt - time;

    return (overtime >= 0) ? 0 : Math.abs(overtime);
  }

  this.timeRemaining = function() {
    return this.gcdAt;
  }

  this.isCoolingDown = function() {
    return this.onGlobalCooldown;
  }

}
