/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */

import { Link } from "react-router-dom"
import styles from "./Card.module.css"
import { useState,useEffect } from "react";
import { addFav, removeFav } from "../../redux/actions";
import { connect } from "react-redux";

 const Card = ({
  id,
  name,
  species,
  onClose,
  gender,
  status,
  image,
  origin,
  myFavorites,
  addFav,
  removeFav,
 }) => {

  const [isRemoving, setIsRemoving] = useState(false)

  const [isFav, setIsFav] = useState(false)


  //este useEffect recorre y se fija si un char ya está dentro del array de favs
  useEffect(() => {
    myFavorites.forEach((char) => {
       if (char.id === id) {
          setIsFav(true);
       }
    });
 }, [myFavorites]);

  const handleFav = () => {
    if (isFav) {
      setIsFav(false);
      removeFav(id)
    } else {
      setIsFav(true);
      addFav({
        id,
        name,
        species,
        gender,
        status,
        image,
        origin,
      })
      console.log(myFavorites);
    }
  }

  const handleRemove = () => {
    setIsRemoving(true)
    setTimeout(() => onClose(id), 1000)
  }

  return (
  <div className={`${styles.CardContainer} ${isRemoving ? styles.fadeOut : ''}`}>
    <div className={styles.ButtonContainer}>
      <button className={styles.Button} onClick={handleRemove}>X</button>
      {
   isFav ? (
      <button onClick={handleFav}>❤️</button>
   ) : (
      <button onClick={handleFav}>🤍</button>
   )
}
    </div>
    <div className={styles.ImageContainer}>
      <img className={styles.img} src={image} alt={name} />
    </div>
    <div className={styles.NameContainer}>
      <Link className={styles.link} to={`/detail/${id}`}>
        <div className={styles.StyledName}>{name.toUpperCase()}</div>
      </Link>
    </div>
    <div className={styles.InfoContainer}>
      <span className={styles.Info}>{species}</span>
      <span className={styles.Info}>{gender}</span>
      <span className={styles.Info}>{status}</span>
      <span className={styles.Info}>{origin}</span>
    </div>
  </div>
    
  );
}

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addFav: (char) => dispatch(addFav(char)),
    removeFav: (id) => dispatch(removeFav(id)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Card)