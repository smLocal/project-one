
// var onclick = function(){
  // event.target.remove();             // used this event click, tweak it below, basic template
  // event.target.this.back.transforms();
  // event.this.addAttr(rotateY(180deg));
  // event.this.toggleClass($('.container.card'));
  // if (event.target.style.textDecoration === 'line-through') {    //if else to see if strike has occured
  //   event.target.remove();
  // } else {event.target.style.textDecoration = 'line-through';}
// };

// $(this).on( 'click', function () {
//   console.log('yup, something else broken');
//     $('.container').addClass('red');
// });

  // console.log('yup, something else broken');
  // $(this).toggleClass('.flip');



// create a counter that counts number of sticks
// i assume it would be inside of game loop

var counter = function() {
  if ($(type).hasClass('stick')) {
    var count = 0;
    count++;
    if (count === 3) {

      return reset;
    }
  }

};



$('.card').on('click', function() {
  $(this).addClass('flip');
  var type = $(this).children()[1];

  // console.log($(this).children()[1]);
  if ( $(type).hasClass( 'bomb' )) {
   window.alert("You lose");
    return start();
  // } else if ( 'safe' || 'stick') {
  } else if ($(type).hasClass( 'safe' )) {
    window.alert("that was close");
  } else if ($(type).hasClass( 'stick' )) {
    window.alert("You grabbed a stick! Good job!");
  } else if ($(type).hasClass( 'stick' )) {
    // insert something that counts sticks, genius
  }
// end of game
});

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
  // target all cards $('.card')

  // loop thru each card and
  $('.back').each(function(index, el) {
    var type = deck[index].type;
    // apply a card as a class
    $(el).addClass(type);
    // $('div').text('hi');
    // console.log(deck);
    // deck[index].value;
  });
};

var reset = start();



// change something to reveal the card underneath
// $( '.back' ).toggle(
//   function() {
//     $( this ).toggleClass( ".flip" );
//   }, function() {
//     $( this ).toggleClass( ".flip" );
//   }
// );

// var flipCard = function() {

// };
// var strType = type;
// strType = $( "p:first" ).text();
// $( "p:last" ).html( str );

// p.text(el)



// var stickCount = function() {
//   'stick'+
// };




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

