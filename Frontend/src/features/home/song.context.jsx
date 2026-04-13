import { createContext } from "react";
import { useState } from "react";

export const SongContext = createContext()


export const SongContextProvider = ({ children }) => {
    const [song, setSong] = useState({
  "url": "https://ik.imagekit.io/nruucogyj/cohort/modify/songs/Rajke__From__Kisko_Tha_Pata___pnlTugLrD.mp3",
  "posterUrl": "https://ik.imagekit.io/nruucogyj/cohort/modify/poster/Rajke__From__Kisko_Tha_Pata___NhQyGr6wd.jpeg",
  "title": "Rajke (From \"Kisko Tha Pata\")",
  "mood": "happy",
  "__v": 0


    })

    const [loading, setLoading] = useState(false)

    return (
        <SongContext.Provider
        value={{loading, setLoading, song, setSong}}
        >
        {children}

        </SongContext.Provider>
    )
}