/* eslint-disable react/prop-types */
   import Card from '../Card/Card';
   import styles from './Cards.module.css'

   const Cards = (props) => {

      return (
      <div className={styles.CardsContainer}>
         {props.characters.map((e) => {
            return <Card
            id= {e.id}
            key= {e.id}
            name={e.name}
            species={e.species}
            onClose={props.onClose} 
            gender={e.gender}
            status={e.status}
            image={e.image}
            origin={e.origin.name}
            />
         })}   
      </div>
      )
   }

   export default Cards