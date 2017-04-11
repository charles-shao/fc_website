function ActionObserver(action) {
  const SPELL = "spell";
  const DMG_BUFF = "dmg_buff";
  const CRIT_BUFF = "crit_buff";

  this.action = action;

  this.isGcdAbility = function() {
    return this.action.gcdLocked;
  }
  
  this.isSpell = function() {
    return (SPELL === base.category);
  }

  this.isDmgBuff = function() {
    return (DMG_BUFF === base.category);
  }

  this.isCritBuff = function() {
    return (CRIT_BUFF === base.category);
  }
}
