FROM node:20-alpine AS builder

WORKDIR /app
COPY package.json package-lock.json ./
COPY . .
RUN npx prisma generate

FROM node:20-alpine AS production
WORKDIR /app

COPY --from=builder /app/ ./

RUN apk add --no-cache netcat-openbsd
RUN chmod +x entrypoint.sh

ENTRYPOINT ["./entrypoint.sh"]
CMD ["npm", "run", "dev", "--", "--hostname", "0.0.0.0", "--port", "3000"]