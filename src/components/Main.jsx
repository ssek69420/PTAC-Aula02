export default function Main(){
    return(
        <div>
<head>
<link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
  />
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.14.0/devicon.min.css"
  />
</head>
<body>
    <section className="home">
        <div className="info">
            <h1>Insert random text</h1>
            <p>In the depths of the enchanted forest, where the shadows dance with whispers of forgotten tales, lies a secret known only to the moon and stars. It is said that within the heart of the forest, a hidden path reveals itself only to those who dare to listen to the song of the night. Legends speak of a lost treasure guarded by ancient spirits, waiting to be discovered by the bold and the brave. Will you venture into the darkness and unravel the mysteries that lie within, or will you let fear hold you back from your destiny?</p>
            <ul>
                <li>
                    <a href="#" target="_blank">
                        <i className="fab fa-instagram"/>
                    </a>
                </li>

                <li>
                    <a href="#"><i className="fab fa-facebook"/></a>
                </li>

                <li>
                    <a href="#">
                        <i className="fab fa-whatsapp"></i></a>
                </li>

                <li><a href="#">
                    <i className="fab fa-github"></i>
                    </a></li>
            </ul>
        </div>
    </section>
        <section className="projects" id="projects">
        <h2 className="title">My projects</h2>
        <div className="container-proj">
            <div className="card-container">
                <div className="cards">
                    <img src="src/components/images/projeto-gta.png" alt="gh" />
                </div>
            </div>

            <div className="card-container">
                <div className="cards">
                <img src="src/components/images/projeto-x-men.png" alt="mag" />
                </div>
            </div>
            
        </div>
        </section>
</body>
</div>
    )
}