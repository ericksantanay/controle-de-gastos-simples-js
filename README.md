# 💸 Controle de Gastos — Projeto JavaScript

Este projeto é uma aplicação simples de **controle de gastos**, onde o usuário pode cadastrar gastos com nome, valor e categoria.  
Os itens são exibidos em forma de cards e o total é atualizado automaticamente.

O foco deste projeto é praticar:

- Manipulação do DOM  
- Arrays  
- Objetos  
- Funções  
- Eventos  
- Atualização de listas em tempo real  
Link > https://ericksantanay.github.io/controle-de-gastos-simples-js/
---

## 🚀 Funcionalidades

✔ Adicionar gastos  
✔ Cada gasto vira um card exibido na tela  
✔ Remover gastos individualmente  
✔ Atualização automática do total  
✔ Validação dos campos antes de adicionar  
✔ Código simples e fácil de entender  

---

## 📌 Tecnologias utilizadas

- **HTML**
- **CSS**
- **JavaScript (puro)**

---

## 🧠 Lógica do Projeto

1. O usuário digita:
   - nome do gasto  
   - valor  
   - categoria

2. Quando clica em **Adicionar**, o JS:
   - valida os campos  
   - cria um objeto com os dados  
   - adiciona o objeto dentro de um **array (`listaGastos`)**

3. A função `atualizarLista()`:
   - limpa o conteúdo da tela  
   - percorre o array com `forEach()`  
   - cria cards para cada gasto  
   - recalcula a soma total  
   - atualiza o valor do total no fim

4. O botão **Remover** usa `splice()` para tirar o item pelo índice e atualizar a tela.
