require('fs').readFile('day2\\values1.txt', (err, data) => {
    if(err) throw err;
    var values = data.toString().split('\r\n');
    var totalMultiplied = 0

    for(var z = 0; z < values.length - 1; z++){

        var games = values[z].split(':')[1];
        var thisGame = games.split(';')
        var highestBlue = 0;
        var highestGreen = 0;
        var highestRed = 0;

        for(var i = 0; i < thisGame.length; i++){
            var theseColors = thisGame[i].split(',');
            var j = 0;
            
            while(j < theseColors.length){
                thisColor = theseColors[j].split(',')
                j++
                var k = 0;
                
                while(k < thisColor.length){
                    thisPull = thisColor[k].split(' ')
                    var evaluatingColor = thisPull[2]
                    var highestNumber = parseInt(thisPull[1])
                    k++

                    if(evaluatingColor.match('blue')){
                        if (highestNumber > highestBlue){
                            highestBlue = highestNumber
                        }
                    }

                    if(evaluatingColor.match('green')){
                        if (highestNumber > highestGreen){
                            highestGreen = highestNumber
                        }
                    }

                    if(evaluatingColor.match('red')){
                        if (highestNumber > highestRed){
                            highestRed = highestNumber
                        }
                    }
                }
            }
        }
        var Game1Multiplied = (highestBlue * highestGreen * highestRed)
        totalMultiplied += Game1Multiplied
    }
    console.log(totalMultiplied)
})
