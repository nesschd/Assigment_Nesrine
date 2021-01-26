$.getJSON("tenor.json", function(myDataset) {
    var tenor = myDataset;
    console.log(tenor.results.title);
  $( "body" ).append( "<h1>" + tolkien.name + "</h1>" );
});