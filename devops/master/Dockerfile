FROM adpopescu3382/devops-playground:node-app-master-base

WORKDIR /app

COPY package*.json ./

RUN npm ci --only=production

COPY . .

CMD ["npm", "start"]