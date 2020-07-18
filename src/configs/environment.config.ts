import dotenv from 'dotenv';

// Load '.env' file content into 'process.env'
dotenv.config();

// Extract constants from the '.env' file
const { PORT } = process.env;

// Reveal the constants
export { PORT };
