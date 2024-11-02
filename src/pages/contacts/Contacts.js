import './style.css';

const Contacts = () => {
    return (
        <main className="main">
            <div className="contacts">
                <span>Contacts</span>

                <ul className="contacts__contact_list">
                    <li className="contatcts__contact_list-item">
                        <h2>Location</h2>
                        <p>Kharkiv, Ukraine</p>
                    </li>
                    <li className="contatcts__contact_list-item">
                        <h2>Telegram</h2>
                        <p>
                            <a href="https://t.me/Savelii_Fartushnyi" target="_blank" rel="noreferrer">
                                @Savelii_Fartushnyi
                            </a>
                        </p>
                    </li>
                    <li className="contatcts__contact_list-item">
                        <h2>Phone</h2>
                        <p>+380 68 436 44 50</p>
                    </li>
                    <li className="contatcts__contact_list-item">
                        <h2>Email</h2>
                        <p>
                            <a href="mailto:savelii.fartushnyi@gmail.com">savelii.fartushnyi@gmail.com</a>
                        </p>
                    </li>
                </ul>
            </div>
        </main>
    );
}

export default Contacts;