import express from 'express';


const server = express();

server.get('/', (req, res) => {
  res.send('Hello World!');
});

server.listen(6000, () => {
  console.log('Server is running on port 6000');
});