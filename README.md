# Guid Investimentos - TESTE

OBSERVAÇÃO: USEI UM SIMULADOR DE API COM O JSON REAL , O LINK DA API ESTA COM PROBLEMA DE CORS , COMO PRECISO MANDAR O TESTE O QUANTO ANTES FIZ UMA SIMULAÇÃO DE API COM O RETORNO REAL DO JSON.

O projeto esta mostrando de forma pratica e tecnologica, os ulitmos 30 pregões em um grafico com detalhamento e especificações, consiste em consultar a variação do preço de um ativo  nos últimos 30 pregões.

Ao fazer o clone do projeto, executar o comando npm install para instalação das dependencias.

Caso haja problema no grafico, executar o comando npm install -S apexcharts ng-apexcharts@latest.

Para o backend usei o plugin JsonServe que é um back-end rápido para prototipagem e mocking, como a API esta com erro de Cors, e o meu prazo para entregar teria que ser o mais rapido possivel, criei um db.json com o retorno da API , ou seja, é um backend usando o JsonServe com o json do retorno da api. Caso ocorra algum problema para instalar essa dependecia, executar o comando npm i json-server.

Utilizei rotas para a usar os componentes, vale ressaltar que também sei utilizar rotas GUARD para enventuais projetos.
Utilizei componentização para não jogar tudo dentro do app.components e deixar o projeto rapido, organizado e facil para manutenção.
Utilizei teste Unitarios , para inicializar rodar o comando ng teste

Lembre-te:

Para inicializar o projeto roda o comando : npm start.
Para inicializar o backend roda o comando: json-server --watch backend/db.json.

Ambos os comandos precisam ser em CMD diferentes.
