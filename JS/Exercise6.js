
function diff(arr1, arr2) {
           var newArr = [];
           var arr = arr1.concat(arr2);

           for (var i in arr) {
               var f = arr[i];
               var t = 0;
               for (j = 0; j < arr.length; j++) {
                   if (arr[j] === f) {
                       t++;
                   }
               }
               if (t === 1) {
                   newArr.push(f);
               }
           }
           return newArr;
    }


console.log(diff(['a', 'b'], ['a', 'b', 'c', 'd']));
console.log(diff("abcd", "abcdefg"));
console.log(diff("zxc", "zxc"));