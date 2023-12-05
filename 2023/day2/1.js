require('fs').readFile('day2\\values1.txt', (err, data) => {
    if(err) throw err;
    var values = data.toString().split('\r\n');
    var successfulGames = 0;

    function CheckOverage(thisColor){

        thisColor = thisColor.split(' ')

        switch(true) {
            case (thisColor[2].match('blue') && (parseInt(thisColor[1]) > 14)) : 
                return false;
            case (thisColor[2].match('green') && (parseInt(thisColor[1]) > 13)) :
                return false;
            case (thisColor[2].match('red') && (parseInt(thisColor[1]) > 12)) :
                return false;
            default :
                return true;
        }            
    }
    

    for(var z = 0; z < values.length - 1; z++){

        var gameId = values[z].split(':')[0].split(' ')[1];
        var games = values[z].split(':')[1];

        for(var i = 0; i < games.length; i++){
            
            var theseColors = games.split(';');
            var isPossible = true;
            var j = 0;
            
            while(isPossible && j < theseColors.length){
           
                thisColor = theseColors[j].split(',')
                j++
                var k = 0;
                
                while(isPossible && (k < thisColor.length)){

                    isPossible = Boolean(CheckOverage(thisColor[k]));
                    k++
                    if(isPossible == false){
                        break;
                    }
                }
            }
        }

        if(isPossible){
        
            successfulGames += parseInt(gameId)
        }
    }

    console.log(successfulGames)
})
