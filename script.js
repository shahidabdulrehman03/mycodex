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

                    
 function sum() {
               var a = prompt("Enter First Number");
               var b = prompt("Enter Second Number");
               var sum = a+b ;
               prompt(sum);
               }                   
                    
 function subtract() {
               var a = prompt("Enter First Number");
               var b = prompt("Enter Second Number");
               var subt = a-b ;
               prompt(subt);
               }                   
                    
 function multiply() {
               var a = prompt("Enter First Number");
               var b = prompt("Enter Second Number");
               var multi = a*b ;
               prompt(multi);
               }                   
                    
 function divide() {
               var a = prompt("Enter First Number");
               var b = prompt("Enter Second Number");
               var divide = a/b ;
               prompt(divide);
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
                    
