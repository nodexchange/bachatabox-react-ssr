FROM mhart/alpine-node:8

# Create app directory
WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install
COPY . .
ARG NODE_ENV=production
ARG PORT=80
RUN npm run build
EXPOSE 80
EXPOSE 3000
EXPOSE 3001
EXPOSE 3002
EXPOSE 3003
CMD ["node", "server"]
