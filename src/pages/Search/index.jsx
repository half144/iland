import { useEffect } from "react"
import { useState } from "react"
import { useSearchParams } from "react-router-dom"



const Search = () => {
    const [params] = useSearchParams()
    const [query, setQuery] = useState("")

    useEffect(() => {
        setQuery(params.get("q"))
    }, [params])

    return (
        <div className="search">
            <h1>{query}</h1>
        </div>
    )
}


export default Search