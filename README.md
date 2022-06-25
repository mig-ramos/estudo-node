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
npm run <script>
   Digitando no pakage.json: "start": "node index.js"
   depois: npm start funciona ou npm run <outros comandos>

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

npm uninstall <nome>

### Criando projeto com express
npm init -y
npm install express
cria o arquivo index.js
node ./index.js  // para rodar

### Html como resposta no node
Utilizando sendFile