module.exports = function reverse (n) {
    let strings = n.toString().split('');
    let newarr2 = [];
    if(strings[0] == '-'){
        strings.shift();
    }
    console.log(strings)
    let newarr = strings.reverse().join('');
    return newarr/1;
}
