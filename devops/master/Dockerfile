FROM adpopescu3382/devops-playground:node-app-master-base

WORKDIR /app

COPY package.json .
COPY yarn.lock .

RUN yarn install --production=true --frozen-lockfilech

COPY . .

CMD ["npm", "start"]