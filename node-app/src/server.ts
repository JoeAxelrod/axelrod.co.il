import express, { Express } from 'express';
import authRoutes from './routes/auth';
import { Server } from 'socket.io';
import { createServer, Server as HTTPServer } from 'http';
import routes from './routes/index';
import { initSockets } from './socket';
import dotenv from 'dotenv';
import { connectDB } from './database';

dotenv.config();

export const app: Express = express();

export const httpServer: HTTPServer = createServer(app);

export const io: Server = new Server(httpServer, {
    cors: {
        origin: process.env.ACCESS_CONTROL_ALLOW_ORIGIN
    }
});

// Connect to MongoDB
connectDB();

// Initialize sockets
initSockets(io);

// Use express routes
app.use('/', routes);
app.use('/auth', authRoutes);

const PORT: string | undefined = process.env.PORT;

httpServer.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
