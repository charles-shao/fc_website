function ActionQueue(actionSlot) {
  var self = this;

  self.queue = ko.observableArray([]);
  self.actionSlot = actionSlot;
}
