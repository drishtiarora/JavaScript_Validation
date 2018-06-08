// VALIDATION

			var users = (localStorage.a_users && localStorage.a_users.length) ? JSON.parse(localStorage.a_users) : [];
			var list;
			var string = "" ;
			var gender_value = form1.gender.value;
			var genderM = form1.g1;
			var genderF = form1.g2;

			var g1 = document.getElementById('g1') ;
			var g2 = document.getElementById('g2');

			function check(){

				list = document.getElementsByClassName('para');
				
				for(i=0; i<list.length; i++){
					if(list[i] != ""){
						list[i].innerText = "";
					}
				}

			}
			 display(users);
			function saveData(){
			    	check();

			    if(validate()){
			    	console.log("Test");
			        saveDataInLocalhost();

			    }else{
			    	console.log("Drishti");
				    }
				}
		var validate = function() {

					// var name = document.getElementById('username').value ;
					// var pwd = document.getElementById('pwd').value;
					// var email = document.getElementById('email').value ;
					// var location = document.getElementById('location').value ;
					// var company = document.getElementById('company').value;
					// var gender = form1.gender.value;


					var name = form1.username.value;
					var pwd = form1.pwd.value;
					var email = form1.email.value;
					var location = form1.location.value;
					var company = form1.company.value;
					var gender = (document.querySelector('input[name="gender"]:checked')) ? document.querySelector('input[name="gender"]:checked').value : '',
					valid = true;

						console.log(gender);

					if(name == ""){
						 a = document.getElementById("username")
		            	a.insertAdjacentHTML('afterend', '<p class = "para" id = "p1" style="color:Red; display:inline;">please enter the name</p>');
		            	valid = false;
					}

					 if(pwd == ""){
						 a = document.getElementById("pwd")
		            a.insertAdjacentHTML('afterend', '<p class = "para" style="color:Red; display:inline;">please enter the password</p>');
		            	valid = false;
					}

					 if(email == ""){
						 a = document.getElementById("email")
		            a.insertAdjacentHTML('afterend', '<p class = "para" style="color:Red; display:inline;">please enter the email</p>');
		            	valid = false;
					}

					if(location == ""){
						 a = document.getElementById("location")
		            a.insertAdjacentHTML('afterend', '<p class = "para" style="color:Red; display:inline;">please enter the location</p>');
		            	valid = false;
					}

					if(company == ""){
					 	a = document.getElementById("company")
            			a.insertAdjacentHTML('afterend', '<p class = "para" style="color:Red; display:inline;">please enter the company</p>');
		            	valid = false;
					}
					if(gender==""){
						document.getElementById('gender').innerHTML = "Please select gender";
		            	valid = false;
					}

					if(valid) {
						document.getElementById('gender').innerHTML = "";
					 return true ;
					}
				}
				function display(users){


					var html = "<table border='1'><h3 > LOCAL STORAGE DATA </h3>";

						html += "<tr>" ;
						html += "<td> USERNAME </td>" ;
						html += "<td> PASSWORD </td>" ;
						html += "<td> EMAIL </td>" ;
						html += "<td> LOCATION </td>" ;
						html += "<td> COMPANY </td>" ;
						html += "<td> GENDER </td>" ;

						for (var i = 0; i < users.length; i++) {

					    html += "<tr>" ;
					    html += "<td>" + users[i].username+"</td>";
					    html += "<td>" + users[i].pwd + "</td>";
					    html +=	"<td>" + users[i].email + "</td>" ;
					    html +=	"<td>" + users[i].location + "</td>" ;
					    html +=	"<td>" + users[i].company + "</td>" ;
					    html +=	"<td>" + users[i].gender + "</td>" ;
					    html+="</tr>";

					}


						html+="</table>";
					 document.getElementById("result").innerHTML = html;

				}



		function saveDataInLocalhost(){
				var user = {
					'username' : form1.username.value,
					 'pwd' :form1.pwd.value,
					 'email' : form1.email.value,
					 'location' : form1.location.value,
					 'company' : form1.company.value,
					 'gender' : form1.gender.value
				};

				users.push(user);
				localStorage.a_users = JSON.stringify(users);

				if(localStorage.a_users){
					users = JSON.parse(localStorage.a_users);
					  display(users);
				}
			}