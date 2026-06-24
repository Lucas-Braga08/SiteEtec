const form = document.querySelector('form');
const inputs = form.querySelectorAll('input, textarea, select');

inputs.forEach(input => {
    input.addEventListener('input', function() {
        document.querySelectorAll('.msg-sucesso, .msg-erro').forEach(msg => {
            msg.style.display = 'none';
        });
    });
});

form.addEventListener('submit', function(e) {
    const nome = this.nome.value.trim();
    const email = this.email.value.trim();
    const termos = this.termos.checked;

    if (!nome || !email || !termos) {
        e.preventDefault();
        alert('Preencha todos os campos obrigatórios');
    }
});