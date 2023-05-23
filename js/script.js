DateNow();

function DateNow()
{
    var dateobj = new Date();
    var dateObject = dateobj.getFullYear();
    document.getElementById("date").innerHTML = 
    "Copyright © 2020-" + dateObject;
}
