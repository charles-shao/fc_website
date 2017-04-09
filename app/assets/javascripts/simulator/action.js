function Action(base) {
  const SPELL = "spell";
  const DMG_BUFF = "dmg_buff";
  const CRIT_BUFF = "crit_buff";

  var self = this;

  self.base = base;

  self.name = base.name;
  self.potency = base.potency;
  self.cost = base.cost;
  self.resource = base.resource;
  self.castTime = base.castTime;
  self.animationLock = base.animationLock;
  self.duration = base.duration;
  self.cooldown = base.cooldown;
  self.category = base.category;
  self.modifier = base.modifier;
  self.gcdLocked = base.gcdLocked;
  self.imagePath = base.imagePath;
  self.objectName = base.objectName;

  self.isSpell = function() {
    return (SPELL === base.category);
  }

  self.isDmgBuff = function() {
    return (DMG_BUFF === base.category);
  }

  self.isCritBuff = function() {
    return (CRIT_BUFF === base.category);
  }
}
