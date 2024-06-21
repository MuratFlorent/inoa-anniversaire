# Utilisez une image légère de Node.js comme base
FROM node:14-alpine

# Répertoire de travail
WORKDIR /app

# Copier les fichiers nécessaires
COPY index.html .
COPY styles.css .
COPY script.js .
COPY inoa.jpg .

# Exposer le port sur lequel le serveur web écoutera
EXPOSE 80

# Commande pour démarrer le serveur web
CMD ["npx", "http-server", "-p", "80"]
