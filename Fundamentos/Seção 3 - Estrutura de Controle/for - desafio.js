// desafio laço for:

// Resolução A:
{ 
    var x = (3+3);
    var y = (20-9);

    let i = x;
    let line = '';

    for (i = x; i <= y; i++) {
        line += '#';
        console.log(line);
    }
}

// Resolução B:
{ 
    let s = '#';

    for(s = '#'; s != '#######'; s += '#'){
        console.log(s);
    }
}


