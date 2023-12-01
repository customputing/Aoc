// read values from file into object
// iterate through object and get first and last integer value even if the value is spelled out
// combine integers for a 2 digit value
// sum all values

var numbers = {
    'one': 1,
    'two': 2,
    'three': 3,
    'four': 4,
    'five': 5,
    'six': 6,
    'seven': 7,
    'eight': 8,
    'nine': 9,
    'twone' : 21,
    'oneight' : 18,
    'nineight' : 98,
    'eightwo' : 82,
    'fiveight' : 58,
    'threeight' : 38
};

require('fs').readFile('day1\\values.txt', (err, data) => {
    if(err) throw err;
    var sum = 0;
    var w = 0;
    var values = data.toString().split('\n');
    
    for(var i = 0; i < values.length -1; i++){

        var x = values[i].match(/\d|twone|oneight|nineight|eightwo|fiveight|threeight|one|two|three|four|five|six|seven|eight|nine/g)
        var z = '';

        x.forEach(element => {
            if(parseInt(element) > 0){
                z += x.toString()
            }else{
                var y = parseInt(numbers[element])
                if(y){
                    z += y.toString()
                }
            }
        });
        
        if(z){
            sum += parseInt(z.at(0) + z.at(-1))
        }
    }
    console.log(sum)
})