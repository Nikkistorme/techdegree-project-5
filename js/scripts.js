
$(".search-bar").on("keyup", function() {
  const $input = $(".search-bar").val().toLowerCase();
  const $photoSet = $("a[href*='photos']";

  for(let i=0; i< $photoSet.length; i+=1) {
    console.log($photoSet[i]);
  }
});
