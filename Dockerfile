FROM node:lts-alpine
# instala um servidor http simples para servir conteúdo estático
RUN npm install -g http-server
# faz da pasta 'app' o diretório atual de trabalho
WORKDIR /app
# copia os arquivos 'package.json' e 'package-lock.json' (se disponível)
COPY package*.json ./
# instala dependências do projeto
RUN npm install
# copia arquivos e pastas para o diretório atual de trabalho (pasta 'app')
COPY . .
# compila a aplicação de produção
RUN npm run build
# expõe a porta 8080 do container
EXPOSE 8080
# inicia o servidor http
CMD [ "http-server", "dist" ]
