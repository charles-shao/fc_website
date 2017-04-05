function Slot(index, action, effectObserver) {
  var self = this;

  self.id = index;

  actionObserver = new ActionObserver(action, effectObserver)
  self.actionObserver = ko.observable(actionObserver);

  self.clearActionObserver = function() {
    self.actionObserver(null);
  };

  // Required when users want to fill in an empty slot
  // self.addActionObserver = function(action, effectsObserver) {
  //   new ActionObserver(action, effectsObserver)
  //   self.actionObserver(actionObserver);
  // }

}
