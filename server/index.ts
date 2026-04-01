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

  // Vercel puts the server and the 'public' folder inside 'dist'
  // This looks for 'public' in the same folder as this running script
  const staticPath = path.resolve(__dirname, "public");

  // Log the path to Vercel's internal logs so we can debug if it fails
  console.log("Serving static files from:", staticPath);

  app.use(express.static(staticPath));

  app.get("*", (_req, res) => {
    const indexPath = path.join(staticPath, "index.html");
    
    if (fs.existsSync(indexPath)) {
      res.sendFile(indexPath);
    } else {
      res.status(404).send("Frontend assets missing. Ensure 'vite build' ran correctly.");
    }
  });

  const port = process.env.PORT || 3000;
  server.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
}

startServer().catch(console.error);