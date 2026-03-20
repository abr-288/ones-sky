# OneSky Project

Une application web complète avec gestion de produits, système de devis, support client et administration.

## 🏗️ Architecture

- **Frontend**: React + Vite + TypeScript + TailwindCSS + Shadcn/ui
- **Backend**: Node.js + Express + Prisma + PostgreSQL
- **Déploiement**: Docker + GitHub Actions

## 🚀 Démarrage rapide

### Prérequis
- Node.js 18+
- PostgreSQL
- Docker (optionnel)

### Installation

1. **Cloner le dépôt**
```bash
git clone https://github.com/abr-288/onesky.git
cd onesky
```

2. **Backend**
```bash
cd backend
npm install
cp .env.example .env
# Configurer votre DATABASE_URL dans .env
npx prisma migrate dev
npx prisma generate
npm run dev
```

3. **Frontend**
```bash
cd onesky
npm install
npm run dev
```

### Avec Docker

```bash
# Frontend uniquement
cd onesky
docker build -t onesky-frontend .
docker run -p 3000:80 onesky-frontend

# Ou avec docker-compose
docker-compose up -d
```

## 📁 Structure du projet

```
onesky/
├── backend/              # API Node.js + Express
│   ├── src/
│   │   ├── controllers/  # Contrôleurs API
│   │   ├── routes/       # Routes Express
│   │   ├── services/     # Services métier
│   │   └── middlewares/  # Middlewares
│   ├── prisma/           # Schéma de base de données
│   └── scripts/          # Scripts de seed
├── onesky/               # Application React
│   ├── src/
│   │   ├── components/   # Composants React
│   │   ├── pages/        # Pages de l'application
│   │   └── lib/          # Utilitaires
└── .github/workflows/    # CI/CD GitHub Actions
```

## 🔧 Configuration

### Variables d'environnement

**Backend (.env)**
```env
DATABASE_URL="postgresql://user:password@localhost:5432/onesky"
JWT_SECRET="your-secret-key"
PORT=3001
```

**Frontend (.env)**
```env
VITE_API_URL="http://localhost:3001"
```

## 🚀 Déploiement

### GitHub Actions

Le projet utilise GitHub Actions pour le CI/CD :

- **Branch `develop`** → Déploiement en staging
- **Branch `main`** → Déploiement en production

### Manuel

1. **Build du frontend**
```bash
cd onesky
npm run build
```

2. **Lancement du backend**
```bash
cd backend
npm start
```

## 📊 Fonctionnalités

- 🏠 **Page d'accueil** personnalisable
- 📱 **Gestion des produits** avec fiches détaillées
- 💬 **Système de devis** et support client
- 👥 **Gestion des utilisateurs** avec rôles
- 🔐 **Authentification** sécurisée
- 📧 **Notifications par email**
- 📊 **Tableau de bord** administrateur

## 🛠️ Technologies

### Frontend
- React 18
- TypeScript
- Vite
- TailwindCSS
- Shadcn/ui
- React Router
- React Query

### Backend
- Node.js
- Express
- Prisma ORM
- PostgreSQL
- JWT
- bcryptjs

## 📝 API Documentation

L'API backend expose les endpoints suivants :

- `POST /api/auth/login` - Connexion
- `GET /api/products` - Liste des produits
- `POST /api/quotes` - Créer un devis
- `GET /api/admin/*` - Endpoints admin

## 🤝 Contribuer

1. Fork le projet
2. Créer une branche (`git checkout -b feature/nouvelle-fonctionnalite`)
3. Commit les changements (`git commit -am 'Ajout nouvelle fonctionnalité'`)
4. Push vers la branche (`git push origin feature/nouvelle-fonctionnalite`)
5. Ouvrir une Pull Request

## 📄 Licence

Ce projet est sous licence ISC.
