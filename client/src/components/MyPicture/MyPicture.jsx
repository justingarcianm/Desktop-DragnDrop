import myPic from '../../assets/unsplash.jpg'

const MyPicture = (props) => {
    console.log('props',props)
    return (
        <div className='myPic'>
            <img src={myPic} alt="Justin Garcia" />
        </div>
    )
}

export default MyPicture