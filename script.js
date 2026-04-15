const form = document.getElementById("form");


form.addEventListener("submit",function(e){
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;



const formData = new FormData(form);

const lann= formData.getAll('lann');
const data = {
    name:formData.get('name'),email:formData.get('email'),
    age:formData.get('age'), language:formData.get('lann'),
    gender:formData.get('gender'),
    lann:lann.join(',')
}


document.getElementById("output").innerHTML=
`Name: ${data.name} <br> Email:${data.email} <br>
Age:${data.age} <br> Language:${data.lann} <br>
Gender:${data.gender}
`;

LocalStorage.setItem("user", JSON.stringify(data));

});