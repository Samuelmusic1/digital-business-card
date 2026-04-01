export default function Main() {
    return (
        <>
            <main>
                <h1 className="dev-name">Babalola Samuel</h1>
                <p className="dev-role">Frontend Developer</p>
                <a href="" className="dev-pg"><span>Babasam.website</span></a>
                <div className="contact">
                    <div className="mail-btn">
                        <a href="mailto:babalolasamuel323@gmail.com">
                            <img src="/images/mail.png" alt="email logo" className="mail-img"/>
                            <p className="ml">Email</p>
                        </a>
                    </div>
                    <div className="linkedin-btn">
                        <a href="https://www.linkedin.com/in/samuel-babalola-852b7a191/?skipRedirect=true">
                            <img src="/images/linkedin.png" alt="email logo" className="lkd-img"/>
                            <p className="ln">LinkedIn</p>
                        </a>
                    </div>
                </div>
                <div className="abt-section">
                    <h2>About</h2>
                    <p>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
                </div>
                <div className="int-section">
                    <h2>Interests</h2>
                    <p>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
                </div>
            </main>
        </>
    )
}
