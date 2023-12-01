// read values from file into object
// iterate through object and get first and last integer value
// combine integers for a 2 digit value
// sum all values

require('fs').readFile('day1\\values.txt', (err, data) => {
    if(err) throw err;
    var sum = 0;
    var values = data.toString().split('\n');
    for(var i = 0; i < values.length - 1; i++){
        var matched = values[i].match(/\d+/g)
        d = matched.at(0).at(0).toString() + matched.at(-1).at(-1).toString()
        sum += parseInt(d);
    }
    console.log(sum);
})
