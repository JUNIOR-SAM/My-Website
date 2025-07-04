const Name = names.value.trim();
const Email = email.value.trim();
const Message = message.value.trim();


const myEmail = () => {
    if(Email === "") {
        alert("Please fill all the fields");
        return;
    }
    form.style.display = "block";
    document.body.style.filter = "blur(10px)";
}