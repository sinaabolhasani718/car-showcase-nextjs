import styles from "./carsList.module.css";
function CarsList({ data }) {
  return (
    <div className={styles.container}>
      {data.map((car) => (
        <div key={car.id} className={styles.box}>
          <img src={car.image} className={styles.img} />
          <h4>
            {car.name} {car.model}
          </h4>
          <p>
            {car.year} . {car.distance}km
          </p>
          <ul className={styles.list}>
            <li className={styles.btn}>${car.price}</li>
            <li>{car.location}📍</li>
          </ul>
        </div>
      ))}
    </div>
  );
}

export default CarsList;
