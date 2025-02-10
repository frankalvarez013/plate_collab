import { Hocuspocus } from '@hocuspocus/server';

const server = new Hocuspocus({
  port: 1234,
  async prisma.document.upsert({
    
  })
});

server.listen();

console.log('Hocuspocus WebSocket server is running on port 1234');
