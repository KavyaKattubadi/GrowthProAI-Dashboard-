const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

const headlines = [
  "Why Cake & Co is Mumbai's Sweetest Spot in 2025",
  "Discover the Best Bites at Cake & Co, Mumbai",
  "Mumbai’s Top Choice: Cake & Co’s Irresistible Flavors",
  "Your New Favorite Bakery in Mumbai: Cake & Co",
  "Taste the Future: Cake & Co’s Modern Twist on Classics"
];

app.post('/business-data', (req, res) => {
  const { name, location } = req.body;
  res.json({
    rating: 4.3,
    reviews: 127,
    headline: `Why ${name} is ${location}'s Sweetest Spot in 2025`
  });
});

app.get('/regenerate-headline', (req, res) => {
  const headline = headlines[Math.floor(Math.random() * headlines.length)];
  res.json({ headline });
});

app.listen(5000, () => {
  console.log('Backend running on http://localhost:5000');
});
