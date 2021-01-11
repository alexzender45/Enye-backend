import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { currencyRoute } from './routes';

//
// Initialize DB

// Configs
const app = express();

// Middleware
app.enable('trust proxy');
app.use(cors());
app.use(helmet());
app.use(express.json({ limit: '10kb' }));

// Endpoints
app.use('/api/rates', currencyRoute);

export default app;
