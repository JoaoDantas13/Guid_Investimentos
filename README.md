# Guid Investimentos - Teste

O projeto esta mostrando de forma pratica e tecnologica, os ulitmos 30 pregões em um grafico com detalhamento e especificações, consiste em consultar a variação do preço de um ativo  nos últimos 30 pregões.

Ao fazer o clone do projeto executar o comando npm install para instalação das dependencias.

Caso de problema no grafico, executar o comando npm install -S apexcharts ng-apexcharts@latest.

Para o backend usei o plugin JsonServe que é um back-end rápido para prototipagem e mocking, como a API estava com erro de Cors e meu prazo para entregar o teste era dia 06/03, criei um db.json com o retorno da API , ou seja, é um backend usando o JsonServe com o json do retorno da api. Caso ocorra algum problema para instalar essa dependecia, executar o comando npm i json-server.


Lembre-te:

Para inicializar o projeto roda o comando : npm start.
Para inicializar o backend roda o comando: json-server --watch backend/db.json.

Ambos os comandos precisam ser em CMD diferentes.
