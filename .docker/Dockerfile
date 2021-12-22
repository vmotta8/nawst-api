FROM node:14 as builder

ENV TZ=America/Sao_Paulo

WORKDIR /app

COPY ./package.json ./yarn.lock /app

RUN yarn cache clean && yarn install

COPY ./tsconfig.json ./tsconfig.build.json /app

COPY ./src /app

RUN yarn build



FROM node:14

WORKDIR /app

COPY --from=builder /app/package.json /app/yarn.lock /app

RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone && yarn cache clean && yarn install

COPY --from=builder /app/dist /app/dist

EXPOSE 3000

CMD ["node","dist/main.js"]
