FROM node:20-alpine

WORKDIR /app

COPY . .

RUN npm install --legacy-peer-deps

RUN npm run build

EXPOSE 1337

CMD ["npm", "start"]
