const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;

    let dados = {
        nome,
        email
    }
    let converteDados = JSON.stringify(dados);
    
    localStorage.setItem('lead', converteDados);

    let conteudo = document.getElementById('content');

    let carregando = `<p>carregando...</p>`;
    let cadastrado = `<p>cadastrado.</p>`;

    conteudo.innerHTML = carregando;
    setTimeout(() => {
        conteudo.innerHTML = cadastrado
    }, 1000)
})