import './DefaultFrame.css';

export default function DefaultFrame() {

    return (
        <div className='defaultFrameRoot'>
            <h1>👋 Welcome to <b>{document.title}</b></h1>  
            <p>
                Tracer is a comprehensive statistics tracker designed to provide players with deep insights into their performance, hero meta-trends, and match history. While the core functionality centers on gaming data, the project's true purpose is a rigorous exploration of modern DevOps, security-first architecture, and user-centric design.
            </p>
            <strong>
                <a href='https://www.linkedin.com/in/kevin-emmanuel-jean/' target='_blank'>
                    https://www.linkedin.com/in/kevin-emmanuel-jean/
                </a>
            </strong>
        </div>
    );
}