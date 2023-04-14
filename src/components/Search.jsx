import { useState } from 'react';

const Search = (props) => {
    const { searchMovies = Function.prototype } = props;
    const [search, setSearch] = useState('');
    const [type, setType] = useState('all');

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            searchMovies(search, type);
        }
    };
    const handleFilter = (event) => {
        setType(event.target.value);
        searchMovies(search.length ? search : 'matrix', event.target.value);
    };

    return (
        <div className='row'>
            <div className='input-field'>
                <input
                    placeholder='search'
                    value={search}
                    type='search'
                    className='validate'
                    onChange={(e) => setSearch(e.target.value)}
                    onKeyDown={handleKeyPress}
                />
                <button
                    className='btn btn-search'
                    onClick={() => searchMovies(search, type)}
                >
                    Search
                </button>
                <div>
                    <label>
                        <input
                            className='with-gap'
                            name='type'
                            type='radio'
                            value='all'
                            checked={type === 'all'}
                            onChange={handleFilter}
                        />
                        <span>All</span>
                    </label>
                    <label>
                        <input
                            className='with-gap'
                            name='type'
                            type='radio'
                            value='movie'
                            checked={type === 'movie'}
                            onChange={handleFilter}
                        />
                        <span>Movies</span>
                    </label>
                    <label>
                        <input
                            className='with-gap'
                            name='type'
                            type='radio'
                            value='series'
                            checked={type === 'series'}
                            onChange={handleFilter}
                        />
                        <span>Series</span>
                    </label>
                </div>
            </div>
        </div>
    );
};

export { Search };
