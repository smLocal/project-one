
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

var row = $($('.row').get(1));
for (var i = 0; i < 5; i++) {
  row.clone().appendTo('.container');
}
var array = [];

$('.card').hide();


var gif2 = (function(){
  var myDiv2 = document.getElementById("myDiv2");

  var show = function(){
    myDiv2.style.display = "block";
    setTimeout(hide, 1900);  // 5 seconds
  };

  var hide = function(){
    myDiv2.style.display = "none";
  };
  show();
});

$('.card').on('click', function() {
  $(this).addClass('flip');
  var type = $(this).children()[1];
  if ( $(type).hasClass( 'bomb' )) {
    $('.card').hide();
    gif2();
    setTimeout(reset, 1900);
    window.alert("Wow, you suck at life...smh");
    // return reset();

  } else if ($(type).hasClass( 'safe' )) {

    $(this).addClass('flip');

  } else if ($(type).hasClass( 'stick' )) {

    array.push('stick');

    if (array.length === 3) {
      // TODO add prompt you win
      reset();
      window.alert('You won, Nerd');
    }
  }
// end of game
});


// jQuery for onclick
// append the style or add style that transforms
// front of card to .back
// or maybe a .remove style that is followed by
// an add style to .back

var Card = function (type) {
  this.type = type;
};

var start = function() {
  // window.confirm('warning...brain combustion imminent!!!');
  //http://stackoverflow.com/questions/8618570/displaying-a-loading-gif-for-5-seconds-automatically
  //stack overflow
  //calls gify
  var gif = (function(){
    var myDiv = document.getElementById("myDiv");

    var show = function(){
      myDiv.style.display = "block";
      myDiv.style.width = "100%";
      setTimeout(hide, 1900);  // 5 seconds
    };

    var hide = function(){
      myDiv.style.display = "none";
    };
    show();
  });
  gif();

  var showBoard = function() {
    // bunch of cards in itx
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

  setTimeout(showBoard, 1900);
  $('.myButton').hide();
}; // start


// stackoverflow: javascript button
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
