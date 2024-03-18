import dotenv from 'dotenv';
import * as tools from './tools.js'
import * as config from './config.js';

dotenv.config();

export const sessionSecret = () => {
	return String(process.env.SESSION_SECRET);
};
