/* eslint-disable react/prop-types */
import Cards from "../Cards/Cards"

const Home = (props) => {
    return (
        <div>
            <Cards
                onClose= {props.onClose}
                characters= {props.characters}
                />
        </div>
    )
}

export default Home