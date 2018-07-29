var jsonStr = '{"mike":"Book","jason":"sweater","chels":"iPad"}';

       var obj = JSON.parse(jsonStr);
       console.log(obj.mike);
       console.log(obj.jason);
       console.log(obj.chels);