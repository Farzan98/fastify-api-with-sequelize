const fastify = require("fastify")({ logger: true });
const PORT = 8081;
const db = require("./config/db");

fastify.register(require("./routes/items"));

const start = async () => {
  try {
    await db
      .authenticate()
      .then(() => {
        console.log(`Database connected.`);
      })
      .catch((error) => {
        console.log(`Database connection failed.`);
      });
    await fastify.listen({ port: PORT });
    console.log(`Server started at ${PORT}`);
  } catch (error) {
    fastify.log.error(error);
    process.exit(1);
  }
};

start();
