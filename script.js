    // SAIDA DO RESULTADO 
    let res = document.getElementById('lista');

    // SAIDA DO TOTAL
    let t = document.getElementById('total')

    // ARRAY, AONDE EU VOU ARMAZENAR OS CRDS 
    let listaGastos = []

    // INDICE PARA SABER QUAL SERA DELETADO, "NA HORA DE DELETAR"
    indice = 0

    // SOMA
    let soma = 0 

// FUNÇÃO ADICIONAR
function Adicionar() {
    // PEGANDO OS INPUTS 
    // INPUT NOME DO GASTO
    let nomeProduto = document.getElementById('gasto').value
    
    // INPUT DO VALOR
    let valorProduto = Number(document.getElementById('valor').value)

    // INPUT CATEGORIA
    let categoriaProduto = document.getElementById('categoria').value

    // CONDIÇÃO SE OS INPUTS FOREM VAZIOS
    if (nomeProduto === '' || isNaN(valorProduto) || categoriaProduto === '') {
        alert('PREENCHA OS CAMPOS!')
        return
    }

    //OBJETO AONDE VAI TER O NOME DO GASTO, VALOR E CATEGORIA
    let itens = {
        nome: nomeProduto,
        valor: valorProduto,
        categoria: categoriaProduto
    }

    // PUXANDO O OBJETO NO ARRAY
    listaGastos.push(itens)    
        
    document.getElementById('gasto').value = ''

    document.getElementById('valor').value = ''

    document.getElementById('categoria').value = ''

    atualizarlista()
}   

    // FUNÇÃO PARA NÃO PRECISAR REPETIR CODIGO
    function atualizarlista() {

        // NÃO REPETIR OS ITENS
        res.innerHTML = ''
        soma = 0 // zerarando a soma antes do forEach. // Reset da soma!!!
        
        // FOREACH, VAI PERCORRER O ARRAY ATÉ ACHAR O ITEM 
        listaGastos.forEach((item, indice) => {

            res.innerHTML += 
            `
            <div class="card" style=" background-color: white; padding: 10px;  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.089);">

                <p>Nome do Gasto: ${item.nome}</p>
                <p>Valor: R$${item.valor}</p>
                <p>Categoria: ${item.categoria}</p>
                <button onclick="Remover(${indice})">Remover</button>
            </div>
            `
            soma += item.valor // AQUI VAI ACUMULAR O TOTAL

        }); 

        t.innerText = `Total: R$${soma.toFixed(2)}` 

    }

    // FUNÇÃO DE REMOVER UM DOS CARDS 
    function Remover(indice) {

        listaGastos.splice(indice, 1)
        atualizarlista()
    }
    