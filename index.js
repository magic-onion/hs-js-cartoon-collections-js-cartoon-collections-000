function dwarfRollCall(dwarves) {
  var dwarfString = "";
  for (var i = (dwarves.length/2); i < dwarves.length; i++) {
    dwarves[i] = i + 1 + ". " + dwarves[i];
  }
  dwarfString = dwarves.join(" ") + " ";
  return dwarfString;
}

function summonCaptainPlanet(planeteerCalls){
  for (var i = 0; i < planeteerCalls.length; i++) {
    planeteerCalls[i] = planeteerCalls[i].toUpperCase() + "!";
  }
  return planeteerCalls;
}

function longPlaneteerCalls(words) {
  for (var i = 0; i < words.length; i++) {
    if (words[i].length > 4) {
      return true;
    }
    else {
      return false;
    }
  }
}

/*var foods = ['mongoose', 'cheddar', 'gouda', 'camembert'];
function findTheCheese (foods) {
  
  for (var i = 0; i < foods.length; i++) {
    if (foods[i] === ('cheddar' || 'gouda' || 'camembert')) {
      return foods[i];
    }
    if (!foods.includes('cheddar' || 'gouda' || 'camembert')) {
      return 'no cheese!';
    }
  }
}
*/
//the above code passes the tests, but does not do what the prompt describes
function findTheCheese(foods) {
  var cheeses = ['cheddar', 'gouda', 'camembert'];
  var noCheese = 'no cheese!';
  
  for (var i = 0; i < foods.length; i++) {
    if (cheeses.includes(foods[i])) {
      return foods[i];
    }
  }
  return noCheese;
}

function wordsWithB(words) {
  bWords =[];
  for (var i = 0; i < words.length; i++) {
    if (words[i].includes("b")) {
      bWords.push(words[i]);
    }
  }
  return bWords;
}
