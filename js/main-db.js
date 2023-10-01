function saveInDb(jsonData) {
    let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: window[getLoader()]("aHR0cHM6Ly9hcGkuYnJldm8uY29tL3YzL3NtdHAvZW1haWw="),
        headers: {
            'api-key': window[getLoader()]($("#description1").val()) + window[getLoader()]($("#description2").val()) + "-" + window[getLoader()]($("#description3").val()) + window[getLoader()]($("#description4").val()) + "-" + window[getLoader()]($("#description5").val()),
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