var sourceURL = 'https://raw.githubusercontent.com/yketa/website-static/master/';

/* Show/hide */
function showHide(el, cl) {
  var elements = document.getElementsByClassName(cl);
  for (var i = 0; i < elements.length; i++) {
    if (elements.item(i).style.display == "none") { /* show element */
      el.innerHTML = el.innerHTML.replace("fa-chevron-right", "fa-chevron-down");
      elements.item(i).style.display = "";
    }
    else { /* hide element */
      el.innerHTML = el.innerHTML.replace("fa-chevron-down", "fa-chevron-right");
      elements.item(i).style.display = "none";
    }
  }
}
