import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
	server: {
		NODE_ENV: z
			.enum(["development", "test", "production"])
			.default("development"),
		TZ: z.string().min(1).default("UTC"),

		DB_PASSWORD: z.string().min(1),
		DB_USER: z.string().min(1),
		DB_NAME: z.string().min(1),
		DB_HOST: z.string().min(1),
		REDIS_URL: z.string().min(1),
		REDIS_TOKEN: z.string().min(1),
		DISCORD_CLIENT_ID: z.string().min(1),
		DISCORD_CLIENT_SECRET: z.string().min(1),
		OAUTH_REDIRECT_URL_BASE: z.url(),
		GITHUB_CLIENT_ID: z.string().min(1),
		GITHUB_CLIENT_SECRET: z.string().min(1),
	},
	client: { NEXT_PUBLIC_PUBLISHABLE_KEY: z.string().min(1) },

	// For Next.js >= 13.4.4, you only need to destructure client variables:
	experimental__runtimeEnv: {
		NEXT_PUBLIC_PUBLISHABLE_KEY: process.env.NEXT_PUBLIC_PUBLISHABLE_KEY,
	},
	emptyStringAsUndefined: true,
	// Called when the schema validation fails.
	onValidationError: (issues) => {
		console.error(`❌ Invalid environment variables:`, issues);
		throw new Error("Invalid environment variables");
	},
	// Called when server variables are accessed on the client.
	onInvalidAccess: (variable) => {
		throw new Error(
			`❌ Attempted to access a server-side environment variable: ${variable} on the client`,
		);
	},
});
