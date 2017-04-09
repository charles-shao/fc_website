function Job(obj) {
  var self = this;

  self.id = ko.observable(obj.id);
  self.name = obj.name;
  self.identifier = obj.identifier;

  actions = [];
  for (var i in obj.actions) {
    base = obj.actions[i];
    actionBase = new ActionBase(base);
    action = Object.freeze(actionBase);
    actions.push(action);
  }

  self.actions = ko.observableArray(actions);
}
