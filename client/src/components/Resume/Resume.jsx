import myResume from '../../assets/web_resume.docx.pdf'

const Resume = () => {
    return (
        <div className='resume'>
            <iframe title='resume' width="100%" height="100%" src={myResume}></iframe>
        </div>
    )
}

export default Resume