const SearchName = ({ onSearch, searchValue }) => {
    return (
        <>
            <div>
                <input type="text" value={searchValue} placeholder="Search By Name" onChange={(e) => onSearch(e.target.value)} />
            </div>
        </>
    )
}
export default SearchName;