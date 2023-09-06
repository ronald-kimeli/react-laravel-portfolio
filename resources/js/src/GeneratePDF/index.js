const express = require('express');
const puppeteer = require('puppeteer');
const cors = require("cors");

const app = express();
const port = 3000;

app.use(express.json(),cors());

app.post('/generate-pdf', async (req, res) => {
    const htmlContent = req.body.html;
  
    const browser = await puppeteer.launch({ headless: 'new' }); 
    const page = await browser.newPage();
    await page.setContent(htmlContent);
  
    const pdfBuffer = await page.pdf({ format: 'A4' });
  
    await browser.close();
  
    res.set({
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'attachment; filename="generated.pdf"',
    });
  
    res.send(pdfBuffer);
  });
  
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });