function Routine() {
  var self = this;

  self.slots = ko.observableArray([]);
  var effectObserver = new EffectObserver();
  var gcdObserver = new GcdObserver();
  var encounterObserver = new EncounterObserver();

  self.addAction = function(actionBase) {
    action = new Action(actionBase);

    actionObserver = new ActionObserver(action)
    if (action.isDmgBuff()) { effectObserver.add(action) }

    observers = {
      actionObserver: actionObserver,
      effectObserver: effectObserver,
      gcdObserver: gcdObserver,
      encounterObserver: encounterObserver
    }

    slot = new Slot(currentIndex(), observers)
    self.slots.push(slot);
  }

  self.removeSlot = function(slot) {
    self.slots.remove(slot);

    // Recalculate everything
  };

  self.recalibrate = function() {

  }

  function currentIndex() {
    return self.slots().length;
  }
}
