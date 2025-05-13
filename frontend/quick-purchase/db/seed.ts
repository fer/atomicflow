import { db } from "./index";
import * as schema from "@shared/schema";
import { eq } from "drizzle-orm";

async function seed() {
  try {
    console.log("Seeding database...");

    // Check if user exists
    const existingUser = await db.query.users.findFirst({
      where: eq(schema.users.username, "mabel")
    });

    // Create test user if not exists
    if (!existingUser) {
      console.log("Creating test user...");
      await db.insert(schema.users).values({
        username: "mabel",
        password: "password123",
        nickname: "mabel"
      });
    }

    // Check if products exist
    const existingProducts = await db.query.products.findMany();

    // Create test products if none exist
    if (existingProducts.length === 0) {
      console.log("Creating test products...");
      await db.insert(schema.products).values({
        product_id: "tag_1",
        name: "Producto 1",
        price: "20",
        image_url: "https://picsum.photos/id/3/200",
        active: true
      });
      
      await db.insert(schema.products).values({
        product_id: "tag_2",
        name: "Producto 2",
        price: "35",
        image_url: "https://picsum.photos/id/306/200",
        active: true
      });
      
      await db.insert(schema.products).values({
        product_id: "tag_3",
        name: "Producto 3",
        price: "50",
        image_url: "https://picsum.photos/id/0/200",
        active: true
      });
    }

    console.log("Database seeding completed!");
  } catch (error) {
    console.error("Error seeding database:", error);
  }
}

seed();
