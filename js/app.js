function getdata(){


   fetch("https://api.github.com/users/nomanishaq").then(response => response.json()).then(data => document.getElementById("name").innerHTML  =  data.name)
   fetch("https://api.github.com/users/nomanishaq").then(response => response.json()).then(data => document.getElementById("img").src = data.avatar_url)



}