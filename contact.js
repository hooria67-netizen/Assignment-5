
function handleFormSubmit(event) {

    event.preventDefault();
    

    const name = document.getElementById("userName").value;
    const email = document.getElementById("userEmail").value;
    

    alert(`Thank you, ${name}! Your message has been sent successfully. We will contact you at ${email} shortly.`);
    
    
    document.getElementById("contactForm").reset();
}
