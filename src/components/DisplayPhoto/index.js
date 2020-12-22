import './styles.css'

function DisplayPhoto() {

    const imageUrl = 'https://res.cloudinary.com/de0tuzprx/image/upload/v1608645487/CC_20200624_162144_ojc24a.png'
    
    return (
        <div className="photo">
            <img src={imageUrl} alt="me"/>
        </div>
    )
}

export default DisplayPhoto
