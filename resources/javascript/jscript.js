function user()
{
	if(localStorage.getItem("userLogin"))
	{
		document.getElementById("username").style.display="block";
		var user=localStorage.getItem("userLogin");
		var shop = JSON.parse(localStorage.getItem("shop"));
		var userIndex = shop.findIndex(x=>x.shoppername == user)
		console.log("hello")
		document.getElementById("username").innerHTML=shop[userIndex].shoppername;
		document.getElementById("logout").style.display="block";
		document.getElementById("login").style.display="none";
		document.getElementById("signin").style.display="none";
		document.getElementById("cart").style.display="block";
	}
	console.log("no item present");
}
function cart(productName,price)
{
    if(localStorage.getItem('userLogin'))
    {
        if(localStorage.getItem('shop'))
        {
            var user = localStorage.getItem('userLogin')
			var shop = JSON.parse(localStorage.getItem('shop'))
			var userIndex = shop.findIndex(x=>x.shoppername == user)
                                                     var index = -1
			 var i;
           for(i=0; i < shop[userIndex].cart.length; i++)
			{
				if(shop[userIndex].cart[i].product == productName)
				{	
					index=i;
					break;
				}
			}
            if(index == -1)
                                                                {
				shop[userIndex].cart.push({product:productName,price:price})
                                                                    localStorage.setItem('shop',JSON.stringify(shop))
                                                                  alert("ADDED TO CART");
                                                                     return true;
                                                                    }
            else
            {
                alert("item already present in cart")
                return false;
            }
        }
        else
        {
            return false;
        }
    }
    else
    {
        return false;
    }
}
function logout()
{
if(localStorage.getItem("userLogin"))
{
localStorage.removeItem("userLogin");
document.getElementById("username").style.display="none";
document.getElementById("logout").style.display="none";
document.getElementById("login").style.display="block";
document.getElementById("signin").style.display="block";
document.getElementById("cart").style.display="none";
console.log("logged out");
}
}
function logincheck()
{
               var name=document.getElementById("userid");
	var safe=document.getElementById("pswrd");
               if(name.value.trim()=="")
	{
		alert("PLEASE FILL ALL THE REQUIRED DETAILS");
		console.log("ok");
		return false;
	}
	else if(safe.value.trim()=="")
	{
		alert("PLEASE FILL ALL THE REQUIRED DETAILS")
		console.log("not happening");
		return false;
	}
               else
	{
		return true;
	}
}
function check()
{
	var name=document.getElementById("userid");
	var safe=document.getElementById("pswrd");
	var confirm=document.getElementById("cpswrd");

	if(name.value.trim()=="")
	{
		alert("PLEASE FILL ALL THE REQUIRED DETAILS");
		console.log("ok");
		return false;
	}
	else if(safe.value.trim()=="")
	{
		alert("PLEASE FILL ALL THE REQUIRED DETAILS")
		console.log("not happening");
		return false;
	}
	else if(safe.value.trim()!=confirm.value.trim())
	{
		alert("CONFIRM PASSWORD AGAIN!!");
		console.log("ohoo");
		return false;
	}
	else
	{
		return true;
	}
}
function signup()
{
	if(check())
	{
		document.getElementById("userid").style.border="solid 3px  pink";
		document.getElementById("pswrd").style.border="solid 3px pink";
		document.getElementById("cpswrd").style.border="solid 3px pink";
		if(localStorage.getItem("shop"))
		{
			var shopper=document.getElementById("userid").value;
			var pass=document.getElementById("pswrd").value;
			var store=window.btoa(pass.toString());
			const shop= JSON.parse(localStorage.getItem("shop"))
			const shopindex= shop.findIndex(x=>x.shoppername==shopper.toString())
			if(shopindex==-1)
			{
				shop.push({shoppername:document.getElementById("userid").value,password:store,cart:[]});
				console.log("registered!");
                alert("USERNAME ADDED!!");
				localStorage.setItem("shop",JSON.stringify(shop));
				return true;
			}
			else 
			{
				alert("USERNAME ALREADY EXISTS!!");
				return true;
			}
		}
	
	else
	{
		const shop=[{shoppername:"",password:"",cart:[{productName:"",price:""}]}]
		localStorage.setItem("shop",JSON.stringify(shop))
		return true;
	}
                 }
	else
	{
	return false;
	}
}
 function login()
{
	if(logincheck())
	{
		document.getElementById("userid").style.border="solid 3px pink";
		document.getElementById("pswrd").style.border="solid 3px pink";
		if(localStorage.getItem("shop"))
		{
			var shopper=document.getElementById("userid").value;
			shopper=shopper.toString();
			var pass=document.getElementById("pswrd").value;
			const shop=JSON.parse(localStorage.getItem("shop"));
			const shopperindex=shop.findIndex(x=>x.shoppername==shopper);
			if(shopperindex>0)
			{
				var dec=window.atob(shop[shopperindex].password);
				console.log("enterred");
				if(dec==pass)
				{
				localStorage.setItem("userLogin",shopper);
				console.log("set");

				return true;
			}
			alert("PASSWORD INCORRECT!!");
			document.getElementById("userid").style.border="solid 3px pink";
			document.getElementById("pswrd").style.border="solid 3px pink";
			return false;
			}
			else
			{
				document.getElementById("userid").style.border="solid 3px pink";
				document.getElementById("pswrd").style.border="solid 3px pink";
				alert("USERNAME DOESNOT EXIST!!");
				return false;
			}
		}
		else
		{
			alert("NOT FOUND!!");
			return false;
		}
	}
	else
	{
		return false;
	}
}
function remove(i)
{
	if(localStorage.getItem('userLogin'))
	{
		if(localStorage.getItem('shop'))
		{
			var shop=JSON.parse(localStorage.getItem('shop'))
			var user=localStorage.getItem('userLogin');
			const index=shop.findIndex(x=>x.shoppername==user);
			shop[index].cart.splice(i,1);
			location.reload;
			localStorage.setItem('shop',JSON.stringify(shop));
			location.reload()
			return true;
		}
	}
}
function gotocart()
{
	if(localStorage.getItem('userLogin'))
	{
		if(localStorage.getItem('shop'))
		{
			var i;
                                                    var total=0;
			var user = localStorage.getItem('userLogin')
			var shop = JSON.parse(localStorage.getItem('shop'))
			var userIndex = shop.findIndex(x=>x.shoppername == user)
			if(shop[userIndex].cart.length > 0)         
			{
				document.getElementById("table1").style.display="block";
				var table=document.getElementById("table1") 
				for(i=0; i<shop[userIndex].cart.length; i++)
				{              
					var row = table.insertRow(i+1);                                                                                   
					var col1 = row.insertCell(0);
					var col2 = row.insertCell(1);
					var col3 = row.insertCell(2);
					var col4 = row.insertCell(3);
					col1.innerHTML = i+1;
					col2.innerHTML = shop[userIndex].cart[i].product
					col3.innerHTML = shop[userIndex].cart[i].price
					col4.innerHTML = "<button type='submit' onclick='remove("+i+")'>Cancel</button> ";
				                  total=total+shop[userIndex].cart[i].price;
                                                                       }
                                                            document.getElementById("total").innerHTML=total;
                                                            document.getElementById("order").style.display="block";
			}
			else 
			{
				document.getElementById("noitem").style.display="block";
                                                                      
			}
		}
	}       
}
function order()
{
	if(localStorage.getItem('userLogin'))
	{
		if(localStorage.getItem('shop'))
		{
			var shop=JSON.parse(localStorage.getItem('shop'))
			var user=localStorage.getItem('userLogin');
			const index=shop.findIndex(x=>x.shoppername==user);
			shop[index].cart.splice(0,shop[index].cart.length);
			localStorage.setItem('shop',JSON.stringify(shop));
			location.reload()
			alert("Your Order Has been Placed!!");
		}
	}
}


