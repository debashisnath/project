/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */

// String

// Exercise 3
string_to_array = function (str) {
     return str.trim().split(" ");
};
console.log(string_to_array("Robin Singh"));

// Exercise 5
abbrev_name = function (str1) {
    var split_names = str1.trim().split(" ");
    if (split_names.length > 1) {
        return (split_names[0] + " " + split_names[1].charAt(0) + ".");
    }
    return split_names[0];
};
console.log(abbrev_name("Jack Sparrow"));

// Exercise 6
protect_email = function (user_email) {
    var avg, splitted, part1, part2;
    splitted = user_email.split("@");
    part1 = splitted[0];
    avg = part1.length / 2;
    part1 = part1.substring(0, (part1.length - avg));
    part2 = splitted[1];
    return part1 + "...@" + part2;
};

console.log(protect_email("robin_singh@example.com"));

// Exercise 7
string_parameterize = function (str1) {
    return str1.trim().toLowerCase().replace(/[^a-zA-Z0-9 -]/, "").replace(/\s/g, "-");
};
console.log(string_parameterize("Robin Singh from USA."));

// Exercise 10
swapcase = function swapcase(str) {
        return str.replace(/([a-z]+)|([A-Z]+)/g, function(match, chr) {
            return chr ? match.toUpperCase() : match.toLowerCase();
        });
    }
console.log(swapcase('AaBbc'));

// Exercise 12
function uncamelize(str, separator) {
  // Assume default separator is a single space.
  if(typeof(separator) == "undefined") {
    separator = " ";
  }
  // Replace all capital letters by separator followed by lowercase one
  var str = str.replace(/[A-Z]/g, function (letter) 
  {
    return separator + letter.toLowerCase();
  });
  // Remove first separator
  return str.replace("/^" + separator + "/", '');
}
console.log(uncamelize('helloWorld'));
console.log(uncamelize('helloWorld','-'));
console.log(uncamelize('helloWorld','_'));

// Exercise 13
repeat = function repeat(str, count) {
    if(typeof(count) == "undefined") {
    count =1;
  }
  return count < 1 ? '' : new Array(count + 1).join(str);
    }
console.log(repeat('Ha!'));
console.log(repeat('Ha!',2));
console.log(repeat('Ha!',3));

// Exercise 15
humanize_format = function humanize(num) {
   if(typeof(num) == "undefined") return;
  if(num % 100 >= 11 && num % 100 <= 13)
        return num + "th";
        
        switch(num % 10) {
            case 1: return num + "st";
            case 2: return num + "nd";
            case 3: return num + "rd";
        }
        return num + "th";
    }
console.log(humanize_format());  
console.log(humanize_format(1));  
console.log(humanize_format(8));  
console.log(humanize_format(301));  
console.log(humanize_format(402)); 


// Exercise 27
function hexa(str){
  var arr=[];
  for(var i=0; i<str.length;i++)
    {
      var hex=Number(str.charCodeAt(i)).toString(16);
      arr.push(hex);
    }
  return arr.join('');
}
console.log(hexa('12'));
console.log(hexa('100'));

// Exercise 23
function strip_space(str)
{
  return str.replace(/^\s+|\s+$/g, '');
}
console.log(strip_space('w3resource'));
console.log(strip_space(' w3resource'));
console.log(strip_space(' w3resource '));

// Exercise 18
function occurence(str, sub_str)
{
  str +='';
  sub_str+='';
  if(sub_str.length<=0)
    {
      return str.length + 1;
    }
  subStr = sub_str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  return (str.match(new RegExp(subStr, 'gi')) || []).length;
}
console.log(occurence("The quick brown fox jumps over the lazy dog", 'the'));

// Exercise 16
truncate = function(str, length, end) {
    if (length == null) {
      length = 100;
    }
    if (end == null) {
      end = '...';
    }
    if (str.length > length) {
      return str.substring(0, length - end.length) + end;
    } else {
      return str;
    }
  };
console.log(truncate('We are doing JS string exercises.'));
console.log(truncate('We are doing JS string exercises.',19));
console.log(truncate('We are doing JS string exercises.',15,'!!'));



