function Job(obj) {
  var self = this;

  self.id = ko.observable(obj.id);
  self.name = obj.name;
  self.identifier = obj.identifier;

  actions = [];
  for (var i in obj.actions) {
    base = obj.actions[i];
    actions.push(new Action(base));
  }

  self.actions = ko.observableArray(actions);
}
