import { useState } from "react";

const Navbar = ({onSearch}) => { 
    const [search, setSearch] = useState('');

    const handleInputChange = (event) => {
        setSearch(event.target.value);
    }
    const handleInputKeyDown = (event) => {
        if (event.key === 'Enter') {
            onSearch(search);
    
    }
};

return (
    <div>
        <p>My Boletera</p>
        <input type="text" placeholder="Busca tu evento favorito" 
        onChange={handleInputChange}
        onKeyDown={handleInputKeyDown}
        value={search}/>
    </div>
    
);
    
};

export default Navbar;
