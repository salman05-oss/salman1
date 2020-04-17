function byn(c,d)
{    		
        if(c===1)
		{ 
	        document.getElementById("pp1").innerHTML = "<img src='images/dice1.png'>";
		}
		else
		{	
	        if(c===2)
			{	
			    document.getElementById("pp1").innerHTML = "<img src='images/dice2.png'>";
			}	
		    else
            {				
			    if(c===3)
				{	
			        document.getElementById("pp1").innerHTML = "<img src='images/dice3.png'>";
				}	
		        else 
				{
					if(c===4)
					{	
			            document.getElementById("pp1").innerHTML = "<img src='images/dice4.png'>";
		            }  
					else 
					{
						if(c===5)
                        {  
		                    document.getElementById("pp1").innerHTML = "<img src='images/dice5.png'>";
						}	
		                else
                        {							
			                document.getElementById("pp1").innerHTML = "<img src='images/dice6.png'>";
						}
					}
                }
            }
        }			
    if(d===1)
		{ 
	        document.getElementById("pp2").innerHTML = "<img src='images/dice1.png'>";
		}
		else
		{	
	        if(d===2)
			{	
			    document.getElementById("pp2").innerHTML = "<img src='images/dice2.png'>";
			}	
		    else
            {				
			    if(d===3)
				{	
			        document.getElementById("pp2").innerHTML = "<img src='images/dice3.png'>";
				}	
		        else 
				{
					if(d===4)
					{	
			            document.getElementById("pp2").innerHTML = "<img src='images/dice4.png'>";
		            }  
					else 
					{
						if(d===5)
                        {  
		                    document.getElementById("pp2").innerHTML = "<img src='images/dice5.png'>";
						}	
		                else
                        {							
			                document.getElementById("pp2").innerHTML = "<img src='images/dice6.png'>";
						}
					}
                }
            }
        }
    if(c<d)
	{  
		document.getElementById("topic").innerHTML="<img align='middle' class='winner' src='images/winner.jpg'><h1>Player 2 wins";		
	}
    else
    {	
        if(c>d)
		{	
	        document.getElementById("topic").innerHTML="<img align='middle' class='winner' src='images/winner.jpg'><h1>Player 1 wins</h1>";     document.getElementsByClassName("row").innerHTML="<h1 align='centre'>Player 1 wins</h1>";
        }
		else
		{
            document.getElementById("topic").innerHTML="<img align='middle' class='winner' src='images/winner.jpg'><h1>Game Draw</h1>";
		}
	}	
}	
function rr()
{
	var a;
	a=Math.random();
	a=(a*6)+1;
	a=Math.floor(a);
	return a;
}	