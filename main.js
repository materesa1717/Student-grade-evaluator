function eva(){
    var math = document.getElementsByTagName('input')[1].value;
    if (math >= 90 && math <= 100)
    {
        document.getElementsByTagName('p')[0].textContent = " Excelent";
    }
    else if (math >= 80 && math <= 89)
    {
        document.getElementsByTagName('p')[0].textContent = "Good";
    }
    else if (math >= 70 && math <= 79)
    {
        document.getElementsByTagName('p')[0].textContent = "Average";
    }
    else if (math >= 60 && math <= 69)
    {
        document.getElementsByTagName('p')[0].textContent = "poor";
    }
    else if (math >= 59 && math <= 0)
    {
        document.getElementsByTagName('p')[0].textContent = "fair";
    }
    else
    {
        document.getElementsByTagName('p')[0].textContent = "no grade !";
    }
    
/*science*/

var science = document.getElementsByTagName('input')[2].value;
if (science >= 90 && science <= 100)
{
    document.getElementsByTagName('p')[1].textContent = "Excelent";
}
else if (science >= 80 && science <= 89)
{
    document.getElementsByTagName('p')[1].textContent = "Good";
}
else if (science >= 70 && science <= 79)
{
    document.getElementsByTagName('p')[1].textContent = "Average";
}
else if (science >= 60 && science <= 69)
{
    document.getElementsByTagName('p')[1].textContent = "Poor";
}
else if (science <= 59 && science >= 0)
{
    document.getElementsByTagName('p')[1].textContent = "Fair";
}
else
{
    document.getElementsByTagName('p')[1].textContent = "No Grade";
}

/* english */

var english = document.getElementsByTagName('input')[3].value;
if (english >= 90 && english <= 100)
{
    document.getElementsByTagName('p')[2].textContent = "Excelent";
}
else if (english >= 80 && english <= 89)
{
    document.getElementsByTagName('p')[2].textContent = "Good";
}
else if (english >= 70 && english <= 79)
{
    document.getElementsByTagName('p')[2].textContent = "Average";
}
else if (english >= 60 && english <= 69)
{
    document.getElementsByTagName('p')[2].textContent = "Poor";
}
else if (english <= 59 && english >= 0)
{
    document.getElementsByTagName('p')[2].textContent = "Fair";
}
else
{
    document.getElementsByTagName('p')[2].textContent = "No Grade";
}

 /* filipino */

 var filipino = document.getElementsByTagName('input')[4].value;
 if (filipino >= 90 && filipino <= 100)
 {
     document.getElementsByTagName('p')[3].textContent = "Excelent";
 }
 else if (filipino >= 80 && filipino <= 89)
 {
     document.getElementsByTagName('p')[3].textContent = "Good";
 }
 else if (filipino >= 70 && filipino <= 79)
 {
     document.getElementsByTagName('p')[3].textContent = "Average";
 }
 else if (filipino >= 60 && filipino <= 69)
 {
     document.getElementsByTagName('p')[3].textContent = "Poor";
 }
 else if (filipino <= 59 && filipino >= 0)
 {
     document.getElementsByTagName('p')[3].textContent = "Fair";
 }
 else
 {
     document.getElementsByTagName('p')[3].textContent = "No Grade";
 }

  /* P.E.*/

var pe = document.getElementsByTagName('input')[5].value;
if (pe >= 90 && pe <= 100)
{
    document.getElementsByTagName('p')[4].textContent = "Excelent";
}
else if (pe >= 80 && pe <= 89)
{
    document.getElementsByTagName('p')[4].textContent = "Good";
}
else if (pe >= 70 && pe <= 79)
{
    document.getElementsByTagName('p')[4].textContent = "Average";
}
else if (pe >= 60 && pe <= 69)
{
    document.getElementsByTagName('p')[4].textContent = "Poor";
}
else if (pe <= 59 && pe >= 0)
{
    document.getElementsByTagName('p')[4].textContent = "Fair";
}
else
{
    document.getElementsByTagName('p')[4].textContent = "No Grade";
}

/**ranking */

if (math && science && english && filipino && pe >= 90 && math && science && english && filipino && pe <= 100)
{
    document.querySelector("#award").textContent = "Top Honor Student";
    if (math < 90 || math && science < 90 || math && english < 90 || math && filipino < 90)
    {
        document.querySelector("#award").textContent = "Second Honorable Student";
    }
    else if (science < 90 || science && english < 90 ||science && filipino < 90 || science && pe < 90)
    {
          document.querySelector("#award").textContent = "Second Honorable Student";
    }
    else if (english < 90 || english && filipino < 90 || english && pe < 90)
    {
        document.querySelector("#award").textContent = "Second Honorable Student";
    }
    else if (filipino < 90 || filipino && pe < 90)
    {
        document.querySelector("#award").textContent = "Second Honorable Student";
    }
    else if ( pe < 90)
    {
        document.querySelector("#award").textContent = "Second Honorable Student";
    }
    }
    else if (math && science && english && filipino && pe <= 69 && math && science && english && filipino && pe >= 0)
    {
        document.querySelector("#award").textContent = "Repeater";
    }
}
