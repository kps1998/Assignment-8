var x2;
var x1;
var x0;
var d;
var r1;
var r2;
function getDiscriminant(a,b,c)
{
    var temp1;
    var temp2;
    temp1=(b*b)-(4*a*c);
    console.log(temp1);
    temp2=Math.sqrt(temp1);
    temp2=Math.abs(temp2);
    console.log(temp2);
    return temp2;
}
function CalculateRoot()
{
    var x2 = document.getElementById("x2").value;
    var x1 = document.getElementById("x1").value;
    var x0 = document.getElementById("x0").value;
    console.log("Value of x2\n"+x2);
    console.log("Value of x1\n"+x1);
    console.log("Value of x0\n"+x0);
    d=getDiscriminant(x2,x1,x0);
    if(d>0||d===0)
        {
            document.getElementById("MyDIV").innerHTML+="<p>   Roots are Real</p>";
            r1=(-x1+d)/(2*x2);
            r2=(-x1-d)/(2*x2);
            document.getElementById("MyDIV").innerHTML+="<p><br /><pre>   First  Root is "+r1+"</pre></p>";
            document.getElementById("MyDIV").innerHTML+="<p><br /><pre>   Sedond Root is "+r2+"</pre></p>";
        }
    else
        {
            document.getElementById("MyDIV").innerHTML+="<p><br /><pre>    Roots are imaginary";
            document.getElementById("MyDIV").innerHTML+="<p><br /><pre>   First  Root is "+(-x1/2*x2)+"+"+(d/(2*x2))+"i"+"</pre></p>";
            document.getElementById("MyDIV").innerHTML+="<p><br /><pre>   Sedond Root is "+(-x1/2*x2)+"-"+(d/(2*x2))+"i"+"</pre></p>";
        }
    console.log("Roots are\n"+r1+r2);
    return true;
}
