import {
  ImageList,
  ImageListItem,
  Popover,
  Button,
  TextField,
} from "@mui/material";

import axios from "axios";
import {useState} from "react"

function Upload({setCharacter, setCharactersJSON, charactersJSON, characters}) {

    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);

    async function handleFileChange(e) {
        if (e.target.files) {

            const selectedFile = e.target.files[0];

            setFile(selectedFile);

            const formData = new FormData();
            formData.append("file", file);

            try {
                await axios.post("http://localhost:8000/stickers", formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                })

                let stickers = await axios.get("http://localhost:8000/stickers");
                const shiftedStickers = stickers.data.map(item => ({
                    ...item,
                    id: `${item.id + 413}`
                }));

                console.log(shiftedStickers);

                setCharactersJSON(characters.concat(shiftedStickers));

                setError(null);
                console.log("success");

            } catch (err) {
                setError("Upload Failed");
                console.error(err);
            }
        }
    } 

    return (
        <>
            <div>
                <Button
                    variant="contained"
                    color="secondary"
                    component="label"
                >
                    Upload Image
                    <input type="file" hidden onChange = {handleFileChange}/>
                </Button>
                
            </div>
        </>
    )
}

export default Upload;