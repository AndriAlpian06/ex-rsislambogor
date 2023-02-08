import React from 'react';

function Card({person}) {

	// const jadwal = person.map( jadwal =>  <Card key={jadwal.idJadwal} jadwal={jadwal} />);

	// console.log(jadwal);
	return(
		<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
			<div className='flex items-center'>
				<img className="w-32 h-32" alt={person.name} src={process.env.PUBLIC_URL + person.imgPath} />
					<h2>{person.name}</h2>
					<p>{person.day}</p>
					<p>{person.spesialis}</p>
					{/* <p>{person.jadwal}</p> */}
			</div>
		</div>
	);
}

export default Card;