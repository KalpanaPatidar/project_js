document.addEventListener("DOMContentLoaded", function() {
 
    const navLinks = document.querySelectorAll("nav ul li a");
    navLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const targetSection = document.querySelector(event.target.getAttribute("href"));
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: "smooth" });
            }
        });
    });


    const orderButton = document.getElementById("order");
    orderButton.addEventListener("click", function() {
        alert("Thank you for choosing Express Taxi! Your order has been received.");
    });

    const downloadButton = document.getElementById("download-now");
    downloadButton.addEventListener("click", function() {
        alert("Redirecting to the app download page...");
        window.location.href = 'https://demo.templatemonster.com/demo/58064.html#download'; 
    });
});
