import app from './app';
import { PORT } from './configs';

// Starting the server
app.listen(PORT || 3000, () => console.log(`Listening on port ${PORT}`));
