
$(".search-bar").on("keyup", function() {
  const $input = $(".search-bar").val().toLowerCase();
  const $photoSet = $("a[href*='photos']");

  for(let i=0; i< $photoSet.length; i+=1) {
    const $descript = $($photoSet[i]).attr("data-title").toLowerCase();
    if ($descript.indexOf($input) > -1) {
      $photoSet[i].style.display = "block";
    } else {
      $photoSet[i].style.display = "none";
    }
    console.log($input);
  }
});
