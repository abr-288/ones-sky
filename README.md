# ONESKY Project

## Prérequis
- Node.js (recommandé 18+)
- PostgreSQL (port `5432`)
- npm

## 1) Backend (Express + Prisma)

### A. Configurer l'environnement
1. Aller dans `backend/`
2. Vérifier/adapter `backend/.env`

Variables utilisées côté backend :
- `DATABASE_URL` : URL de connexion PostgreSQL (utilisée par Prisma via `env("DATABASE_URL")`)
- `JWT_SECRET` : secret JWT pour l'accès admin/portail
- `REFRESH_TOKEN_SECRET` : secret JWT refresh (optionnel, fallback si absent)
- `PORT` : port du backend (optionnel, default `5000`)
- `NODE_ENV` : `production` ou `development` (optionnel, default dev)
- `CORS_ORIGINS` : liste d'origines autorisées en dev (optionnel, ex: `http://localhost:5173,http://localhost:5174`)

Variables pour l'envoi d'emails (admin / notifications) :
- `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`, `SMTP_FROM` (optionnels)

Exemple de `backend/.env` :
```env
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/onesky_db?schema=public"
JWT_SECRET="onesky-super-secret-key"
REFRESH_TOKEN_SECRET="refresh-secret"
PORT=5000

# Dev: autoriser le frontend sur plusieurs ports
CORS_ORIGINS="http://localhost:5173,http://localhost:5174"

# Emails (SMTP) - optionnel si tu n'as pas encore de config mail
SMTP_HOST="smtp.example.com"
SMTP_PORT=587
SMTP_USER="user"
SMTP_PASS="pass"
SMTP_FROM="noreply@onesky.space"
```

### B. Installer les dépendances
```powershell
cd backend
npm install
```

### C. Créer la base (migrations)
```powershell
npx prisma migrate dev --name init
```

### D. Lancer les seed data (données “primaires”)
Les seeds créent l’admin + initialisent le contenu (pages/sections/produits).

1. Seed Admin
```powershell
node src/scripts/seedAdmin.js
```

2. Seed Contenu (pages/sections/produits)
```powershell
node src/scripts/seedContent.js
```

Important :
- `seedContent.js` fait un `deleteMany` sur `Section` avant de (re)créer le contenu. À utiliser avec attention si tu as déjà des modifications en base.

### E. Démarrer le backend
```powershell
npm run dev
```
Le backend écoute sur `http://localhost:5000`.

## Identifiants admin (issus des seeds)
- Email : `admin@onesky.com`
- Mot de passe : `Admin@2026!`

## 2) Frontend (React + Vite)

### A. Installer les dépendances
```powershell
cd onesky
npm install
```

### B. Démarrer le frontend
```powershell
npm run dev
```
Le frontend écoute sur `http://localhost:5173` (ou un port adjacent si 5173 est déjà utilisé).

## 3) Démarrage complet
1. Lancer PostgreSQL
2. `backend`: `npm run dev`
3. `onesky`: `npm run dev`
4. Ouvrir le navigateur sur l’URL du frontend

## Remarque CORS (dev)
Le frontend communique avec `http://localhost:5000`. Si le port frontend change (5174, etc.), le backend gère les origines `localhost:*` en mode dev pour éviter les blocages CORS.

