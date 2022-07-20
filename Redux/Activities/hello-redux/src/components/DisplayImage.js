import { connect} from 'react-redux'
import React from 'react'

function DisplayImage (props) {

    const randomURL = `https://picsum.photos/seed/${new Date().getTime()}/200/300`

    const handleClick = () => {
        props.addImage(randomURL)
    }

    const randomImage = props.images.map((image, index) => {
        return (
            <li key = {index}>
                <img src= {image} alt=''/>
            </li>
        )
    })

    return (
        <div>
            <button onClick={handleClick}>Generate New Image</button>
            <ul>
                {randomImage}
            </ul>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        images: state.imageReducer.randomImages
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addImage: (image) => dispatch({type: 'ADD_IMAGE', payload: image})
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (DisplayImage)