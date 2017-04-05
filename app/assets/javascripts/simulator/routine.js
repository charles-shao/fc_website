function Routine() {
  var self = this;

  self.slots = ko.observableArray([]);

  self.addAction = function(action) {
    index = self.slots().length;
    slot = new Slot(index, action)
    self.slots.push(slot);
  }

  self.removeSlot = function(slot) {
    self.slots.remove(slot);
  };
}
