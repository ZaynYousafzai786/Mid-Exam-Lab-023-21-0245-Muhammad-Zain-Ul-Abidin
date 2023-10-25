document.addEventListener("DOMContentLoaded", function () {
    // Get a reference to the form
    const form = document.getElementById("contact-form");

    // Add a submit event listener to the form
    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent the default form submission

        // Get form values
        const fullName = form.querySelector('input[aria-label="First name"]').value;
        const phone = form.querySelector('input[aria-label="Last name"]').value;
        const address = form.querySelector('input[placeholder="Addres"]').value;
        const email = form.querySelector('input[placeholder="Email"]').value;
        const description = form.querySelector('textarea').value;

        // Here, you can do whatever you want with the form values, such as validation, sending data to a server, or displaying a confirmation message.
        // For now, let's just display a simple alert.
        alert("Form submitted!\nFull Name: " + fullName + "\nPhone: " + phone + "\nAddress: " + address + "\nEmail: " + email + "\nDescription: " + description);
    });
});