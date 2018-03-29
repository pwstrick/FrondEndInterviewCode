var result = $(":text")
  .each(function(index, element) {
    $(this).val("input");
  })
  .map(function(index, element) {
    return $(element).val();
  })
  .get();
console.log(result);