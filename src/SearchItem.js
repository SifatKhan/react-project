import React from 'react'

const SearchItem = ({search, setSearch}) => {
  return (
    <form className='searchForm'
        onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="search"></label>
            <input type="text"
                className="search-item"
                id='search'
                role='searchbox'
                placeholder='Search Items'
                value={search}
                onChange={(e) => setSearch(e.target.value)} />
        </form>
  )
}

export default SearchItem