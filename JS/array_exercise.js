/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */

//Problem:1
function is_array(arr)
{
   return Array.isArray(arr);
}
console.log(is_array('w3 resources'));
console.log(is_array([1,2,3,4]));

//Problem:2
function clone(arr)
{
  return arr.slice(0);  
}

console.log(clone([1,2,3,4]));

//Problem:3
function newarray(array, n) {
      if (array == null) 
      return void 0;
    if (n == null) 
      return array[0];
    if (n < 0)
      return array;
    else
    return array.slice(0, n);
  };

console.log(newarray([7, 9, 0, -2]),);
console.log(newarray([],3));
console.log(newarray([7, 9, 0, 1,7,8],-3));
console.log(newarray([7, 9, 0, -2],6));

//Problem:5
Color = ["Red", "Green", "White", "Black"];
console.log(Color.toString());

//Problem:7
var a=[9,4,1,6,8,-3,2,7];
var temp;
var i,j;
var n=a.length;

for(j=0;j<n;j++)
  {
    for(i=0;i<n;i++)
      {
        if(a[i]>a[[i+1]])
          {
            temp=a[i+1];
            a[i+1]=a[i];
            a[i]=temp;
          }
      }
  }
console.log("after sort")
for(i=0;i<n;i++)
  {
    console.log(a[i]);
  }

//Problem:8
var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
var max = 1;
var count = 0;
var item;
for (var i=0; i<arr1.length; i++)
{
        for (var j=i; j<arr1.length; j++)
        {
                if (arr1[i] == arr1[j])
                 count++;
                if (max<count)
                {
                  max=count; 
                  item = arr1[i];
                }
        }
        count=0;
}
console.log(item+" ( " +max +" times ) ") ;

//Problem:9
var str="HEllO.hOW are You";
var arr=Array.from(str);
n=arr.length;
var a=[];
var i;
for(i=0;i<n;i++)
  {
    var temp=arr[i];
    if(temp==temp.toUpperCase())
     {
       a[i]=temp.toLowerCase();
     }
    else
      a[i]=temp.toUpperCase();
  }
var b=a.toString();
console.log(b);

//Problem:10
var a=[
  [2,5,8],
  [7,8,3],
  [9,0,1]
];
var n=a.length;
var i;
var a1=a.shift();
console.log("row 0");
console.log(a1);
var a2=a.shift();
console.log("row 1");
console.log(a2);
var a3=a.shift();
console.log("row 2");
console.log(a3);

//Problem:11
var a=[0,1,2,3,4,5];
var n=a.length;
var i;
var sq;
var total=0;
for(i=0;i<n;i++)
  {
    sq=a[i] * a[i];
    total=total+sq;
  }
console.log(total);

//Problem:13
var arr=[];
arr.push(10);
arr.push(20);
arr.push(30);
console.log(arr);

//Problem:14
var arr=[10,20,30,10,20,40,50];
n=arr.length;
var i,j;
for(i=0;i<n;i++)
  {
    for(j=i+1;j<n;j++)
      {
        if(arr[i]==arr[j])
          {
            arr[i]=" ";
          }
      }
  }
console.log(arr);

//Problem:22
function union(arr1, arr2){
  for(var i = 0;i < arr2.length;i++){
    if(arr1.indexOf(arr2[i]) == -1)
      arr1.push(arr2[i]);
  }
  return arr1.sort(function(a, b){return a-b});;
}

console.log(union([1, 2, 3], [100, 2, 1, 10]));

//Problem:25
function swap(arr, x, y){
  var temp = arr[x];
  arr[x] = arr[y];
  arr[y] = temp;
}

function myFunction(arr){
  var l = Object.keys(arr).length;
  for(var i = 0;i < l-1;i++){
    for(var j = 0;j < l-i-1;j++){
      if(arr[j].title > arr[j+1].title)
        swap(arr, j, j+1);
    }
  }
  return arr;
}

var library = [ 
   {
       title:  'The Road Ahead',
       author: 'Bill Gates',
       libraryID: 1254
   },
   {
       title: 'Walter Isaacson',
       author: 'Steve Jobs',
       libraryID: 4264
   },
   {
       title: 'Mockingjay: The Final Book of The Hunger Games',
       author: 'Suzanne Collins',
       libraryID: 3245
   }];

console.log(myFunction(library));


//Problem:32
function contains(arr, n) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == n) {
            return true;
        }
    }
    return false;
}
arr = [2, 5, 9, 6];
console.log(contains(arr, 5));
console.log(contains(arr,1));

//Problem:33
var arr = [1, 3, 6, 3, -5];
console.log(arr);
arr.length = 0;
console.log(arr);

//Problem:35
function random_item(items)
{
  
return items[Math.floor(Math.random()*items.length)];
     
}

var items = [254, 45, 212, 365, 2543];
console.log(random_item(items));

//Problem:37
var a=[];
var i;
function arr(r1,r2)
{
  for(i=0;i<r1;i++)
    {
      a[i]=r2;
     
    }
  console.log(a);
}

arr(2,'hello');
arr(4,'hi');

//Problem:40
var a=[];
var i;
function arr(r1,r2)
{
  var temp=r1;
  for(i=0;i<r2;i++)
    {
      a[i]=temp;
      temp++;
    }
  console.log(a);
}

arr(2,2);
arr(3,6);
arr(-4,6);

//Problem:41
var a=[];
var i;
function arr(r1,r2)
{
  var temp=r1;
  for(i=0;i<(r2-r1);i++)
    {
      a[i]=temp;
      temp++;
    }
  console.log(a);
}

arr(2,7);
arr(3,6);
arr(-4,6);






