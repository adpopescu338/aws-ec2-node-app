ARG BASE_IMAGE
FROM $BASE_IMAGE

WORKDIR /app

COPY package.json .
COPY yarn.lock .

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

ARG PORT=3000
ENV PORT=${PORT}

# Only install dev dependencies if NODE_ENV is not set to production
RUN if [ "$NODE_ENV" != "production" ]; then yarn install --frozen-lockfile; else yarn install --production=true --frozen-lockfile; fi

COPY . .

CMD ["npm", "start"]