# Menggunakan Node.js versi 22.11-bullseye-slim sebagai base image
FROM node:22.11-bullseye-slim

# Menetapkan direktori kerja di dalam container
WORKDIR /app

# Menyalin package.json dan package-lock.json untuk menginstall dependensi
COPY package*.json ./

# Install dependensi
RUN npm install

# Menyalin seluruh kode aplikasi ke dalam container
COPY . .

# Menetapkan direktori kerja ke folder /src untuk menjalankan aplikasi
WORKDIR /app/src

# Mengekspos port yang digunakan aplikasi
EXPOSE 3001

# Menjalankan aplikasi dengan file index.js yang ada di /src
CMD ["node", "index.js"]
