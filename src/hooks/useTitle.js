import { useEffect } from "react";

// to change the title at the top of the open page to each routes 
const useTitle = (title) => {
    useEffect(() => {
        const prevTitle = document.title
        document.title = title

        return () => document.title = prevTitle
    }, [title])
}

export default useTitle