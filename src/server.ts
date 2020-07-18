import app from './app';
import { PORT } from './configs';

// Starting the server
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
