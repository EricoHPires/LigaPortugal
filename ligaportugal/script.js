class Times{
    constructor(escudo, nome,nomeCompleto,fundacao,cidade,estadio,capacidade,titulos1){
        this.escudo = escudo;
        this.nome = nome;
        this.nomeCompleto = nomeCompleto;
        this.fundacao = fundacao;
        this.cidade = cidade;
        this.estadio = estadio;
        this.capacidade = capacidade;
        this.titulos1 = titulos1;
    }
}
const arouca = new Times("aro.png","FC AROUCA","Futebol Clube de Arouca","1952","Arouca","Estádio Municipal de Arouca","5.600 espectadores","1x II Divisão (3º nível), 1x III Divisão (4º nível)");
const avs = new Times ("avs.png","AVS","AVS Futebol SAD","05/05/2023","Vila das Aves","Estádio do CD Aves","8.560 espectadores","Não possui");
const benfica = new Times("ben.png","SL BENFICA","Sport Lisboa e Benfica","28/02/1904","Lisboa","Estádio da Luz","64.642 espectadores","2x Liga dos Campeões da UEFA, 38x Liga Portugal, 26x Taça de Portugal, 7x Taça da Liga, 9x Supertaça de Portugal");
const boavista = new Times("boa.png","BOAVISTA FC","Boavista Futebol Clube","01/08/1903","Porto","Estádio do Bessa Século XXI","28.263 espectadores","1x Liga Portugal, 5x Taça de Portugal, 2x Supertaça de Portugal")
const braga = new Times("bra.png","SC BRAGA","Sporting Clube de Braga","19/01/1921","Braga","Estádio Municipal de Braga","30.286 espectadores","1x Taça Intertoto da UEFA, 3x Taça de Portugal, 3x Taça da Liga");
const casaPia = new Times("cpi.png","CASA PIA","Casa Pia Atlético Clube","03/07/1920","Lisboa","Estádio Municipal de Rio Maior (temporário)","7.000 espectadores","1x Campeonato de Portugal (4º nível)");
const estoril = new Times("est.png","ESTORIL","Grupo Desportivo Estoril Praia","17/05/1939","Estoril","António Coimbra da Mota","8.000 pessoas","5x II Divisão");
const estrela = new Times("ama.png","ESTRELA","Club Football Estrela da Amadora","2020 (o clube original foi extinto)","Amadora","Estádio José Gomes","9.288 espectadores","O clube não possui títulos após ter sido refundado");
const farense = new Times("far.png","SC FARENSE","Sporting Clube Farense","01/04/1910","Faro","Estádio de São Luis","6.500 espectadores","2x II Divisão, 1x III Divisão");
const nacional = new Times("nac.png","CD NACIONAL","Clube Desportivo Nacional","08/12/1910","Funchal, Ilha da Madeira","Estádio da Madeira","5.200 espectadores","1x II Divisão");
const famalicao = new Times("fam.png","FC FAMALICÃO","Futebol Clube de Famalicão","21/08/1931","Vila Nova de Famalicão","Estádio Municipal de Famalicão","5.307 espectadores","2x II Divisão");
const gilVicente = new Times("gil.png","GIL VICENTE FC","Gil Vicente Futebol Clube","03/05/1924","Barcelos","Estádio Cidade de Barcelos","12.046 espectadores","2x Segunda Liga, 1x III Divisão");
const moreirense = new Times("mor.png","MOREIRENSE","Moreirense Futebol Clube","01/11/1938","Moreira de Cónegos","Comendador Joaquim de Almeida Freitas","6.153 espectadores","1x Taça da Liga, 3x Segunda Liga, 2x II Divisão (3º nível)");
const porto = new Times("por.png","FC PORTO","Futebol Clube do Porto","28/09/1893","Porto","Estádio do Dragão","50.033 espectadores","2x Campeão Intercontinental, 2x Liga dos Campeões da UEFA, 1x Supercopa da UEFA, 2x UEFA Europa League, 30x Liga Portugal, 20x Taça de Portugal, 1x Taça da Liga, 24x Supertaça de Portugal");
const rioAve = new Times("rio.png","RIO AVE FC","Rio Ave Futebol Clube","18/01/1939","Vila do Conde","Estádio dos Arcos","5.300 espectadores","3x Segunda Liga, 1x II Divisão (3º nível), 1x III Divisão (4º nível)")
const santaClara = new Times("san.png","CD SANTA CLARA","Clube Desportivo Santa Clara","12/05/1927","Ponta Delgada, Açores","Estádio de São Miguel","13.277 espectadores","2x Segunda Liga")
const sporting = new Times("spo.png","SPORTING CP","Sporting Clube de Portugal","01/07/1906","Lisboa","José Alvalade","50.095 espectadores","20x Liga Portugal, 17x Taça de Portugal, 4x Taça da Liga, 9x Supertaça de Portugal");
const vitoria = new Times("vit.png","VITÓRIA SC","Vitória Sport Clube","22/09/1922","Guimarães","D. Afonso Henriques","30.029 espectadores","1x Taça de Portugal, 1x Supertaça de Portugal");

const times1 = [arouca,avs,benfica,boavista,braga,casaPia,estoril,estrela,farense];
const times2 = [nacional,famalicao,gilVicente,moreirense,porto,rioAve,santaClara,sporting,vitoria];
const times = times1.concat(times2);

let lista1 = document.getElementById("lista1");
let lista2 = document.getElementById("lista2");
let card = document.getElementById("card");

document.addEventListener("DOMContentLoaded", ()=>{
    times1.forEach((time,index) =>{
        opcao1 = document.createElement("div");
        opcao1.innerText = time.nome;
        opcao1.classList.add("time");
        opcao1.dataset.lista = "1";
        opcao1.dataset.index = index;
        opcao1.addEventListener("click", (e) => mostrarCard(e));
        lista1.appendChild(opcao1);
    })
    times2.forEach((time,index) =>{
        opcao2 = document.createElement("div");
        opcao2.innerText = time.nome;
        opcao2.classList.add("time");
        opcao2.dataset.lista="2";
        opcao2.dataset.index = index;
        opcao2.addEventListener("click", (e) => mostrarCard(e));
        lista2.appendChild(opcao2);
    })
})

function mostrarCard(event){
    let lista = event.target.dataset.lista;
    let index = parseInt(event.target.dataset.index);
    if (lista === "2") {
        index += times1.length;
    }
    let escolhido = times[index];
    card.innerHTML = `<div class="tituloCard"><h2><img src="img/${escolhido.escudo}" width="80px"><h2> ${escolhido.nome}</h2> </div>
                <p>${escolhido.nomeCompleto}</p>
                <p>Fundação: ${escolhido.fundacao}</p>      
                <p>Cidade: ${escolhido.cidade}</p>      
                <p>Estádio: ${escolhido.estadio}</p> 
                <P>Capacidade: ${escolhido.capacidade}</p>     
                <h3>Títulos:</h3>
                <p>${escolhido.titulos1}</p>` 
}
window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        toTopButton.style.display = 'block';
    } else {
        toTopButton.style.display = 'none';
    }
};
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Efeito de rolagem suave
    });
}