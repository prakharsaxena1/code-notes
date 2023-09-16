// eslint-disable-next-line import/extensions
import app from '../app.js';

const PORT = process.env.PORT || 8000;

// LISTENING TO PORT
app.listen(PORT, () => {
  console.log(`listening to port: http://localhost:${PORT}/`);
});

export default app;
