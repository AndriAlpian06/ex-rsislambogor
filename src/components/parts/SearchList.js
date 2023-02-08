import React from 'react';
import Card from './Card';

function SearchList({ filteredPersons }) {
  const filtered = filteredPersons.map( person =>  <Card key={person.id} person={person} />); 
  return (
    <div className='py-8 h-auto'>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
          {filteredPersons.map((person, index) => (
            <div key={index} className="bg-white shadow-xl rounded-xl overflow-hidden"> 
                <div className="leading-relaxed text-xl text-gray-800">
                  <img className="aspect-square w-full object-cover object-center" src={process.env.PUBLIC_URL + person.imgPath} alt="" />
                </div>
                <div className="px-3 py-4 bg-gradient-to-r from-blue-500 to-blue-900 flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="text-white">
                    {person.name}
                    </div>
                  </div>
                </div>
                <div className="px-3 py-2 bg-gradient-to-r from-blue-500 to-blue-900 flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="text-white hover:text-opacity-75 text-sm font-bold">
                    {person.spesialis}
                    </div>
                  </div>
                <button className='px-4 py-1 hover:bg-green-300 hover:text-black'>Buat Janji</button>
                </div>
            </div>
              
          ))}
      </div>
      {/* {filtered} */}
    </div>
  );
}

export default SearchList;