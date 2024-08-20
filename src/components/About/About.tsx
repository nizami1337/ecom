import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const About = () => {
    return (
        <div className="app">
            <Navbar/>
            <div className="hero bg-base-100 p-40">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                    <h1 className="text-5xl font-bold">Hello there</h1>
                    <p className="py-6 text-2xl">
                        This project was built purely due to demonstrate my react skills
                    </p>
                    <Link className="btn btn-primary text-2xl" to={'/'}>Back to home page</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;