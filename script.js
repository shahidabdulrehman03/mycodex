function pname() {
                    var a = prompt("Name");
                    var b = prompt("Limit");
                    var c = 1;
                    var d = 1;
                     while(c <= b)
                    {
                        document.write(d);
                        document.write(".");
                        document.write(a);
                        document.write("<p></p>");
                        c++;
                        d++;
                     }
                    }

function feedback() {
            var feedback = prompt("Do You Like Our Page?", "Yes or No");
             switch(feedback)
             {
               case 'Yes':
               case 'YES':
               case 'yes':
               window.alert("THANK-YOU");
               break;
               case 'NO':
               case 'no':
               case 'No':
               window.alert("We Appericiate that");
               break;
              }
              }


