import express from 'express';


export function setupServer() {
  const app = express();
  const PORT = process.env.PORT || 3000;

  app.get('/', (req, res) => {
    res.json({
      message: 'Hello world!',
    });
  });

  app.use('*', (req, res, next) => {
    res.status(404).json({
        message: 'Not found',
    });
    next();
});

  app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
  });

}



