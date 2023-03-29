
const FooterApp = () => {
    return (
        <footer>
            <div className="column left"><img src={process.env.PUBLIC_URL + '/img/Isotipo.svg'} /></div>
            <div className="column middle"><p>&#169; 2023 Progrez All rights reserved</p></div>
            <div className="column right"><img src={process.env.PUBLIC_URL + '/img/Isotipo.svg'} /></div>
        </footer>
    )
}

export default FooterApp