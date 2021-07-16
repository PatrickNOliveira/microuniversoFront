# Desafio Microuniverso Front end

# Requisitos
Para rodar o projeto será necessário ter o node instalado.

 - Para instalar o node [Clique aqui](https://nodejs.org/en/download/) e siga as instruções
 
# Importante
Para trocar a URL da API, acesse a pasta do sistema e navegue até o arquivo:

    src/http/index.js

E altere a variável BASE_URL dentro do objeto axios.create
 
# Rodando localmente

Para usar o sistema rodando-o dessa forma, também será preciso rodar o backend. Você pode ter instruções para tal  [Clicando aqui](https://bitbucket.org/PatrickNO/desafio/src/)

## Primeiro passo

Clone o repositório para sua máquina

    git clone https://PatrickNO@bitbucket.org/PatrickNO/desafiofornt.git

## Segundo passo

Navegue até a pasta do repositório e digite o comando:

    npm install

## Terceiro passo

Aguarde a instalação e rode o comando

    npm run dev
    
Para rodar a aplicação em modo de desenvolvimento.
O aplicativo deve abrir automaticamente mas, caso não aconteça, provavelmente ele estará alocado na porta 8080 do servidor local.

## Informações importantes
É possível realizar requisições para a API subindo-a com docker compose mesmo que o front end seja iniciado localmente


## Testes
Para rodar os testes, navegue até a pasta da aplicação e rode o seguinte comando

    npm test

## Outras informações

Não foi possível implementar testes de integração no front end por limitações do Vue.js que só executa testes de integração em sistemas orientados a eventos.

Não foi possível implementar o docker no front end por conta de alguns bugs na construção do Dockerfile que demandariam um pouco mais de tempo para serem fixados.
