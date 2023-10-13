import "./ContactStyles.css"

function Contact() {
    return(
        <>                
            <div className="Contact-body">
                <h1>
                    Hit me up
                </h1>
                <h3>
                    Let's grab a coffee.
                </h3>
                <div className="Contact-links">
                    <a rel="noreferrer" id="profile-link" href="https://github.com/xoboom" target="_blank" class="btn contact-details">
                        <i class="fab fa-github"></i> GitHub</a>
                    <a rel="noreferrer" id="profile-link" href="https://twitter.com/openlystr8nerd" target="_blank" class="btn contact-details">
                        <i class="fab fa-twitter"></i> Twitter</a>
                    <a rel="noreferrer" id="profile-link" href="https://discordapp.com/users/197880513464107008" target="_blank" class="btn contact-details">
                        <i class="fab fa-discord"></i> Discord</a>
                </div>
            </div>    
        </>
    )
}

export default Contact;