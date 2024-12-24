import Fastify from 'fastify';
import dotenv from 'dotenv';

dotenv.config();

const server = Fastify({
  logger: true,
});

const start = async () => {
  try {
    await server.get('/', async (request, reply) => {
      return 'hello world';
    });
    await server.listen({
      port: 3000,
    });
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
};

start();
