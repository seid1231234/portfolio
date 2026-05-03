$(document).ready(function () {

    $("#contactForm").submit(async function (e) {
        e.preventDefault();

        let name = $("#nameinput").val().trim();
        let email = $("#email").val().trim();
        let message = $("#message").val().trim();

        if (message === "") {
            $("#mesageerror").text("Please enter a message").css("color", "red");
            return;
        }

        try {
            const response = await fetch("http://localhost:5000/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name,
                    email,
                    message
                })
            });

            const data = await response.json();

            $("#mesageerror").text(data.message).css("color", "green");

            // clear form
            $("#nameinput").val("");
            $("#email").val("");
            $("#message").val("");

        } catch (error) {
            console.log(error);
            $("#mesageerror").text("Server error").css("color", "red");
        }
    });

});