
function Kitchen (name, cost) {
  this.name = name;
  this.cost = cost;
}

function Equipment () {
  tot_cost = 0;
  tot_count = 0;
  record_equipment = [];

  this.addEquipment = function (name, cost) {
    record_equipment.push(new Kitchen(name, cost));
    tot_cost += cost;
    tot_count++;
  };

  this.removeEquipment = function (name) {
    record_equipment.splice(name);
    tot_count--;
  };

  this.getCount = function () {
    return tot_count;
  };

  this.getCost = function () {
    return tot_cost;
  };

  this.Stringify = function () {
    string = ""
    for(var i = 0; i < record_equipment.length; i++) {
      string += record_equipment[i].name + " ";
    }
    return string;
  };
}

module.exports= {
  Kitchen: Kitchen,
  Equipment: Equipment
};