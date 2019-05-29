$("#ingredient1").on("keyup", function() {
 if ($(this).val().length > 3 ) {

   var ing1 = $("#ingredient1").val();
   console.log(ing1);

   var urlString2 = "https://api.punkapi.com/v2/beers"+ing1;
   $.ajax({
       url: urlString,
       dataType: "JSON"
   }).done(function(data) {
       $("#recipe-list").empty();
       console.log(data.recipes.length);
       for (i = 0; i < data.recipes.length; i++) {

            var title = data.recipes[i].title;


            console.log(data.recipes[3].title);
            var listClasses = "row titleAlert alert alert-dark text-light";
           console.log("Recipes found" + data.recipes.length);
           $("#recipe-list").append(
               '<li class="'+listClasses+'">'+generateSpanCode(imgSrc, title, year, i)+'</li>'
           );
       }
   }).fail(function(data) {
       console.log(data);
   });
}
});

function generateSpanCode(imgSrc, title, year, i){
   var imgClasses = "col-xs-4 col-sm-4 col-md-4 col-lg-4 col-xl-4";
   var textClasses = "col-xs-4 col-sm-4 col-md-4 col-lg-4 col-xl-4 vertical-center";
   var code = '<span class="'+imgClasses+'"> <img src="'+imgSrc+'" alt="PosterImage"> </span>'+
   '<span class="'+textClasses+'"> <strong>Title '+(i+1)+':</strong>'+title+'</span>'+
   '<span class="'+textClasses+'"> <strong>Year:</strong>'+year+'</span>';

   return code;
}
