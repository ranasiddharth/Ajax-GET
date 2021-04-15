function func() {
   const Http = new XMLHttpRequest();
   const url = 'https://reqres.in/api/users';
   Http.open("GET", url , true);
   Http.send();
   Http.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
         let myObj = JSON.parse(this.responseText);
         console.log(myObj);
         console.log(myObj.data);
         
         var tabble = document.getElementById("bat");
         tabble.innerHTML = "<tr><th>id</th><th>email</th><th>firstname</th><th>lastname</th><th>avatar</th></tr>";
         var userdata = myObj.data;
         for(i in userdata){
           var p1 = userdata[i].id;
           var p2 = userdata[i].email;
           var p3 = userdata[i].first_name;
           var p4 = userdata[i].last_name;
           var p5 = userdata[i].avatar;
           tabble.innerHTML+= "<tr><td>"+p1+"</td><td>"+p2+"</td><td>"+p3+"</td><td>"+p4+"</td><td><img src="+p5+"></td></tr>";
         }

      }else if(this.readyState==4 && this.status == 400){
         tabble.innerHTML = "Bad Request";
      }
      else if(this.readyState==4 && this.status == 404){
         tabble.innerHTML = "Error 404! Not found";
      }
   }
   
   document.getElementById("bat").classList.remove("tab");
}
