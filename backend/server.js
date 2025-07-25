const express = require("express");
const app = express();

const pool = require("./db.js");
const dotenv = require("dotenv")
const cors = require("cors")
const fs = require("fs").promises

const multer = require("multer")

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
})

const upload = multer({ storage: storage })

dotenv.config();

app.use(express.json());
app.use(cors());
app.use("/uploads", express.static('uploads'))

app.get("/", (req, res) => {
    res.json({msg: "Sticker upload backend"})
});

app.get("/stickers", async (req, res) => {
    try{
        stickers = await pool.query("SELECT * FROM stickers")
        res.json(stickers.rows)
    } catch (err) {
        res.json(err)
    }
});

app.get("/stickers/:id", async (req, res) => {
    try {
        sticker = await pool.query("SELECT * FROM stickers WHERE id = $1", [req.params.id])
        res.json(sticker.rows)
    } catch (err) {
        res.json(err)
    }
    
});

app.post("/stickers", upload.single("file"), async (req, res) => {

    try {
        let fileName = req.file.originalname
        let name = fileName.slice(0, fileName.lastIndexOf("."))
        let img = `http://localhost:8000/uploads/${fileName}`

        let sticker = await pool.query(
            'INSERT INTO stickers (name, character, img, color, "defaultText") VALUES ($1, $2, $3, $4, $5) RETURNING *;', 
            [
                name,
                name,
                img, 
                '#F09A04', 
                JSON.stringify({
                    "text": "something",
                    "x": 148,
                    "y": 58,
                    "r": -2,
                    "s": 47
                })
            ]
        )

        res.json(sticker.rows)

    } catch (err) {
        res.json(err)
    }
});

app.delete("/stickers", async (req, res) => {
    try{
        await pool.query("DELETE FROM stickers;")
        await fs.rm("uploads", {recursive: true, force: true})
        await fs.mkdir("uploads")

        res.json({msg: "Stickers deleted"})

    } catch (err) {
        res.json(err)
    }
});

app.delete("/stickers/:id", async (req, res) => {
    try{
        let sticker = await pool.query("SELECT * FROM stickers WHERE id = $1", [req.params.id])
        if (sticker.rows.length === 0) {
            return res.status(404).json({ error: "Sticker not found" });
        }

        let imgPath = sticker.rows[0].img
        let fileName = imgPath.slice(imgPath.lastIndexOf("/"))

        await fs.unlink(`uploads${fileName}`).catch(err => {
            if (err.code !== 'ENOENT') throw err; // Ignore "not found"
        });

        await pool.query("DELETE FROM stickers WHERE id = $1;", [req.params.id])

        res.json({msg: "Sticker deleted"})

    } catch (err) {
        res.json(err)
    }
});

port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`)
});