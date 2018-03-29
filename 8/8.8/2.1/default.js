var result = $(":button:eq(1)")
  .closest("ul")
  .nextUntil(":radio")
  .filter(function(index) {
    return $(this).is(":text");
  });
console.log(result);