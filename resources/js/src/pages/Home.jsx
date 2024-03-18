import { Link } from "react-router-dom"
import { Typewriter } from 'react-simple-typewriter';

const Home = () => {
    return (
        <section id="home" className="d-flex align-items-center py-5">
            <div className="container d-flex flex-column align-items-center">
                <div className="row mt-4">
                    <h1 className='text-center mb-4' style={{ color: "#34b7a7" }}>Ronald Kimeli</h1>
                    <h2 className='text-center'>I'm a {' '}<span className="auto-input" style={{ font: "bold", color: "#34b7a7" }}>
                        <Typewriter
                            words={['Full Stack Web Developer (Backend Heavy)']}
                            loop={5}
                            cursor
                            cursorStyle='!'
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1000}
                        />
                    </span></h2>
                    <div className="d-grid gap-2 col-6 mx-auto">
                        <Link to={"/about"} className="text-center btn-about" type="button">About Me</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home
