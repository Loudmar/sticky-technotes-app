import { Link } from "react-router-dom";

const Public = () => {
    const content = (
        <section className="public">
            <header>
                <h1>Welcome to <span className="nowrap">Sticky Tech Notes!</span></h1>
            </header>
            <main className="public__main">
                <p>Located in Beautiful Brighton City, Sticky Tech Notes is ready to take your business to a whole new level.</p>
                <address className="public__addr">
                    Sticky Tech Notes<br />
                    26 North Road<br />
                    Brighton, BN1 1BA<br />
                    <a href="tel:+15555555555">(222) 222-2222</a>
                </address>
                <br />
                <p>Loudmar Portilho</p>
            </main>
            <footer>
                <Link to="/login">User Login</Link>
            </footer>
        </section>

    )
    return content
}
export default Public