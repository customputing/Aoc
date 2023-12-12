require('fs').readFile('day2\\values1.txt', (err, data) => {
    if(err) throw err;
    var values = data.toString().split('\r\n');
    var totalMultiplied = 0

    function evaluateThisColor(thisColor){
        thisPull = thisColor.split(' ')
        var evaluatingColor = thisPull[2]
        var highestNumber = parseInt(thisPull[1])

        switch(evaluatingColor){

            case 'blue':
                
                if (highestNumber > highestBlue)
                    highestBlue = highestNumber
                break;

            case 'green':

                if (highestNumber > highestGreen)
                    highestGreen = highestNumber
                break;
            

            case 'red':

                if (highestNumber > highestRed)
                    highestRed = highestNumber
                break;
        }
    }

    function evaluateThisColors(theseColors){
        thisColor = theseColors.split(',')
        thisColor.map(evaluateThisColor)
    }

    for(var z = 0; z < values.length - 1; z++){

        var games = values[z].split(':')[1];
        var thisGame = games.split(';')
        var highestBlue = 0;
        var highestGreen = 0;
        var highestRed = 0;

        for(var i = 0; i < thisGame.length; i++){
            var theseColors = thisGame[i].split(',');
            theseColors.map(evaluateThisColors)

        }
        var Game1Multiplied = (highestBlue * highestGreen * highestRed)
        totalMultiplied += Game1Multiplied
    }
    console.log(totalMultiplied)
})
