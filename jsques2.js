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
         let var1 = document.querySelectorAll(".id1");
         let var2 = document.querySelectorAll(".id2");
         let var3 = document.querySelectorAll(".id3");
         let var4 = document.querySelectorAll(".id4");
         let var5 = document.querySelectorAll("img");
         let arr = myObj.data;

         for (let i = 0; i < arr.length; i++) {
            var1[i].innerHTML = arr[i].id;
            var2[i].innerHTML = arr[i].email;
            var3[i].innerHTML = arr[i].first_name;
            var4[i].innerHTML = arr[i].last_name;
            var5[i].src = arr[i].avatar;
         }

      }
   }
   
   document.getElementById("bat").classList.remove("tab");
}

