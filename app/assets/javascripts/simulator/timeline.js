// Timeline
//
//
function Timeline() {
  var self = this;

  self.timeElapsed = 0;
  self.actionId = 1; // Increment on every action added. Does not decrease, used as a temp PK
  self.actionQueue = ko.observableArray([]);
  self.actionsObserved = ko.observableArray([]);
  self.effectsObserved = ko.observableArray([]);

  self.elapseTime = function(time) {
    self.timeElapsed = self.timeElapsed + time;
  }

  self.sequenceActionId = function() {
    self.actionId = self.actionId++;
    return self.actionId;
  }

  self.addToActionQueue = function(action) {
    self.actionQueue.push(action);
    self.observeActionUsage();
  }

  self.removeFromActionQueue = function(observer) {
    var action = observer.action;

    self.actionQueue.remove(action);

    if (action instanceof Spell) {
      self.actionsObserved.remove(observer);
    } else if (action instanceof DamageMultiplierAbility) {
      self.actionsObserved.remove(observer);
      self.effectsObserved.remove(observer);
    }

    self.observeActionUsage();
  }

  self.observeActionUsage = function(){
    // Clear current spells observed
    self.timeElapsed = 0;
    self.actionsObserved([]);
    self.effectsObserved([]);

    // Repopulate observed spells
    $.each(self.actionQueue(), function(indexInArray, action) {
      if (action.category == "Spell") {
        self.actionsObserved.push(new SpellObserver(self, action, indexInArray));
      } else if (action.category == "DamageMultiplierAbility") {
        self.actionsObserved.push(new EffectObserver(self, action, indexInArray));
        self.effectsObserved.push(new EffectObserver(self, action, indexInArray));
      }
    });
  };
}
