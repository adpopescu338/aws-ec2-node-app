FROM adpopescu3382/devops-playground:node-app-master-base

WORKDIR /app

COPY package*.json ./

RUN yarn install --production=true --frozen-lockfilech

COPY . .

CMD ["npm", "start"]