$(document).ready(function() {

  // $("#change").click(function() {
  //
  //
  //       setInterval(function(){  }, 1000);
  //
  //
  //     });

  $("#Genarte").click(function() {

    $.ajax({
      url: "https://randomuser.me/api",
      success: function(result) {
        apenduser(result);
      }
    });
  });

    function apenduser(data) {



     d = new Date();
     year = d.getFullYear();
     console.log(data.results[0].login.salt);
     console.log(data.results[0]);
     gender = data.results[0].gender;
     name =`${data.results[0].name.title} ${data.results[0].name.first} ${data.results[0].name.last}`;
     date = data.results[0].dob;
     age = date.age;


     email = data.results[0].email;
     image=data.results[0].picture.large;
     id=data.results[0].login.salt;

     html=`
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



// function play() {
//     setInterval(function(){ next() }, 1000);
// }
