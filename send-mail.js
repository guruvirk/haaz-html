function sendMail(data) {
    document.getElementById('brave-key')
    let jsonData = JSON.stringify({
        "sender": { "name": "HAAZ FORWARDING & LOGISTICS", "email": "sales@haazlogistics.co.nz" },
        "to": [
            {
                "email": "gurpindersingh0009@gmail.com",
                "name": "HAAZ FORWARDING & LOGISTICS ADMIN"
            }
        ],
        "subject": "New Contact Reuest",
        "htmlContent": `<h4>Contact - HAAZ FORWARDING & LOGISTICS.</h4>
        <p><b>Name: </b> ${data.name}</p>
        <p><b>Email: </b> ${data.email}</p>
        <p><b>Phone: </b> ${data.phone}</p>
        <p><b>Freight: </b> ${data.freight}</p>
        <p><b>Subject: </b> ${data.subject}</p>
        <br>`
    });
    let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'https://api.brevo.com/v3/smtp/email',
        headers: {
            'api-key': $("#brave-key").val(),
            'Content-Type': 'application/json'
        },
        data: jsonData
    };
    axios.request(config)
        .then((response) => {
            console.log(JSON.stringify(response.data));
            let formElement = document.getElementById('contact-only')
            formElement.reset()
            $('html,body').scrollTop(0);
            alert("Thanks!, We will react you out soon.")
        })
        .catch((error) => {
            console.log(error);
            let formElement = document.getElementById('contact-only')
            formElement.reset()
            $('html,body').scrollTop(0);
            alert("Thanks!, We will react you out soon.")
        });
}