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

                                   
           
function calculator() {
            var result = prompt("Welcome. Choose 1, 2, 3, 4");
             switch(result)
             {
               case '1' :
               sum();
               break;
               case '2':
               subtract();
               break;
               case '3':
               multiply();
               break;
               case '4':
               divide();
               break;
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
              
              
              
 function sum() {
                         var a = prompt("ENTER FIRST VALUE", "0");
                         var b = prompt("ENTER SECOND VALUE", "0");
                         document.getElementById("sum").innerHTML = a+b;
                        }

function subtract() {
                         var a = prompt("ENTER FIRST VALUE", "0");
                         var b = prompt("ENTER SECOND VALUE", "0");
                         document.getElementById("subtract").innerHTML = a-b;
                        }

function multiply() {
                         var a = prompt("ENTER FIRST VALUE", "0");
                         var b = prompt("ENTER SECOND VALUE", "0");
                         document.getElementById("multiply").innerHTML = a*b;
                        }

function divide() {
                         var a = prompt("ENTER FIRST VALUE", "0");
                         var b = prompt("ENTER SECOND VALUE", "0");
                         document.getElementById("divide").innerHTML = a/b;
                        }

function table() {
                         var a = prompt("ENTER YOUR VALUE", "0");
                         var b = prompt("ENTER YOUR LIMIT", "0");
                         var c = 1;
                         document.write("<br>");
                         document.write("<br>");
                         document.write('<h1 style="text-align:center; margin-right: 45%; margin-left: 35%;">Please Reload This Page</h1>');
                         document.write('<hr style="height:10px;border-width:0; margin-left: 35%; margin-right: 45%;color:black;background-color:black">');
                         while(c <= b)
                         {
                          document.write('<body style="background-image: linear-gradient(to bottom right, black, white);">');
                         document.write("<br>"); 
                         document.write('<a style="background-image: linear-gradient(to bottom right, black, white); padding: 20px; border-left: 10px solid black; margin-left: 35%; border-bottom:10px solid black;">');
                         document.write(a);
                         document.write("</a>");
                          document.write('<a style="background-image: linear-gradient(to bottom right, black, white); padding: 20px; border-bottom:10px solid black;">');
                         document.write("*");
                         document.write("</a>");
                          document.write('<a style="background-image: linear-gradient(to bottom right, black, white); padding: 20px; border-bottom:10px solid black;">');
                         document.write(c);
                         document.write("</a>");
                          document.write('<a style="background-image: linear-gradient(to bottom right, black, white); padding: 20px; border-bottom:10px solid black;">');
                         document.write("=");
                         document.write("</a>");
                          document.write('<a style="background-image: linear-gradient(to bottom right, black, white); padding: 20px; border-right: 10px solid black; border-bottom:10px solid black;">');
                         document.write(a*c);
                         document.write("</a>");
                         document.write("<p></p>");
                         c++;
                           }
                           document.write("<br>");
                           document.write("</body>");
                           }
