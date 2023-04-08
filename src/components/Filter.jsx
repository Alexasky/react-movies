import React, { useState } from 'react';

function Filter(props) {
	const [selectedValue, setSelectedValue] = useState('');

	function handleRadioChange(event) {
		setSelectedValue(event.target.value);
		props.filterMovies(selectedValue);
	}
	return <form action="#">
		<p>
			<label>
				<input
					name="group1"
					type="radio"
					value="all"
					checked={selectedValue === 'all'}
					onChange={handleRadioChange}
				/>
				<span>All</span>
			</label>
		</p>
		<p>
			<label>
				<input
					name="group1"
					type="radio"
					value="movie"
					checked={selectedValue === 'movie'}
					onChange={handleRadioChange}
				/>
				<span>Movies</span>
			</label>
		</p>
		<p>
			<label>
				<input
					name="group1"
					type="radio"
					value="series"
					checked={selectedValue === 'series'}
					onChange={handleRadioChange}
				/>
				<span>Series</span>
			</label>
		</p>
	</form>
}

export { Filter }