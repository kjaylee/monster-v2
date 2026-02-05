FROM node:22-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --omit=dev
COPY .next ./.next
COPY public ./public
EXPOSE 3000
CMD ["npx", "next", "start"]
