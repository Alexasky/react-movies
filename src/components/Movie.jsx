function Movie(props) {
    const {
        Poster: poster,
        Title: title,
        Type: type,
        Year: year,
        imdbID: id,
    } = props;

    return (
        <div id={id} className='card movie'>
            <div className='card-image'>
                {poster === 'N/A' ? (
                    <img src={`https ://placehold.co/600x400?text=${title}`} />
                ) : (
                    <img src={poster} />
                )}
                <span className='card-title'>{title}</span>
            </div>
            <div className='card-content'>
                <span>{year}</span>
                <span className='right'>{type}</span>
            </div>
        </div>
    );
}
export { Movie };
