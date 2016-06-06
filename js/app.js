//takes row div, and clones // 5 could be var, if needed
var row = $($('.row').get(1));
for (var i = 0; i < 5; i++) {
  row.clone().appendTo('.container');
  // row.clone().enhanceWithin()
}
var array = [];

//makes less on landing
$('.card').hide();

// nuke: you lose gif
var gif2 = (function(){
  var nuke = document.getElementById("nuke");
  var show = function(){
    nuke.style.display = "block";
    setTimeout(hide, 1900);  // 5 seconds
  };

  var hide = function(){
    nuke.style.display = "none";
  };
  show();
}); // end of nuke function

// flips cards
$('.card').on('click', function() {
  $(this).addClass('flip');
  var type = $(this).children()[1]; //targets 2nd child of card div
  if ( $(type).hasClass( 'bomb' )) {                                    // lose
    $('.card').hide();
    gif2();
    setTimeout(reset, 1900);
    window.alert("Wow, you suck at life...smh");

  } else if ($(type).hasClass( 'safe' )) {                              // pass

    $(this).addClass('flip');

  } else if ($(type).hasClass( 'stick' )) {                             //3===win

    array.push('stick');

    if (array.length === 3) {
      reset();
      window.alert('You won, Nerd');
    }
  }
// end of game
});

// create card
var Card = function (type) {
  this.type = type;
};

var start = function() {
  //http://stackoverflow.com/questions/8618570/displaying-a-loading-gif-for-5-seconds-automatically
  //calls gify
  var gif = (function(){
    var start = document.getElementById("start");

    // start gif
    var show = function(){
      start.style.display = "block";
      start.style.width = "100%";
      setTimeout(hide, 1900);  // 5 seconds
    };

    var hide = function(){
      start.style.display = "none";
    };
    show();
  });
  gif();

  var showBoard = function() {
    // bunch of cards in it
    $('.card').show();

    var deck = [
      new Card('stick'),
      new Card('stick'),
      new Card('stick'),
      new Card('bomb'),
      new Card('bomb'),
      new Card('bomb'),
      new Card('safe'),
      new Card('safe'),
      new Card('safe'),
      new Card('safe'),
      new Card('safe'),
      new Card('safe'),
      new Card('safe'),
      new Card('safe'),
      new Card('safe'),
      new Card('safe'),
      new Card('safe'),
      new Card('safe')
    ];

    deck = shuffle(deck);
    // target all cards $('.card')

    // loop thru each card and
    $('.back').each(function(index, el) {
      var type = deck[index].type;
      // apply a card as a class
      $(el).addClass(type);
    });
  };

  //divs shown after click
  setTimeout(showBoard, 1900);
  $('.myStart').hide();
  $('.instructions').hide();
  setTimeout(show($('.myReset')), 1900);
}; // start

var reset = function() {
  location.reload();
};

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
