import express from "express";
import { createServer } from "http";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs"; // Added to check if paths exist

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const server = createServer(app);

  // 1. Try the production path first (dist/public)
  let staticPath = path.resolve(__dirname, "public");

  // 2. Fallback for local development if the first path fails
  if (!fs.existsSync(staticPath)) {
    staticPath = path.resolve(__dirname, "..", "dist", "public");
  }

  app.use(express.static(staticPath));

  app.get("*", (_req, res) => {
    const indexPath = path.join(staticPath, "index.html");
    
    // Safety check: if index.html is missing, send a clear error
    if (fs.existsSync(indexPath)) {
      res.sendFile(indexPath);
    } else {
      res.status(404).send("Frontend build not found. Check your dist/public folder.");
    }
  });

  const port = process.env.PORT || 3000;
  server.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
}

startServer().catch(console.error);