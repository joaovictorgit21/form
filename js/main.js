document.querySelector('#form').addEventListener('submit', (e) => {
    e.preventDefault();

    const txt = document.querySelector('#usuario').value;
    if(txt.length >= 8) {
        alert(txt);
    } else {
        alert('Seu usuário tem que ter pelo menos 8 digitos')
    }
});