function Fire() {
  var self = this;

  var id = obj.id;
  var name = obj.name;
  var potency = obj.potency;
  var castTime = obj.castTime;
  var cooldown = obj.cooldown;
  var image = obj.image;
  var additionalEffects = ko.observableArray([])

  self.imagePath = self.image;
}
