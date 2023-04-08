import { Component } from 'react';

class Search extends Component {
    state = {
        search: '',
        type: 'all',
    };
    handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            this.props.searchMovies(this.state.search, this.state.type);
        }
    };
    handleFilter = (event) => {
        this.setState(
            () => ({ type: event.target.value }),
            () => {
                this.props.searchMovies(this.state.search, this.state.type);
            }
        );
    };

    render() {
        return (
            <div className='row'>
                <div className='input-field'>
                    <input
                        placeholder='search'
                        value={this.state.search}
                        type='search'
                        className='validate'
                        onChange={(e) =>
                            this.setState({ search: e.target.value })
                        }
                        onKeyDown={this.handleKeyPress}
                    />
                    <button
                        className='btn btn-search'
                        onClick={() =>
                            this.props.searchMovies(
                                this.state.search,
                                this.state.type
                            )
                        }
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
                                checked={this.state.type === 'all'}
                                onChange={this.handleFilter}
                            />
                            <span>All</span>
                        </label>
                        <label>
                            <input
                                className='with-gap'
                                name='type'
                                type='radio'
                                value='movie'
                                checked={this.state.type === 'movie'}
                                onChange={this.handleFilter}
                            />
                            <span>Movies</span>
                        </label>
                        <label>
                            <input
                                className='with-gap'
                                name='type'
                                type='radio'
                                value='series'
                                checked={this.state.type === 'series'}
                                onChange={this.handleFilter}
                            />
                            <span>Series</span>
                        </label>
                    </div>
                </div>
            </div>
        );
    }
}

export { Search };
