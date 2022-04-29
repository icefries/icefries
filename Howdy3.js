
	   
	   
	   

		
        
    
 
	

	
	
		function sayHi() {
						
			
			

			
			
			document.write("<font color = 'yellow'>","<h1>Hello sir!</h1>");
			
			document.bgColor = "darkblue";
			
			
		}	
			
	
		
		function klaber() {
						
			
			
		var i = window.prompt("Please enter a number less than 10"); 
			
			
			
			if (i > 10) {

				 alert("Please enter a number that is less than 10");
				
				
				}
			
			else if (i < 10) {
				
				while (i < 10) {
					
				document.write(i + "<br>", "<font color = 'red'>")
			
				i++
				
				document.bgColor = "darkblue";
			
				}	
			
			}		
			
			else {
				
				
				
				alert("Hello! You didn't enter a number. Try again");
				
			}
				
			
		}
		
		
		function pythaga() {
			
			var a = window.prompt("Please enter a number for side a");
			
			var b = window.prompt("Please enter a number for side b");
							
			var c = Math.sqrt((Math.pow(a,2) + Math.pow(b,2)));
			
			document.write( "<font color = 'red'>","<font size = '20px'>", c);
			
			document.bgColor = "darkblue";
			
			
		}
		
		
			
		function passaWassa() {
			
		var password = "wordpass";
		var response;
		var entryCount = 0;
		var entryLimit = 3;
		var error = false;

		while(response != password && !error){
				if(entryCount < entryLimit){
				response = window.prompt("Enter Password");
				entryCount++;
			} else {
				error = true;
			}
		}

		if(error){
			alert("Too many entries");
		} else {
			alert("Success");
		}

		}