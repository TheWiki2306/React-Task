import React from 'react'
import './search.css';

const Search = () => {
    return (
        <>
            <div className="container search_container">
                <input type="text" placeholder='Search products, brand and categories' onChange={e => {
                    console.log(e.target.value)

                }} />
                <button>SEARCH</button>
            </div>
        </>
    )
}

export default Search;
