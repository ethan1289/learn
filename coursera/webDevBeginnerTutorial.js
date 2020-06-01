
function validateFirstName() {
    var fName = document.getElementById("firstName").value;
    var rel = /^[A-A-Za-z\s\'\-]{2,15}$/;

    if (rel.test(fName)) {
        document.getElementById("firstNameError").style.color = "green";
        document.getElementById("firstNameError").innerHTML = "<strong>valid</strong>";
    }
    else {
        document.getElementById("firstNameError").style.color = "red";
        document.getElementById("firstNameError").innerHTML = "2-15 alphabet only";
    }

}

function validateLastName() {
    var lName = document.getElementById("lastName").value;
    var rel = /^[A-A-Za-z\s\'\-]{2,25}$/;

    if (rel.test(lName)) {
        document.getElementById("lastNameError").style.color = "green";
        document.getElementById("lastNameError").innerHTML = "<strong>valid</strong>";
    }
    else {
        document.getElementById("lastNameError").style.color = "red";
        document.getElementById("lastNameError").innerHTML = "2-25 alphabet only";
    }

}

function validatePhoneNumber() {
    var phone = document.getElementById("phone").value;
    var reg = /^[0-9]{3}[-][0-9]{3}[-][0-9]{4}$/; //  can use /^\d{3}-\d{3}-\d{4}$/ also np

    if (reg.test(phone)) {
        document.getElementById("phoneNumberError").style.color = "green";
        document.getElementById("phoneNumberError").innerHTML = "<strong>valid</strong>"

    }
    else {
        document.getElementById("phoneNumberError").style.color = "red";
        document.getElementById("phoneNumberError").innerHTML = "invalid";
    }
}

function calOrder() {

    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var userName = firstName + " " + lastName;
    var phone = document.getElementById("phone").value;
    var quantity = document.getElementById("quantity").value;
    var price = document.getElementById("price").value;

    document.getElementById("orderConfirm").innerHTML = "<h2>ORDER SUMMARY: </h2>";
    document.getElementById("orderConfirm").innerHTML += "<p>" + userName.toUpperCase() + "</br>" + phone;
    document.getElementById("orderConfirm").innerHTML += "Order Total: " + price * quantity + "</p>";

}

function verticalFullName() {
    var fName = document.getElementById("inputFullName").value;

    if (fName == "") {
        document.getElementById("displayVertically").innerHTML = "Please input anything";
    }
    else {
        var i = 0;
        while (i < fName.length) {
            document.getElementById("displayVertically").innerHTML += fName[i] + "<br>"; 
            i++;
        }
    }
}
