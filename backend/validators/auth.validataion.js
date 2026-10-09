const { z } = require("zod");

const registerSchema = z.object({
    username: z.string()
        .trim()
        .min(3, "Username must be at least 3 characters"),

    email: z.string()
        .trim()
        .email("Enter a valid email"),

    password: z.string()
        .min(8, "Password must be at least 8 characters"),
});

const loginSchema = z.object({
    username: z.string().trim().optional(),
    email: z.string().trim().email().optional(),
    password: z.string().min(1, "Password is required"),
}).refine(
    (data) => Boolean(data.username || data.email),
    { message: "Username or email is required" }
);

module.exports = { registerSchema, loginSchema };