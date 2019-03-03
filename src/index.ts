import 'dotenv/config';
import createServer from './createServer';

const server = createServer();

server.start(
  {
    cors: {
      credentials: true,
      origin: process.env.FRONTEND_URL
    }
  },
  (deets) => {
    console.log(`Server running on http://localhost:${deets.port}`);
  }
);
