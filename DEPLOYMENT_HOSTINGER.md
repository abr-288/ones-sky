# 🚀 Déploiement sur Hostinger (Sans VPS)

## 📋 Plan d'hébergement recommandé

### Option 1: Hébergement Web Premium (Frontend uniquement)
- **Frontend React** → Hébergement Web Premium (~€2.99/mois)
- **Backend** → Service externe (Railway, Render, etc.)

### Option 2: Hébergement Business (Complet)
- **Frontend + Backend** → Hébergement Business (~€4.99/mois)
- Support Node.js et base de données

---

## 🎯 Étape 1: Déployer le Frontend (React)

### 1. Build du projet
```bash
cd onesky
npm run build
```

### 2. Upload sur Hostinger
1. Connectez-vous à hPanel Hostinger
2. Allez dans "Gestionnaire de fichiers"
3. Uploadez le contenu du dossier `dist/` dans `public_html/`
4. Uploadez le fichier `.htaccess` à la racine de `public_html/`

### 3. Configuration du frontend
Le fichier `.htaccess` gère déjà :
- React Router (URL rewriting)
- Compression des fichiers
- Cache des assets
- Headers de sécurité

---

## 🎯 Étape 2: Déployer le Backend (Node.js)

### 1. Préparation des fichiers
```bash
cd backend
# Installer les dépendances
npm install --production
```

### 2. Configuration de la base de données
Dans hPanel Hostinger :
1. Allez dans "Bases de données MySQL"
2. Créez une nouvelle base de données
3. Notez les informations de connexion

### 3. Variables d'environnement
Créez un fichier `.env` dans le dossier backend :
```env
NODE_ENV=production
DATABASE_URL="mysql://username:password@host:3306/database_name"
JWT_SECRET="votre-cle-secrete-ici"
PORT=3000
```

### 4. Upload du backend
1. Uploadez tout le dossier `backend/` sur Hostinger
2. Uploadez le fichier `hostinger.js` et `.htaccess`
3. Configurez le démarrage automatique dans hPanel

---

## 🔧 Configuration API

### 1. URL de l'API
Dans le frontend, mettez à jour l'URL de l'API :
```javascript
// Dans onesky/src/lib/api.js ou similaire
const API_URL = 'https://votredomaine.com/api';
```

### 2. CORS
Le backend `hostinger.js` inclut déjà la configuration CORS pour accepter les requêtes de votre domaine.

---

## 📊 Tests de déploiement

### Vérifier le frontend
1. Allez sur `https://votredomaine.com`
2. Testez toutes les pages
3. Vérifiez la console pour les erreurs

### Vérifier le backend
1. Testez `https://votredomaine.com/api/health`
2. Testez la connexion à la base de données
3. Vérifiez les endpoints API

---

## 🛠️ Dépannage

### Problèmes courants

**Erreur 404 sur les routes React**
- Vérifiez que `.htaccess` est bien à la racine
- Assurez-vous que `mod_rewrite` est activé

**Backend ne démarre pas**
- Vérifiez les logs dans hPanel
- Confirmez que Node.js est supporté par votre plan
- Vérifiez les variables d'environnement

**Connexion base de données**
- Testez la connexion avec phpMyAdmin
- Vérifiez les permissions de l'utilisateur
- Confirmez que la base de données est bien créée

---

## 📝 Maintenance

### Mises à jour
1. Build du frontend : `npm run build`
2. Upload des nouveaux fichiers
3. Redémarrage du backend si nécessaire

### Sauvegardes
- Activez les sauvegardes automatiques dans hPanel
- Exportez régulièrement votre base de données

---

## 🎉 Déploiement terminé !

Une fois ces étapes suivies, votre application OneSky sera entièrement fonctionnelle sur Hostinger !

**URLs finales :**
- Frontend : `https://votredomaine.com`
- Backend API : `https://votredomaine.com/api`
- Health check : `https://votredomaine.com/api/health`
