var name = "Dong-hwan,Kim";
//$("#main").append(name);

var HTMLImage = '<img src="%data%" id="%id%">';
var CatImage = HTMLImage.replace("%id%", "my-elem")
CatImage = CatImage.replace("%data%", "images/cat1.jpg")
$("#image").append(CatImage);

var count = 0;
$("#numberOfClick").text(count);
$('#my-elem').click(function(e) {
  //the element has been clicked... do stuff here
  count = count + 1;
  $("#numberOfClick").text(count);
});