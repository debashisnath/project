function flatten(arr){

    var a = arr.join(',');
    return a;
}
console.log(flatten([5, [22], [[14]], [[4]],[5,6]]));