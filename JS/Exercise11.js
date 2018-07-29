var str = window.prompt();
// let str = document.getElementById("myInput").value;

function alphabet_order(str)
{
  return str.split('').sort().join('');
}

var alpha = alphabet_order(str);
console.log(alpha);
// document.getElementById("demo").innerHTML = alpha;