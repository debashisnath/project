
  var a2=["Pankaj", "Manik", "Amit", "Karthikey","Tanmay","Diwakar"];
  a2.sort();
  document.write(a2 + "<br>");

  function strDes(a, b) {
    if (a>b) return -1;
    else if (a<b) return 1;
    else return 0;
  }

  a2.sort(strDes);
  console.log(a2);

