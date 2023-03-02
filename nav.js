function nav() {
    var x = document.getElementById("kategorie");
    if (x.className === "kategorie") {
      x.className += " responsive";
    } else {
      x.className = "kategorie";
    }
  }