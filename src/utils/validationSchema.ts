import { z } from "zod";

export const registerValidationSchema = z
  .object({
    name: z.string().min(1, 'Name is required'),
    email: z.string().email("Please enter a valid email"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z.string().min(6, "Password must be at least 6 characters"),
    bloodType: z.string().min(1, "Blood type is required"),
    location: z.string().min(1, "Location is required"),
    age: z.preprocess(
      (val) => Number(val),
      z.number().int().positive("Age must be a positive number")
    ),
    bio: z.string().optional(),
    donateblood: z.string().optional(),
    lastDonationDate: z.preprocess((arg) => {
      if (typeof arg === "string" || arg instanceof Date) {
        const date = new Date(arg);
        if (!isNaN(date.getTime())) {
          return date;
        }
      }
      return undefined; // Return undefined for invalid dates
    }, z.date().optional().refine((date) => date instanceof Date && !isNaN(date.getTime()), {
      message: "Invalid date",
    })),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });