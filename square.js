        var a=10;
        var a = document.getElementById("MyText").value;
        
        function Onsquare()
        {
            var a = document.getElementById("MyText").value;
            console.log("Value of a");
            console.log(a);
            let b=a*a;
            console.log("Square of Number");
            console.log(b);
            document.getElementById("MyDIV").innerHTML+="<p><br /><pre>    Square is "+b+"</pre></p>";
        }