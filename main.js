$.getJSON("https://api.tenor.com/v1/search?cats", function(myDataset) {
    var tenor = myDataset;
    var gif = null;
    for(i = 0; i < tenor.results.length; i++) {
        title = JSON.stringify(tenor.results[i].title);
        $("<input id=" + title + "type=button value=" + title + " > </input>").appendTo("#allTitles"); //appendTo: Append at inside bottom
    }
    $("input").click(function(e){
        var idClicked = e.target.id;
        for(i = 0; i < tenor.results.length; i++) {
            if (tenor.results[i].title === idClicked){
                gif = tenor.results[i].media[0].gif.url;
            }
        }
        document.getElementById('myAnimatedImage').src = gif; 
 });
});