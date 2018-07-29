let a = 10,b = 20,c = -8,d = 5,e = 30;

if(a > b && a > c && a > d && a > e){

    document.write("Largest no is : " + a);
}

else if(b > a && b > c && b > d && b > e){

    document.write("Largest no is : " + b);
}

else if(c > a && c > b && c > d && c > e){

    document.write("Largest no is : " + c);
}

else if(d > a && d > b && d > c && d > e){

    document.write("Largest no is : " + d);
}

else{
    document.write("Largest no is : "  + e);
}