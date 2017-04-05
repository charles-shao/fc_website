function Slot(index, action) {
  var self = this;

  self.id = index;
  self.action = ko.observable(action);

  self.clearAction = function() {
    self.action(null);
  };

  self.addAction = function(action) {
    self.action(action);
  }
}
