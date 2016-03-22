
var onclick = function(){
  // event.target.remove();             // used this event click, tweak it below, basic template
  console.log(Card.class);
  // if (event.target.style.textDecoration === 'line-through') {    //if else to see if strike has occured
  //   event.target.remove();
  // } else {event.target.style.textDecoration = 'line-through';}
};

// Math.random
// }

// jQuery for onclick
// append the style or add style that transforms
// front of card to .back
// or maybe a .remove style that is followed by
// an add style to .back

var $el = $('this.el');

var Card = function (type) {
  this.type = type;
};


// bunch of cards in itx
var start = function() {
  var deck = [
    new Card('stick'),
    new Card('stick'),
    new Card('stick'),
    new Card('bomb'),
    new Card('bomb'),
    new Card('bomb'),
    new Card('safe'),
    new Card('safe'),
    new Card('safe')
  ];

  deck = shuffle(deck);
  // target all cards $('.col')

  // loop thru each card and
  $('.col').each(function(index, el) {
    var type = deck[index].type;
    // apply a card as a class
    $(el).addClass(type);
  });
};

// change something to reveal the card underneath




//this shuffles cards
//https://bost.ocks.org/mike/shuffle/
function shuffle(array) {
  var copy = [], n = array.length, i;

  // While there remain elements to shuffle…
  while (n) {

    // Pick a remaining element…
    i = Math.floor(Math.random() * n--);

    // And move it to the new array.
    copy.push(array.splice(i, 1)[0]);
  }

  return copy;
}





