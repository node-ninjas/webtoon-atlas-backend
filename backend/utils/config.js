import dotenv from 'dotenv';

dotenv.config();

export const sessionSecret = () => {
	return String(process.env.SESSION_SECRET);
};
