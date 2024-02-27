import { z } from 'zod';

const schema = z.object({
	SERVER_PORT: z.string()
});

export const env = schema.parse(process.env);
