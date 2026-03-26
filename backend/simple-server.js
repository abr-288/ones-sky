const express = require('express');
const cors = require('cors');
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes de base
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

app.get('/api/settings', (req, res) => {
  res.json({
    siteName: "ONESKY",
    footerText: `© ${new Date().getFullYear()} ONESKY Tous droits réservés.`,
    footerDescription: "Leader mondial de l'intelligence géospatiale.",
    socialLinks: []
  });
});

app.get('/', (req, res) => {
  res.json({ message: "API ONESKY simplifiée" });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`🚀 Serveur simplifié démarré sur port ${PORT}`);
});
