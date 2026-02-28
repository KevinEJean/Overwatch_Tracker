import './DefaultFrame.css'

export default function DefaultFrame() {

    return (
        <div className='defaultFrameRoot'>
            <h1>Welcome to {document.title}</h1>
            <p>Descrription of the sites functions.</p>
        </div>
    );
}