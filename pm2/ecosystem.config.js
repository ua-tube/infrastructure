module.exports = {
  apps : [
    {
      name: "api-gateway",
      script: "cd ../../api-gateway && npm i && npm run start:dev",
    },
    {
      name: "auth",
      script: "cd ../../auth && npm i && npx prisma generate && npx prisma migrate deploy && npm run start:dev",
    },
    {
      name: "community",
      script: "cd ../../community && npm i && npx prisma generate && npx prisma migrate deploy && npm run start:dev",
    },
    {
      name: "history",
      script: "cd ../../history && npm i && npm run start:dev",
    },
    {
      name: "library",
      script: "cd ../../library && npm i && npx prisma generate && npx prisma migrate deploy && npm run start:dev",
    },
    {
      name: "search",
      script: "cd ../../search && npm i && npm run start:dev",
    },
    {
      name: "storage",
      script: "cd ../../storage && npm i && npx prisma generate && npx prisma migrate deploy && npm run start:dev",
    },
    {
      name: "subscriptions",
      script: "cd ../../subscriptions && npm i && npx prisma generate && npx prisma migrate deploy && npm run start:dev",
    },
    {
      name: "users",
      script: "cd ../../users && npm i && npx prisma generate && npx prisma migrate deploy && npm run start:dev",
    },
    {
      name: "video-manager",
      script: "cd ../../video-manager && npm i && npx prisma generate && npx prisma migrate deploy && npm run start:dev",
    },
    {
      name: "video-processor",
      script: "cd ../../video-processor && npm i && npx prisma generate && npx prisma migrate deploy && npm run start:dev",
    },
    {
      name: "video-store",
      script: "cd ../../video-store && npm i && npx prisma generate && npx prisma migrate deploy && npm run start:dev",
    },
    {
      name: "web-status",
      script: "cd ../../web-status && npm i && npm run start:dev",
    }
  ]
}
