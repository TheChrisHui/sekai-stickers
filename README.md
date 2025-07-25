# Project Sekai Stickers (Fork)

**This is a fork of Project Sekai Stickers(https://github.com/TheOriginalAyaka/sekai-stickers).** with modifications.
## Key Modifications
- Added Backend Photo Upload Feature
- Extended frontend with upload UI components

---

# Project Sekai Stickers

**Full-stack application with ReactJS + Express.js (Node) + PostgreSQL.**

## Quick Start

### 1. Frontend Setup
```bash
cd frontend
npm install
npm start  # Runs frontend (e.g., React/Vue)
```

### 2. Backend Setup
```bash
cd backend
npm install
npm run dev  # Starts Express server with Nodemon
```

### 3. Database Setup (PostgreSQL)
1. Ensure PostgreSQL is installed and running locally.
2. Create a database (replace `your_db_name`):
   ```bash
   psql -U postgres -c "CREATE DATABASE your_db_name;"
   ```
3. Import your `.sql` file to create tables:
   ```bash
   psql -U postgres -d your_db_name -f path/to/your/file.sql
   ```

---

##  Configuration

### Environment Variables (`backend/.env`)
Create a `.env` file in the `backend` directory with:
```env
DB_USER=postgres
DB_PASSWORD=your_password
DB_HOST=localhost
DB_PORT=5432
DB_NAME=your_db_name
```

*(Replace values with your actual credentials!)*

---
# Original README
Note: This app is no longer maintained as I'm working on an upcoming app. Stay tuned for updates!
---

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]

<br />
<p align="center">
  <a href="https://github.com/TheOriginalAyaka/sekai-stickers">
    <img src="https://cdn.discordapp.com/attachments/1045298870533509130/1069241800285499402/Emu_13_st.ayaka.one.png" alt="CSD Bot" width="200" height="200">
  </a>

  <h2 align="center"><b>Project Sekai Stickers</b></h2>

  <p align="center">Help is welcome, got some skill issues so dont judge me
      <img src="https://cdn.discordapp.com/emojis/999338712255180921.webp?size=28&quality=lossless">
    <br />
    <br />
    <a href="https://github.com/TheOriginalAyaka/sekai-stickers/issues">Report Bug</a>
    ·
    <a href="https://github.com/TheOriginalAyaka/sekai-stickers/issues">Request Feature</a>
  </p>
</p>

<!-- ABOUT THE PROJECT -->

## 🤖》Discord Bot

### Sekai Stickers is also a discord bot, you can invite it [here](http://link.ayaka.one/stbot)

## <img src="https://cdn.discordapp.com/emojis/859424401186095114.png" width="20px" height="20px"> 》Description

[![Readme Card](https://git-stats.ayaka.one/api/pin/?username=TheOriginalAyaka&repo=sekai-stickers&theme=tokyonight&show_owner=true&hide_border=true)](https://github.com/TheOriginalAyaka/sekai-stickers)

## <img src="https://cdn.discordapp.com/emojis/852881450667081728.gif" width="20px" height="20px"> 》Feature

- [x] Wonderhoy!
- [x] Download/Copy stickers
- [x] Global stickers made counter
- [ ] Social share button

## ✨》Credits

- Original stickers from [Reddit](https://www.reddit.com/r/ProjectSekai/comments/x1h4v1/after_an_ungodly_amount_of_time_i_finally_made/)

- Cropped images by [Modder4869](https://github.com/Modder4869)

- Website by [TheOriginalAyaka](https://github.com/TheOriginalAyaka)

## <img src="https://cdn.discordapp.com/emojis/1028680849195020308.png" width="25px" height="25px"> 》Screenshots

<br />
<p align="center">
  <img src="https://raw.githubusercontent.com/TheOriginalAyaka/sekai-stickers/main/public/screenshot.jpg">
</p>

## 🔐 》License

Distributed under the MIT License. See [`LICENSE`](https://github.com/TheOriginalAyaka/sekai-stickers/blob/main/LICENCE) for more information.

[contributors-shield]: https://img.shields.io/github/contributors/TheOriginalAyaka/sekai-stickers.svg?style=for-the-badge
[contributors-url]: https://github.com/TheOriginalAyaka/sekai-stickers/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/TheOriginalAyaka/sekai-stickers.svg?style=for-the-badge
[forks-url]: https://github.com/TheOriginalAyaka/sekai-stickers/network/members
[stars-shield]: https://img.shields.io/github/stars/TheOriginalAyaka/sekai-stickers.svg?style=for-the-badge
[stars-url]: https://github.com/TheOriginalAyaka/sekai-stickers/stargazers
[issues-shield]: https://img.shields.io/github/issues/TheOriginalAyaka/sekai-stickers.svg?style=for-the-badge
[issues-url]: https://github.com/TheOriginalAyaka/sekai-stickers/issues
[license-shield]: https://img.shields.io/github/license/TheOriginalAyaka/sekai-stickers.svg?style=for-the-badge
[license-url]: https://github.com/TheOriginalAyaka/sekai-stickers/blob/master/LICENSE
