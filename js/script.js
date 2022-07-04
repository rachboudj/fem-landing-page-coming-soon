const emailContent = document.querySelector('.email-content');
const formContainer = document.querySelector('.form-container');
const submitBtn = document.querySelector('.submit-btn');
const imgErreur = document.querySelector('.img-erreur');
const errorMessage = document.querySelector('.error-message');
const fullPage = document.querySelector('.full-page');



function validateEmail(inputText) {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (inputText.match(mailformat)) {
        return true;
    }
    return false;
}

fullPage.addEventListener('click', (e) => {
    if ((!e.target.closest('formContainer')) && (e.target.className !== 'submit-btn') && (e.target.className !== 'arrow-submit')) {
        imgErreur.classList.remove('show-error');
        errorMessage.classList.remove('show-error');
        console.log('une erreur');
    }
})

submitBtn.addEventListener('click', () => {
    const email = emailContent.value;
    if (validateEmail(email)) {
        emailContent.value = '';
    }
    else {
        imgErreur.style.display = 'block';
        errorMessage.style.display = 'block';
        emailContent.style.borderColor = '#f96262';
        console.log('email mal écrit');
    }
    console.log('validé');
});

emailContent.addEventListener('input', () => {
    imgErreur.style.display = 'none';
    errorMessage.style.display = 'none';
    emailContent.style.borderColor = '#ce9797';
    console.log("pas d'erreur");
});