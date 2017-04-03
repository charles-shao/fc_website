// Spell
//
//
function Spell(obj) {
  var self = this;

  self.id = obj.id;
  self.name = obj.name;
  self.potency = ko.observable(obj.potency);
  self.castTime = ko.observable(obj.castTime);
  self.animationLock = ko.observable(obj.animationLock);
  self.image = obj.image;
  self.additionalEffects = ko.observableArray([])

  self.imagePath = self.image;
}
