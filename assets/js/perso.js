var form = document.getElementById('contact-form');
function processForm(e) {
    if (e.preventDefault) e.preventDefault

    var formData = $(form).serialize();

    $.ajax({
    type: 'POST',
    url: 'https://pooleapp.com/stash/fd5be8ea-2633-40f8-aba0-f5d13e606889/',
    data: formData
    })
    $('#thanks').foundation('reveal', 'open');

    console.log("The 2 following errors are normal:");
    console.log("XMLHttpRequest cannot load // Refused to display");

    return false;
}

if (form.attachEvent) {
    form.attachEvent("submit", processForm);
} else {
    form.addEventListener("submit", processForm);
}
