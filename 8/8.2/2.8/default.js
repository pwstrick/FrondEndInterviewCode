function matches(element, selector) {
  var matchesSelector =
    element.webkitMatchesSelector ||
    element.mozMatchesSelector ||
    element.oMatchesSelector ||
    element.matchesSelector;
  return matchesSelector.call(element, selector);
}