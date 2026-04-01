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

  // This matches the --outDir ../dist/public we set in package.json
  const staticPath = path.resolve(__dirname, "public");

  // Log for Vercel debugging
  console.log("Checking for index.html at:", path.join(staticPath, "index.html"));

  app.use(express.static(staticPath));

  app.get("*", (_req, res) => {
    const indexPath = path.join(staticPath, "index.html");
    
    if (fs.existsSync(indexPath)) {
      res.sendFile(indexPath);
    } else {
      // This will help us debug if it fails again
      res.status(404).send(`Server is UP, but it can't find index.html at: ${indexPath}`);
    }
  });

  const port = process.env.PORT || 3000;
  server.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
}

startServer().catch(console.error);