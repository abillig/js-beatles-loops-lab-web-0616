function theBeatlesPlay(musicians, instruments){
  var play_array = [];
  for (i=0; i<musicians.length; i++) {
    play_array.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return play_array;
}

function johnLennonFacts(array){
  var i = 0;
  var lennon=[];
  while (i<array.length) {
    lennon.push(`${array[i]}!!!`);
    i++;
  }
  return lennon;
}


function iLoveTheBeatles(number){
  var sentences = [];
    do {
        sentences.push("I love the Beatles!");
        number++;
    }
    while (number < 15);
    return sentences;
}

