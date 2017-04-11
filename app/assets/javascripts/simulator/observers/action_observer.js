function ActionObserver(action) {
  this.action = action;

  this.isGcdAbility = function() {
    return this.action.gcdLocked;
  }
}
