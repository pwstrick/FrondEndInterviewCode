var fragment = document.createDocumentFragment(),
  p;
for (var i = 0; i < 10; i++) {
  p = document.createElement("p");
  p.innerHTML = i;
  p.style.width = "100px";
  fragment.appendChild(p);
}
document.body.appendChild(fragment);