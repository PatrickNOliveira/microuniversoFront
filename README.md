# Desafio Microuniverso Front end

# Requisitos
Para rodar o projeto será necessário ter o node ou o Docker instalados.

- Para instalar o node [Clique aqui](https://nodejs.org/en/download/) e siga as instruções
- Para instalar o docker [Clique aqui](https://www.docker.com/products/docker-desktop/) e siga as instruções

# Rodando localmente

Primeiro veremos como rodar o projeto localmente;
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


# Rodando com Docker

Ao rodar a aplicação dessa forma, você também vai precisar subir a API manualmente.


## Primeiro passo

Com o docker instalado, navegue até a pasta da aplicação e execute o seguinte comando:

    docker build -t patrickn/frontend .

Você pode alterar o nome da imagem se quiser mas, aconselho manter a mesma do exemplo para quando formos orquestrar esses containers

## Segundo passo

Após a imagem ser buildada, rode o seguinte comando no seu terminal

    docker run -p 8080:8080 patrickn/frontend
Se você mudou o nome da imagem no comando anterior, mude-o agora também.

## Testes
Para rodar os testes, navegue até a pasta da aplicação e rode o seguinte comando

    npm test

## Outras informações

Não foi possível implementar testes de integração no front end por limitações do Vue.js que só executa testes de integração em sistemas orientados a eventos.
