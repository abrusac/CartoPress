const express = require("express");
const { generatePoster } = require("./generatePoster");
const app = express();
const PORT = 3001;

app.use(express.json());

app.post("/generate", async (req, res) => {
  const { url } = req.body;
  const outputPath = "./poster.png";

  try {
    await generatePoster(url, outputPath);
    res.download(outputPath);
  } catch (err) {
    res.status(500).send("Greška pri generiranju");
  }
});

app.listen(PORT, () =>
  console.log(`Server pokrenut na http://localhost:${PORT}`)
);
