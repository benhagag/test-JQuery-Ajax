$(document).ready(function() {


    $.ajax({
      url: "https://randomuser.me/api?results=10",
      success: function(result) {
        apenduser(result);
      }
    });

    function apenduser(data) {
      html="";
      d = new Date();
      year = d.getFullYear();
     console.log(data);
// console.log(data.length);
    for (var i = 0; i < data.results.length; i++) {
      console.log(data.results[i].login.salt);
      gender = data.results[0].gender;
      name =`${data.results[i].name.title} ${data.results[i].name.first} ${data.results[i].name.last}`;
      date = data.results[i].dob;
      age = date.age;
      email = data.results[i].email;
      image=data.results[i].picture.large;
      id=data.results[i].login.salt;

         html+=`
              <div class="col-sm-3 well" id=${id}>
                <img src="${image}" alt="hello" class="images">
      <hr>
      <p>gender: ${gender}</p>
      <p> name: <small class="editp" contenteditable="false"> ${name}</small></p>
      <p>age: ${age}</p>
      <p>email: <small class="editp" contenteditable="false"> ${email}</small></p>  <hr>
      <button type="button" name="button" class="btn-primary" onclick="edituser()">Edit </button>
      <button type="button" name="button" class="btn-danger"  onclick="deleteuser(${id})">Delete</button>

              </div>`;
    }

       $(".container").append(html);


}



  });


function edituser(){

  p= $(".editp");
  p.attr("contenteditable", "true");

}
function deleteuser(x){

console.log(x);
x.remove();

}
