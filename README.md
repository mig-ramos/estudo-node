# estudo-node

## comandos

1.1 node arquivo.js
    -> Hello Word Node!
1.2 node index.js -> Estou aqui.
2.6 node ./index.js --a=5 --b=10  -> 15

### sessão 4

4.1 Criando projeto: npm init
4.2 NPM init rapido: npm init -y
4.3 Instalando um pacote:
    npm install <nome>
    A pasta node_modules é criada
    Com npm install, a pasta node_modules eh recriada
Os pacotes estao no site: https://www.npmjs.com/ 

Atualizar pacotes: npm update (atualiza todos os pacotes) ou npm update <nome>
Um comando para verificar a necessidade de update: npx npm-check-updates, se tiver algum
basta dar um: npm install

### criando script

Rotinas são executadas com o npm usando scripts
- npm run 'script'
  <p> Digitando no pakage.json: "start": "node index.js"
  <p> depois: npm start funciona ou npm run "outros comandos"

### pacote global

Utiliza a flag -g em node install
### Exemplo:
sudo install -g lodash
NOTA: No caso do lodash é preciso dar o comando: 
npm link lodash -> para que o programa saiba onde ele está. O motivo é que o lodash não é executavel.

### Executando scriptd com npx

Exemplo: Instalacao do React, simplificando a instalação
Outro exemplo: a vaquinha falando Hello World! 
npx cowsay "Hello World!"

### Remover pacote com npm

npm uninstall <b>nome</b>

### Criando projeto com express
npm init -y
<p>npm install express
<p>cria o arquivo index.js
<p>node ./index.js  // para rodar

### Html como resposta no node
Utilizando sendFile

### reiniciar servidor automaticamente com Nodemon
Instalar o Nodemon como dependência de desenvolvimento (--save-dev)
<p>npm install --save-dev nodemon
acrescenta o script: 
<p>"scripts": {
    <p>"test": "echo \"Error: no test specified\" && exit 1",
     <p>"start": "nodemon ./index.js"
  },
<p>Em produção vai estar iniciando o servidor de outra forma
<p>Quando o script não for 'start' e ser 'serve', para rodar tem que ter 'npm <b>run serve</b>'

## Handlebars
- É uma template engine para colocar dados dinamicos no html entre {{}} para serem impressos.
- Podemos criar condicionais e loops no template.
- O nome do pacote é <b>express-handlebars.
### Mudança no Handlebars
Houve uma pequena alteração no Handlebars, que vai quebrar o código das aulas seguintes.
<p>Para reparar.
<p>Trocar esta linha de código:
app.engine('handlebars', exphbs())

Por esta:
app.engine('handlebars', exphbs.engine())
<p>Basicamente, precisamos invocar este método engine, que antes era opicional para realizar algumas configurações extras, agora ele é obrigatório para o funcionamento do pacote.

### Instalação

- Express e o Handlebars
- Podemos utilizar o Nodemon
- No index importar os pacotes instalados
- Adicionar ao Express a engine do Handlebars
- Criar uma view no diretório views, com a <b>extensão handolebars
- Utilizamos o método render para enviar esta view para a requisição.

