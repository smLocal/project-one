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
