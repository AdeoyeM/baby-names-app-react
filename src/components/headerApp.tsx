import React, { useContext } from "react";
import { Search } from "../App"

function HeaderApp(): JSX.Element {

  const [search, setSearch] = useContext(Search) as unknown as [string, any]
  return (
      <>
          <input 
            type="text" 
            className="search-bar" 
            placeholder="Search baby name..."
            value={search}
            onChange={(event) => {
              setSearch(() => event.target.value)
            }}
            
          />
      </>
  )
}
export default HeaderApp;