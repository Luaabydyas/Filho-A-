document.addEventListener('DOMContentLoaded', () => {
    // Elementos do formulário e resultados
    const form = document.getElementById('voteForm');
    const results = {
        Henri: { votes: 0, bar: document.getElementById('barHenri'), votesSpan: document.getElementById('votesHenri') },
        Eloá: { votes: 0, bar: document.getElementById('barEloa'), votesSpan: document.getElementById('votesEloa') }
    };

    // Atualiza a barra de progresso e o número de votos
    const updateResults = () => {
        const totalVotes = results.Henri.votes + results.Eloá.votes;
        if (totalVotes === 0) return; // Evita divisão por zero

        for (const [name, result] of Object.entries(results)) {
            const percentage = (result.votes / totalVotes) * 100;
            result.bar.style.width = percentage + '%';
            result.votesSpan.textContent = `${result.votes} voto${result.votes !== 1 ? 's' : ''}`;
        }
    };

    // Evento de envio do formulário
    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Evita o envio real do formulário

        // Obtém o valor do nome selecionado
        const selectedOption = form.elements['name'].value;

        // Atualiza o número de votos
        if (results[selectedOption]) {
            results[selectedOption].votes += 1;
            updateResults();
        }
    });
});
