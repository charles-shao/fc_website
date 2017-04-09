function EncounterObserver(startTime) {
  var time = startTime;

  this.extend = function(seconds) {
    time += seconds;
  }

  this.timeAt = function() {
    return time;
  }

}
