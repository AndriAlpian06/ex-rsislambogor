import React, { useState } from 'react';
import Scroll from './Scroll';
import SearchList from './SearchList';

function Search({ details }) {

  const [searchField, setSearchField] = useState("");
  const [searchShow, setSearchShow] = useState(false);

  const filteredPersons = details.filter(
    person => {
      return (
        person
        .spesialis
        .toLowerCase()
        .includes(searchField.toLowerCase()) ||
        person
        .name
        .toLowerCase()
        .includes(searchField.toLowerCase())
      );
    }
  );

  const handleChange = e => {
    setSearchField(e.target.value);
    if(e.target.value===""){
      setSearchShow(false);
    }
    else {
      setSearchShow(true);
    }
  };

  function searchList() {
  	if (searchShow) {
	  	return (
	  		<Scroll>
	  			<SearchList filteredPersons={filteredPersons} />
	  		</Scroll>
	  	);
	  }
  }

  return (
    <div>     
        <section className="garamond">
                <div className="navy georgia ma0 grow">
                    {/* <h2 className="f2">Search your course</h2> */}
                </div>
                <div className="pa2">
                    <input 
                        className="w-full text-black rounded-md py-2 px-4 bg-white border-2 border-green-600"
                        type = "search" 
                        placeholder = "Cari Spesialis" 
                        onChange = {handleChange}
                    />
                </div>
        </section>
	    {searchList()}
    </div>
  );
}

export default Search;