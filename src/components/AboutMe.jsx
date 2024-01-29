import React from "react"
import { UserCircleIcon } from "@heroicons/react/solid";
import "./style.css"

const AboutMe = () => {
    return (
        <section id="aboutMe">
            <div className="container px-5 py-10 mx-auto">
                <div className="text-center mb-20">
                    <UserCircleIcon className="w-10 inline-block mb-4" />
                    <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
                        Profile
                    </h1>
                    {/* <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
                    </p> */}
                </div>
                <div className="aboutMeContent">
                    <div className="aboutMeHeader">🔍 About Me:</div>
                    <p>👨‍💻 Front-End Developer with 2.5 years of hands-on experience.</p>
                    <p>🌐 Expertise in HTML, CSS, JavaScript, and responsive design.</p>
                    <p>💡 Passionate about creating seamless user experiences and pixel-perfect designs.</p>
                </div>

                {/* <div className="aboutMeContent">
                    <div className="aboutMeHeader">🚀 What I Bring to the Table:</div>
                    <p>✅ Proven track record of delivering high-quality, user-friendly websites.</p>
                    <p>✅ Collaborative team player with excellent communication skills.</p>
                    <p>✅ Always up-to-date with the latest trends and technologies in web development.</p>
                </div> */}
                <div className="aboutMeContent">
                    <div className="aboutMeHeader">🔎 What I'm Looking For:</div>
                    <p>🔍 Exciting opportunities in Front-End Development.</p>
                    <p>🚀 Roles that encourage creativity, innovation, and continuous learning.</p>
                    <p>🌐 A company with a dynamic culture and a commitment to excellence.</p>
                </div>
            </div >
        </section >
    );
}

export default AboutMe