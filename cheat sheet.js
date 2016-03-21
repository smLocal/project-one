// cheat sheet cheat sheet cheat sheet cheat sheet
// cd to w2d4 for css.animate shit
// CD to w01d05 for dom events and dom manipulation

// cd w2d2
var  createNode = function() {
  // console.log('hey');
  // var liTag = document.createElement('li');

  var tasks = document.getElementById('input').value;   // assigned input

  var items = tasks.split(',');   // takes input and adds comma, separates. ten assiagned to array
  console.log(items);        // console  ["sdsd", " sd", " sdfsd"]
  for (var i = 0; i <items.length; i++) {    // loop thru items
    var liTag = document.createElement('li');   // creates li

    liTag.textContent = items[i];     // assigning array items to li's
    // var s = liTag.textContent;
    document.body.children[2].appendChild(liTag);   //append from events.md
  }
};

var monitorClick = function(){
  // event.target.remove();             // used this event click, tweak it below
  if (event.target.style.textDecoration === 'line-through') {    //if else to see if strike has occured
    event.target.remove();
  } else {event.target.style.textDecoration = 'line-through';}
};
// cd w2d3
var makeMiddleEarth = function() {
  var $middleEarth = $('<section>');
  // $('#overlay').append('<section>');
  $middleEarth.attr('id', 'middle-earth');

  lands.forEach(function(land) {
    var $article = $('<article>');

  // 1.  Create a section tag with an id of "middle-earth".
  // 2.  Create an article tag for each land in the lands array.
  // 3.  Give each article tag a class of "land".
  $article.addClass('land');
  var $h1 = $('<h1>');
  $h1.text(land);
  $article.append($h1);

  // 4.  Inside each article tag include an h1 tag with the name
  //     of the land as content.
  // 5.  Append each article.land to section#middle-earth.
$middleEarth.append($article);
});
  // 6.  Append section#middle-earth to the document body.
$middleEarth.appendTo('body');
};
// test this in the console (watch the HTML, though) by running:
makeMiddleEarth();

var makeHobbits = function() {
  // 1.  Create a ul tag with an id of "hobbits".
  var $david = $('<ul>');
  $david.attr('id', 'hobbits');
  // 2.  Create li tags for each Hobbit in the hobbits array.
  hobbits.forEach(function(elem) {
    var $li = $('<li>');
  // 3.  Give each li tag a class of "hobbit".
    $li.addClass('hobbit');

  // 4.  Set the text of each li.hobbit to one of the Hobbits
//     in the array.

    $li.text(elem);
    $li.appendTo($david);

  });

  // 5.  Append the ul#hobbits to the article.land representing
  //     "The Shire" (the first article tag on the page).
  // .append
  $david.appendTo($('article')[0]);

};
// test this in the console (watch the HTML, though) by running:
makeHobbits();

var keepItSecretKeepItSafe = function() {
  // 1.  Create a div with an id of "the-ring".
var $pablo = $('<div>');
$pablo.attr('id', 'the-ring');
  // 2.  Give div#the-ring a class of "magic-imbued-jewelry".
 $pablo.addClass('magic-imbued-jewelry');
  // 3.  Add div#the-ring as a child element of the li.hobbit
  //     representing "Frodo."
 // $("li:contains('Frodo Baggins')" ).first().appendTo($david);
  $pablo.appendTo("li:contains('Frodo Baggins')" );
};

// test this in the console (watch the HTML, though) by running:
keepItSecretKeepItSafe();

// w02d01 tic tac toe
<!DOCTYPE html>
<html>
<head>
  <title></title>
  <link rel="stylesheet" type="text/css" href="css/style.css">
</head>
<body>
  <div class="container">
    <div class="row">
      <div class="col border-bottom border-right" onclick="move(0,0)"></div>
      <div class="col border-bottom" onclick="move(0,1)"></div>
      <div class="col border-bottom border-left" onclick="move(0,2)"></div>
    </div>
    <div class="row">
      <div class="col border-right" onclick="move(1,0)"></div>
      <div class="col" onclick="move(1,1)"></div>
      <div class="col border-left" onclick="move(1,2)"></div>
    </div>
    <div class="row">
      <div class="col border-top border-right" onclick="move(2,0)"></div>
      <div class="col border-top" onclick="move(2,1)"></div>
      <div class="col border-top border-left" onclick="move(2,2)"></div>
    </div>

    <div class="row">
      <button onclick="reset()">Reset</button>
    </div>
  </div>

  <script type="text/javascript" src="js/app.js"></script>
</body>
</html
// tic tac toe css
.container {
  width: 310px;
  margin-left: auto;
  margin-right: auto;
}

.row {
  float: left;
  width: 100%;
}

.col {
  float: left;
  width: 100px;
  height: 100px;
  text-align: center;
}

.border-left {
  border-left: 1px solid #000;
}

.border-right {
  border-right: 1px solid #000;
}

.border-bottom {
  border-bottom: 1px solid #000;
}

.border-top {
  border-top: 1px solid #000;
}

// cd wdi/labs/jquery
// console.log(typeof $);  // same as below
// console.log(typeof jQuery);

// var divToManipulate = document.getElementById('myDiv');
// divToManipulate.innerHTML = 'goodbye world sad face';  // jQuery version below

// $('#myDiv').html('goodbye world');  // makes 2 lines to one

// $('#container').html('this isnt a container bish');



// var myDiv = document.getElementById('container');
// var newP = document.createElement('p');
// newP.innerHTML = 'hello complicated, multi line adding dom element'; //longer
// myDiv.appendChild(newP);

// ********************************************************
// $('#container').append('<p>');
// $('p').html('heello simpler lines to inpute using jQuery chaining'); // shorter

// $('#myBtn').on('click', function(){
//   // $('p').addClass('red') // makes text red
//   $('p').toggleClass('red');
// });

// $('#secondBtn').on('click', function(){
//   event.stopPropagation()               // dont bubble up, like debugger
//   console.log('You clicked me!!');
// });

// $('#container').on('click', function() {
//   console.log('yessireebob!')
// })

// var containerInnerHtml = $(
//   '#container').html()

// $('#container').append('<img src="https://assets-cdn.github.com/images/modules/open_graph/github-mark.png">')
//                                       // made image above
// console.log(
//   $( '#container').html())

// $('#secondBtn').remove()


// $('p').addClass('red');

// $('.bold').removeClass('bold');   // lcass then remove class

// var $newP = $('<p>');                  // making variable
// $newP.html('this is another p tag');  //
// $newP.addClass('red');                  //adding red class
// $('#myDiv').append($newP);          //puting inisde the div




// $('#drinks').append('<li>beer</li>')
// $('#foods').append('<li>burgers</li>')
// $('li').

$( document ).ready(function() {
  $('#addDrink').on('click', function(){
    var newDrink = $('#drinkInput').val();
    $('#drinks').append('<li>' + newDrink + '</li>');
    $('#drinkInput').val('');
  });

  $('#addFood').on('click', function(){
    var newFood = $('#foodInput').val();
    $('#food').append('<li' + newFood + '</li>');
    $('#foodInput').val(' ');    //clears
  });

  $('button').mouseover(function() {
    // $(this).addClass('red')
    $(this).toggleClass('red');
    /* Act on the event */
  });

});

