const vagas_elemento = document.getElementById('_vagas');
const container_vagas_elemento = document.getElementById('_container_vagas');

const btn_enviar_curriculo = document.querySelector("#_vagas .btn-send-curriculum");

const [quantidade_vagas_elemento] = document.getElementsByClassName('quantity-jobs');

const { vagas } = vagas_elemento.dataset;
const vagasJSON = JSON.parse(vagas);

quantidade_vagas_elemento.innerHTML = vagasJSON.length;

function incluirEventoAberturaModal() {
    const modal = document.querySelector("#modal");
    const close = document.querySelector("#modal .header a");

    btn_enviar_curriculo.addEventListener("click", () =>
        modal.classList.remove("hide"));

    close.addEventListener("click", () =>
        modal.classList.add("hide"));
}

function exibirVagas() {
    vagasJSON.forEach(vaga => {
        const card = document.createElement("div");
        card.classList.add("vaga-card");

        const titulo = document.createElement("h3");
        titulo.classList.add("titulo");
        titulo.textContent = vaga.cargo;
        card.appendChild(titulo);

        const localizacao = document.createElement("p");
        localizacao.classList.add("localizacao");
        localizacao.textContent = vaga.localizacao;
        card.appendChild(localizacao);

        const descricao = document.createElement("p");
        descricao.classList.add("descricao");
        descricao.textContent = vaga.descricao;
        card.appendChild(descricao);

        const salario = document.createElement("p");
        salario.classList.add("salario");
        salario.textContent = vaga.salario;
        card.appendChild(salario);

        const requisitos = document.createElement("p");
        requisitos.classList.add("requisitos");
        requisitos.textContent = "Requisitos:";
        card.appendChild(requisitos);

        const requisitosLista = document.createElement("ul");
        vaga.requisitos.forEach((requisito) => {
            const requisitoItem = document.createElement("li");
            requisitoItem.textContent = requisito;
            requisitosLista.appendChild(requisitoItem);
        });

        card.appendChild(requisitosLista);

        card.addEventListener("click", () => {
            card.classList.toggle("selecionado");
            exibirBotaoEnviarCurriculo()
        });

        container_vagas_elemento.appendChild(card);
    });
}

function exibirBotaoEnviarCurriculo() {
    for (let i = 0; i < container_vagas_elemento.childNodes.length; i++) {
        const el = container_vagas_elemento.childNodes[i];

        if (el && el.classList && el.classList.value && el.classList.value.indexOf("selecionado") !== -1) {
            btn_enviar_curriculo.style.display = "block";
            break;
        } else btn_enviar_curriculo.style.display = "none";
    }
}

window.onload = () => {
    exibirVagas();
    incluirEventoAberturaModal();
};