function Routine() {
  var self = this;

  self.slots = ko.observableArray([]);
  self.effectObserver = new EffectObserver();

  self.addAction = function(actionBase) {
    action = new Action(actionBase);

    // Any effects are stored separately for calculations
    if (action.isDmgBuff()) {
      self.effectObserver.add(action);
    }

    slot = new Slot(currentIndex(), action, self.effectObserver)
    self.slots.push(slot);
  }

  self.removeSlot = function(slot) {
    self.slots.remove(slot);

    // Recalculate everything
  };

  function currentIndex() {
    return self.slots().length;
  }
}
