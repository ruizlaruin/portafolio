import { createContext, useEffect, useState } from "react";

export const GlobalContext = createContext();

function GlobalContextProvider({children}) {

    const [cardId, setCardId] = useState(null);
    const [videos, setVideos] = useState([]); // Initialize as an empty array
  
    useEffect(() => {
      const getData = async () => {
        try {
          const res = await fetch("https://6691e53d26c2a69f6e90fa6b.mockapi.io/videos");
          const data = await res.json();
          setVideos(data);
        } catch (error) {
          console.error("Failed to fetch videos:", error);
        }
      };
      getData();
    }, [cardId]);
    
    return(
    <GlobalContext.Provider value={{cardId, setCardId, videos, setVideos}}>
        {children}
    </GlobalContext.Provider>
    )
}

export default GlobalContextProvider;