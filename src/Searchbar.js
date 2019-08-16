import React, { useState } from 'react'

const Searchbar = props => {
    const [searchValue, setSearchValue] = useState("")

    const handleSearchInputChanges = (event) => { 
        setSearchValue(event.target.value);
        console.log(event.target.value);
        props.search(event.target.value);
    }

    const resetInputField = () => { 
        setSearchValue("") 
    }

    const callSearchFunction = (e) => { 
        e.preventDefault();    
        props.search(searchValue);    
        resetInputField();  
    }

    return (      
        <form className="search">   
            <input value={searchValue}      
                onChange={handleSearchInputChanges}      
                type="text" />       
            <input onClick={callSearchFunction} 
                type="submit"  
                value="SEARCH" />   
        </form>    
    );
}

export default Searchbar