import express from "express";
import { createServer } from "http";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const server = createServer(app);

  // We check for 'public' first, then 'client' as a backup
  let staticPath = path.resolve(__dirname, "public");
  
  if (!fs.existsSync(path.join(staticPath, "index.html"))) {
    staticPath = path.resolve(__dirname, "client");
  }

  // Final fallback for local development structure
  if (!fs.existsSync(path.join(staticPath, "index.html"))) {
    staticPath = path.resolve(__dirname, "..", "dist", "public");
  }

  app.use(express.static(staticPath));

  app.get("*", (_req, res) => {
    const indexPath = path.join(staticPath, "index.html");
    
    if (fs.existsSync(indexPath)) {
      res.sendFile(indexPath);
    } else {
      res.status(404).send(`Server is running, but index.html was not found at: ${indexPath}`);
    }
  });

  const port = process.env.PORT || 3000;
  server.listen(port, () => {
    console.log(`Server successfully running on port ${port}`);
  });
}

startServer().catch(console.error);