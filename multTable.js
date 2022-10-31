/*
Name: Ethan Kittell
Email: Ethan_Kittell@student.uml.edu

My javascript to get the values from the form display
appropriate error messages and to make a multiplication table.

youtube source that helped me with the basics with making a 
table in javascript:https://www.youtube.com/watch?v=KsRnddegee0
*/
function myGetValues() {
    //sets up table values
    var minCol = parseInt(document.getElementById("minCol").value);
    var maxCol = parseInt(document.getElementById("maxCol").value);
    var minRow = parseInt(document.getElementById("minRow").value);
    var maxRow = parseInt(document.getElementById("maxRow").value);

    //prints values for debugging
    console.log(minCol);
    console.log(maxCol);
    console.log(minRow);
    console.log(maxRow);

    removeOldTable();
    createTable(minCol, maxCol, minRow, maxRow);

}

function removeOldTable() {

    //gets rid of table place holder to place a new table
    var oldTable = document.getElementById("placeHolder");
    var newPlaceHolder = document.createElement('div');
    newPlaceHolder.setAttribute("id","placeHolder");
    oldTable.replaceWith(newPlaceHolder);

}

function createTable(minCol, maxCol, minRow, maxRow) 
{
    //check errors
    if (isNaN(minCol) || isNaN(maxCol) || isNaN(minRow) || isNaN(maxRow))
    {
        document.getElementById("errorMessage").innerHTML = "⚠ERROR: VALUE IS NOT A NUMBER⚠";
    }
    else if (minCol <= -51 || minCol >= 51 || maxCol <= -51 || maxCol >= 51 || minRow <= -51 || minRow >= 51 || maxRow <= -51 || maxRow >= 51 )
    {
        document.getElementById("errorMessage").innerHTML = "⚠ERROR: VALUE OUTSIDE LIMITS⚠";
        
    } //add code to test that min is < max values
    else if (maxCol < minCol || maxRow < minRow)
    {
        document.getElementById("errorMessage").innerHTML = "⚠ERROR: MAX VALUE LESS THAN MIN VALUE⚠";
    }
    else
    {

    document.getElementById("errorMessage").innerHTML = "";
    
    //Get the first element in the Body
    var body = document.getElementById("placeHolder");


    //Here we are making the table
    var table = document.createElement('TABLE');

    //Create a TABLE-BODY
    var tblB = document.createElement('TBODY');

    //Append the tablebody to the table
    table.appendChild(tblB);



    //Simple loop to create the cells and rows
    for (var i = minRow; i <= maxRow + 1; i++)
    {
        //Create the rows
        var tr = document.createElement('TR');
        //Append the rows to the body
        tblB.appendChild(tr);
        
        
        //Create the cells
        for (var j = minCol; j <= maxCol + 1; j++)
        {
            var td = document.createElement('TD');
            
            //code to determine contents of table
            
            if (i == minRow && j == minCol)
            {
                td.innerHTML = "";
                td.style.visibility = 'hidden';
            }
            else if (j == minCol)
            {
                td.innerHTML = i-1;
            }
            else if(i == minRow)
            {
                td.innerHTML = j-1;
            }
            else
            {
                td.innerHTML =  (i-1) * (j-1);
            }

            
            //Append them to the rows
            tr.appendChild(td);
        }

    }
    //Append the table to the body
    body.appendChild(table);
    
    
    }
}