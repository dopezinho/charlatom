const situations = [
    //['Karaoke', ],
    //['Praia', ],
    //['Zoológico', ],
    ['Bar', ['Gerente', 'Garçon', 'Caixa', 'Universitario', 'Casal Apaixonado', 'Nóia', 'Vendedor de Bala', 'Fumante sem isqueiro', 'Bohêmio', 'Truqueiro']],
    ['Academia', ['Sócio', 'Preguiçoso', 'Rato de Academia', 'Influênciadora', 'Recepcionista', 'Personal Galinha', 'Aluna de Zumba', 'Fisioculturista', 'Lutador', 'Fornecedor de Aparelhos de Academia']],
    ['Balada', ['Mixologista/Bartender', 'Gerente', 'Drogado', 'Fumante', 'DJ', 'HéteroTop', 'Dançarino', 'Vendedor de Hot Dog', 'Eletricista', 'Funcionário de Limpeza']],
    //['Cinema', ],
    ['Clube', ['Treinador', 'Massagista', 'Salva-Vidas', 'Milionário', 'Sócio', 'Esportista', 'Jardineiro', 'Recepcionista', 'Cansado', 'Criança de Férias']],
    ['Cruzeiro', ['Monitor', 'Capitão', 'Pai/Mãe de Primeira Viagem', 'Chef', 'Bartender', 'O Enjoado', 'Jogador Compulsivo', 'A Doida do Protetor Solar', 'Salva-Vidas', 'Baladeiro']],
    ['Delegacia', ['Bêbado', 'Ladrão', 'Delegado', 'Preso por Roubo', 'Preso por 1 Paranga', 'Vítima', 'Familiar da Vítima', 'Advogado', 'Funcionário de Limpeza', 'Policial']],
    //['Estacionamento', ],
    ['Faculdade', ['Bixo', 'Professora', 'Traficantezinho', 'Funcionária da Limpeza', 'Vendedora da Cantina', 'Diretor', 'Bibliotecária', 'Veterano Que Não Se Forma', 'Atleticano Chato', 'Segurança']],
    ['Farmacia', ['Caixa', 'Farmaceutico', 'Cliente Sem Atestado', 'Cliente Comprando Camisinha', 'Idoso', 'Hipocondriaco', 'Repositor de Gondola', 'Estagiaria', 'Maconheiro Comprando Colírio', 'O Que Compra Teste De Gravides']],
    ['Festival', ['Perdido', 'Good Vibes', 'Artista', 'Fã de Carteirinha', 'Fumante', 'Funcionário da Limpeza', 'Segurança', 'Vendedor', 'Cambista', 'Caixa Ambulânte']],
    ['Hospital', ['Médico', 'Infermeiro', 'Cirurgião', 'Recepcionista', 'Hipocondriaco', 'O Doente', 'O Louco', 'A Madre', 'Anestesista', 'O Acidentado']],
    //['Mecanica', ],
    ['Metro', ['Artista', 'Segurança', 'Bilheteiro', 'O Que Pulou A Catraca', 'Executivo', 'Bêbado', 'Vendedor Ambulânte', 'Passageiro', 'Sem Máscara', 'O Atrasado']],
    ['Padaria', ['Padeiro', 'Bêbado', 'Caixa', 'O Que Compra Coxa Creme', 'Cliente Virado', 'Chepeiro', 'Balconista', 'Eletricista', 'Vigilância Sanitária', 'Vizinho']],
    ['Parque', ['Skatista', 'Segurança Noturno', 'Vendedor de Água de Côco', 'Velha do Cooper', 'Boleiro', 'Jogador de Basquete', 'Guarda Civil Municipal', 'Casal Apaixonado', 'Jardineiro', 'Nóia']],
    ['Posto de Gasolina', ['Frentista', 'Bêbado', 'Vendedor da Conveniência', 'Mecânico', 'Gerente', 'Caminhoneiro', 'Cliente', 'Turista de Ônibos', 'Motoboy', 'Ciclista']],
    ['Restaurante', ['Chefe', 'Bartender', 'Recepcionista', 'Caixa', 'Influênciadora', 'Vegeteriano', 'Cliente (Que Foge da Conta)', 'Inspetor Sanitârio', 'Casal Que Briga', 'Cliente Que Reclama']],
    //['Rua', ],
    ['Super Mercado', ['Estoquista', 'Caixa', 'Jardineiro da Loja', 'Gerente', 'Cliente', 'Menores Comprando Bebida', 'Anunciante', 'Criança Perdida', 'Louco por Promoção', 'Empacotador']],
    //['Teatro', ],
    ['Banheiro da balada', ['Drogado', 'O Apertado', 'O Que Passando Mal', 'O Que Puxa Assunto', 'O Que Manda Mensagem Pra Ex', 'O Briguento', 'Faxineiro', 'O Beijoqueiro', 'Nunca Sai Da Fila', 'Funcionario Descansando']]
];

const startButtom = document.getElementById('start');

startButtom.addEventListener('click', function () {

    let nJogadores = document.getElementById('nJogadores').value;
    let nImpostores = document.getElementById('nImpostores').value;
    personList = selectScenario(nJogadores, nImpostores); 7
    let listaFinal = pushImpostor(personList, nImpostores);
    const main = document.getElementById('main');
    main.innerHTML = `<p>Número de Jogadores ${nJogadores}<p><br><p>Número de Impostores ${nImpostores}<p><br><button id = "next">Next</button>`
    for (let i = 0; i < listaFinal[1].lenght; i++) {
        nextPlayer(i);
        console.log(i);
    }



    console.log(listaFinal[1].length);
    return listaFinal
});

function nextPlayer(j) {
    let next = document.getElementById('next');
    next.addEventListener('click', function () {
        main.innerHTML = `<h3>Jogador ${i - 1}<h3><br><p id = "secretIdentity" style = "display : none;">${listaFinal[1][i]}</p><br><button id = "next">Next</button>`;
        next = document.getElementById('next');
        next.addEventListener('click', function () {
            main.innerHTML = `<h3>Jogador ${i}<h3><br><p id = "secretIdentity">${listaFinal[1][i]}</p><button id = "next">Next</button>`;
        });
    });
}

function selectScenario(nPessoas, nImpostores) {
    let n = Math.floor(Math.random() * situations.length);
    let local = situations[n][0];
    let persons = situations[n][1];
    let personList = [[], []]
    personList[0].push(local)
    let i = 0
    while (i < (nPessoas - nImpostores)) {
        let m = Math.floor(Math.random() * persons.length);
        let person = persons[m];
        persons.splice(m, 1);
        personList[1].push(person);
        i = i + 1
    }
    return personList;
};


function pushImpostor(list, nImpostores) {
    let i = 0;
    while (i < nImpostores) {
        list[1].push('Charlatão');
        const main = document.getElementById('main');
        main.innerHTML = '';
        i = i + 1;
    }
    return list;
}