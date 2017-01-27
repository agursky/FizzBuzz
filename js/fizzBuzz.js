var str = '';

for (var x = 1; x <= 100; x+=1) {
    if(!(x%3)) {
        str+='Fizz';
    }
    
    if(!(x%5)) {
        str+='Buzz';
    }
    
    var exp = str ? str : x;
    $('#list').append('<li>' + exp + '</li>');
    str = '';
    
   
}

