#!/bin/sh

# Wait for MySQL to be ready
until nc -z mysql 3306; do
  echo "Waiting for MySQL to be available..."
  sleep 1
done

echo "MySQL is up - executing command"
npx prisma generate
npx prisma db push

echo "Next.js is ready to start"

npm update --legacy-peer-deps

exec "$@"