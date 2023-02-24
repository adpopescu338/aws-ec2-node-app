ARG BASE_IMAGE
FROM BASE_IMAGE

WORKDIR /app

COPY package.json .
COPY yarn.lock .

RUN yarn install --production=true --frozen-lockfilech

COPY . .

CMD ["npm", "start"]