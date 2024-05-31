module.exports = {
  apps : [
    {
      name: "api-gateway",
      script: "cd ../../api-gateway && npm run start:dev",
    },
    {
      name: "auth",
      script: "cd ../../auth && npx prisma migrate deploy && npm run start:dev",
    },
    {
      name: "community",
      script: "cd ../../community && npx prisma migrate deploy && npm run start:dev",
    },
    {
      name: "history",
      script: "cd ../../history && npm run start:dev",
    },
    {
      name: "library",
      script: "cd ../../library && npx prisma migrate deploy && npm run start:dev",
    },
    {
      name: "search",
      script: "cd ../../search && npm run start:dev",
    },
    {
      name: "storage",
      script: "cd ../../storage && npx prisma migrate deploy && npm run start:dev",
    },
    {
      name: "subscriptions",
      script: "cd ../../subscriptions && npx prisma migrate deploy && npm run start:dev",
    },
    {
      name: "users",
      script: "cd ../../users && npx prisma migrate deploy && npm run start:dev",
    },
    {
      name: "video-manager",
      script: "cd ../../video-manager && npx prisma migrate deploy && npm run start:dev",
    },
    {
      name: "video-processor",
      script: "cd ../../video-processor && npx prisma migrate deploy && npm run start:dev",
    },
    {
      name: "video-store",
      script: "cd ../../video-store && npx prisma migrate deploy && npm run start:dev",
    },
    {
      name: "web-status",
      script: "cd ../../web-status && npm run start:dev",
    }
  ]
}
