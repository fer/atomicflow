import { pgTable, text, serial, integer, boolean, timestamp, decimal } from 'drizzle-orm/pg-core';
import { createInsertSchema } from 'drizzle-zod';
import { z } from 'zod';
import { relations } from 'drizzle-orm';

// Users table
export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  username: text('username').notNull().unique(),
  password: text('password').notNull(),
  nickname: text('nickname'),
});

// Products table
export const products = pgTable('products', {
  id: serial('id').primaryKey(),
  product_id: text('product_id').notNull().unique(),
  name: text('name').notNull(),
  price: decimal('price', { precision: 10, scale: 2 }).notNull(),
  image_url: text('image_url').notNull(),
  active: boolean('active').default(true).notNull(),
});

// Orders table
export const orders = pgTable('orders', {
  id: serial('id').primaryKey(),
  user_id: integer('user_id').references(() => users.id).notNull(),
  product_id: text('product_id').references(() => products.product_id).notNull(),
  quantity: integer('quantity').notNull(),
  total: decimal('total', { precision: 10, scale: 2 }).notNull(),
  payment_id: integer('payment_id').notNull(),
  payment_code: text('payment_code').notNull().unique(),
  timestamp: timestamp('timestamp').defaultNow().notNull(),
});

// Relations
export const usersRelations = relations(users, ({ many }) => ({
  orders: many(orders)
}));

export const productsRelations = relations(products, ({ many }) => ({
  orders: many(orders)
}));

export const ordersRelations = relations(orders, ({ one }) => ({
  user: one(users, { fields: [orders.user_id], references: [users.id] }),
  product: one(products, { fields: [orders.product_id], references: [products.product_id] })
}));

// Schemas
export const insertUserSchema = createInsertSchema(users);
export const insertProductSchema = createInsertSchema(products);
export const insertOrderSchema = createInsertSchema(orders);

export type InsertUser = z.infer<typeof insertUserSchema>;
export type InsertProduct = z.infer<typeof insertProductSchema>;
export type InsertOrder = z.infer<typeof insertOrderSchema>;

export type User = typeof users.$inferSelect;
export type Product = typeof products.$inferSelect;
export type Order = typeof orders.$inferSelect;
