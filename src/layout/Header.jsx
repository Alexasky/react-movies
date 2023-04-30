function Header() {
    return (
        <nav className='green darken-1'>
            <div className='nav-wrapper'>
                <a
                    href='https://github.com/Alexasky/react-movies'
                    className='brand-logo'
                >
                    React Movies
                </a>
                <ul id='nav-mobile' className='right hide-on-med-and-down'>
                    <li>
                        <a
                            href='https://github.com/Alexasky/react-movies'
                            rel='noreferrer'
                            target='_blank'
                        >
                            Repo
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
export { Header };
