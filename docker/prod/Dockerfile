#####################################
###                               ###
###          NODE.JS              ###
###                               ###
#####################################
#Dockerfile описывает процесс сборки Docker-образа для развертывания приложения на Next.js.
FROM node:22.12.0-alpine AS builder

WORKDIR /var/www/prod

COPY --chown=1000:1000 . .

RUN npm install
RUN npm run build

FROM node:22.12.0-alpine AS runner

WORKDIR /var/www/prod

COPY --from=builder --chown=1000:1000 /var/www/prod/.next ./.next
COPY --from=builder /var/www/prod/node_modules ./node_modules
COPY --from=builder /var/www/prod/package.json ./package.json
COPY --from=builder /var/www/prod/next.config.js ./next.config.js
COPY --from=builder /var/www/prod/public ./public
COPY --from=builder /var/www/prod/.env ./.env

ENV PORT 3000
EXPOSE 3000

CMD ["npm", "start"]