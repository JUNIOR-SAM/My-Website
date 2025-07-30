const myEmail = () => {
    form.style.display = "block";
}
const exitEmail = () => {
    form.style.display = "none";
}

const nameInput = document.getElementById("text").value;
const email = document.getElementById("mail").value;
const message = messages.value;

const allowEmail = () => {
    if (nameInput === "" || email === "" || message === "") {
        alert("Please fill all the fields");
        return;
    }else if(email.value.search(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/) === -1) {
        alert("Please enter a valid email address");
        return;
    }else if (message.length < 10) {
        alert("Message must be at least 10 characters long");
        return;
    } else {
        alert("Your message has been sent successfully!");
        // form.style.display = "none";
        text.value = "";
        mail.value = "";
        messages.value = "";
        // document.getElementById('preview').src = '#';
        // document.getElementById('preview').style.display = 'none';
    }
}


document.getElementById('image').addEventListener('change', function (event) {
    const preview = document.getElementById('preview');
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            preview.src = e.target.result;
            preview.style.display = 'block';
            form.style.height = '700px'
        }
        reader.readAsDataURL(file);
    } else {
        preview.src = '#';
        preview.style.display = 'none';
    }
});


