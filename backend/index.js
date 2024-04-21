import express from "express";

import jsonData from "./ShopsData.json" with { type: "json" };
import productsData from "./productData.json" with {type:"json"};


import cors from "cors";
import "dotenv/config";

const app = express();

app.use(cors());
app.use(express.json());

// this is where the shops are served
app.get("/", (req, res) => {
  res.json(jsonData);
});

//this is where products are serverd
app.get('/shops/:shopid', (req, res) => {
  const id = parseInt(req.params.shopid);
  const results = productsData.filter(item => item.shopid === id);
  if (results.length > 0) {
    res.json(results);
  } else {
    res.status(404).json({ error: 'Not found' });
  }
});

app.get('/products/:id', (req, res) => {
  const id = (req.params.id);
  const result = productsData.find(item => item.id === id);
  if (result) {
    res.json(result);
  } else {
    res.status(404).json({ error: 'Not found' });
  }
});

app.listen(process.env.PORT || 8000, () => {
  console.log(`listning on port ${process.env.PORT}`);
});
