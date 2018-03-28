FROM node:8.10.0 AS build

RUN mkdir /rascal-north
ADD ./ /rascal-north
WORKDIR /rascal-north

RUN npm install
RUN npm run generate


FROM node:8.10.0

COPY --from=build /rascal-north/dist /rascal-north/
COPY --from=build /rascal-north/server.js /rascal-north/
WORKDIR /rascal-north
RUN npm install express

ENTRYPOINT ["node", "server.js"]
