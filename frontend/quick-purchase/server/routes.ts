import type { Express } from "express";
import { createServer, type Server } from "http";

export async function registerRoutes(app: Express): Promise<Server> {
  // Since we're making direct API calls to the external endpoints,
  // we don't need to set up any proxy routes here.
  // The client is configured to directly call the external API.

  const httpServer = createServer(app);
  return httpServer;
}
