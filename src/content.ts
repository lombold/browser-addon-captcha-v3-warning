function run() {
    console.log("Content script is running");
    if (isRecaptchaRunning()) {
        console.log("captcha is running");
        highlight();
    }
}

function isRecaptchaRunning() {
    return !!(<any>window).grecaptcha;
}

function highlight() {
    console.log("Highlighting");
    document.body.style.border = "5px solid red";
    document.body.append(getLabel());
}

function getLabel() {
    const label = document.createElement('p');
    label.textContent = 'WARNING: Captcha is watching you';
    label.style.position = 'fixed';
    label.style.zIndex = '9999';
    label.style.top = '0';
    label.style.left = '0';
    label.style.background = 'red';
    label.style.color = 'white';
    label.style.padding = '5px';
    label.style.fontWeight = 'bold';
    return label;
}

run();
