# Corrida CPCN

Olá! Esta é uma API REST de gerencia de usuarios e etapas da corrida do Circuito Piauiense de Corridas na Natureza **(CPCN)**.

Contém endpoints para cadastro de usuarios e etapas das corridas além de funcionalidades da aplicação

É uma API feita com Javascript (Node.js)

## Endpoints:

**POSTMAN: https://documenter.getpostman.com/view/10582029/Szt8eVeA?version=latest**

### Runner

#### Cadastro (POST)

- Cadastra um corredor passando todos os dados:

name, age, gender, email, whatsapp, city, uf.


#### Listar um (GET)

- Recupera do banco de dados as informações de um corredor

#### Listar todos (GET)

- Recupera do banco de dados as informações de todos corredor

#### Apagar (DELETE)

- Apaga do banco de dados as informações de um corredor

#### Modificar (PUT)

- Altera do banco de dados as informações de um corredor

name, age, gender, email, whatsapp, city, uf.


### Stages

#### Cadastro (POST)

- Cadastra uma etapa passando todos os dados:

name, city, uf


#### Listar um (GET)

- Recupera do banco de dados as informações de uma etapa

#### Listar todos (GET)

- Recupera do banco de dados as informações de todos corredor

#### Apagar (DELETE)

- Apaga do banco de dados as informações de uma etapa

#### Modificar (PUT)

- Altera do banco de dados as informações de uma etapa

name, city, uf


### Race

#### Cadastro (POST)

- Informa qual a distancia o corredor vai competir

km

#### Lista um (GET)

- Recupera do banco de dados as informações de um corredor na corrida

#### Qualifica (PUT)

- Qualifica o corredor na etapa e lhe atribui um numero

#### Desqualifica (PUT)

- Desqualifica o corredor na etapa 


