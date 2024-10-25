const switchButton = document.getElementById('switchmode');
const switchButton1 = document.getElementById('switchmode1');
const body = document.body;

if (localStorage.getItem('mode') === 'dark') {
    body.classList.add('darkmode');
} else {
    body.classList.add('lightmode');
}
switchButton.addEventListener('click', () => {
    if (body.classList.contains('lightmode')) {
        body.classList.remove('lightmode');
        body.classList.add('darkmode');
        localStorage.setItem('mode', 'dark');
        switchButton.textContent = 'LIGHT';
    } else {
        body.classList.remove('darkmode');
        body.classList.add('lightmode');
        localStorage.setItem('mode', 'light');
        switchButton.textContent = 'DARK';
    }
});
switchButton1.addEventListener('click', () => {
    if (body.classList.contains('lightmode')) {
        body.classList.remove('lightmode');
        body.classList.add('darkmode');
        localStorage.setItem('mode', 'dark');
        switchButton1.textContent = 'LIGHT';
    } else {
        body.classList.remove('darkmode');
        body.classList.add('lightmode');
        localStorage.setItem('mode', 'light');
        switchButton1.textContent = 'DARK';
    }
});
const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')
myModal.addEventListener('shown.bs.modal', () => {
    myInput.focus()
});
formValidate(() => {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('needs-validation');
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
        }
        form.classList.add('was-validated')
    }, false)
    })
})()