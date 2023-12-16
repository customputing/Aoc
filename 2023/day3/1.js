var thisLine = 0;
var symbols = /[-!@#$%^&*()_+\\|~=`{}\[\]:";'<>?,\/]/g
var allTheParts = 0

require('fs').readFile('day3\\values.txt', (err, data) => {
    if(err) throw err;

    values = data.toString().split('\r\n')
    console.log("going to evaluate " + values.length + "lines")
    values.map(CheckNumbers)

        //get numbers in each line, check their index against same line -1/+1 and previous/next line for each index and +1/-1
    function CheckNumbers(value){
        var thisLinesNumbers = value.match(/\d+/g)
        console.log('this line is '+(thisLine + 1))
        if(thisLinesNumbers){
            thisLinesNumbers.map(CheckIndex)
        }
        thisLine++
    }

    function CheckIndex(value){

        var currentStartingIndex = parseInt(values[thisLine].indexOf(value))
        var valueLength = parseInt(value.toString().length)
        var currentEndingIndex = parseInt(currentStartingIndex + valueLength)
        value = parseInt(value)

        var valueCounted = true

        console.log("evaluating " + value + " at starting index " + currentStartingIndex + " and ending at " + currentEndingIndex)

        //same line check
        if(values[thisLine][(currentStartingIndex - 1)]){
            if((values[thisLine][currentStartingIndex - 1].match(symbols))){
                valueCounted = false
                allTheParts += value
                console.log("Counted " + value + " on first same line check making the total " + allTheParts )
            }
        }

        if(values[thisLine][currentEndingIndex] && valueCounted){
            if((values[thisLine][currentEndingIndex].match(symbols))){
                valueCounted = false
                allTheParts += value
                console.log("Counted " + value + " on second same line check making the total " + allTheParts )

            }
        }

        //check line before for each index value can hold
        if(thisLine > 0  && valueCounted){
            for(i=0; i < valueLength + 2; i++){
                if(values[thisLine - 1][currentStartingIndex - 1 + i]){
                    //console.log('checking index' + (currentStartingIndex - 1 + i) + 'found ' + values[thisLine - 1][currentStartingIndex - 1 + i])
                    if((values[thisLine - 1][currentStartingIndex - 1 + i].match(symbols))){
                        valueCounted = false
                        allTheParts += value
                        console.log("Counted " + value + " on prior line check making the total " + allTheParts )

                    }

                }
            }
        }

        //check line after for each index value can hold
        if(thisLine < (values.length - 1)  && valueCounted){
            for(j=0; j<valueLength + 2; j++){
                if(values[thisLine + 1][currentStartingIndex - 1 + j]){
                    //console.log('checking index' + (currentStartingIndex - 1 + j) + 'found ' + values[thisLine + 1][currentStartingIndex - 1 + j])
                    if((values[thisLine + 1][currentStartingIndex - 1 + j].match(symbols))){
                        valueCounted = false
                        allTheParts += value
                        console.log("Counted " + value + " on post line check making the total " + allTheParts )
                    }
                }
            }
        }
    }
    console.log(allTheParts)
});