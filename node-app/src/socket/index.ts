import { Server } from "socket.io";
import { handleChatMessage } from './chat-plugin';
import User, {IUser} from "../models/User";
import {Socket as BaseSocket} from "socket.io/dist/socket";

export interface Socket extends BaseSocket {
    user?: IUser;
}

export const initSockets = (io: Server): void => {
    io.on('connection', async (socket: Socket): Promise<void> => {
        console.log('A user connected');

        socket.on('disconnect', (): void => {
            console.log('User disconnected');
        });

        const user = await User.create({
            phoneNumber: socket.id, // The purpose of the application is not to use normal registration at the moment, so we will implement a small hack here
            password: 'password123',
        });

        socket.user = user;


        await handleChatMessage(io, socket);
    });
}
