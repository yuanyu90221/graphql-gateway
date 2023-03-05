# graphql gateway

This repository is demo for use nestjs with apollo as graphql gateway

## initial

```shell
nest new gateway  # create first project gateway for handle http resposne
cd gateway
nest g app users  # create second app with name users
nest g app posts  # create third app with name posts
nest g resource users users # create resource for app users with name users
nest g resource posts posts
```

## install needed package

```shell
yarn add @apollo/gateway @apollo/subgraph @nestjs/apollo @nestjs/graphql apollo-server-express graphql
```