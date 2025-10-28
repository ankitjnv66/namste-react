const RestaurantCard = (props) => {
  const { resData } = props;

  const { name, stars } = resData;

  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="res-logo"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKYyp_AcZ5Eqp6d79-VCq7SedUIJDqRp5tNAuq5H_GiQUJcSL8aVp-DUhg2uWqNpYnmjtRk-JYJm8PkL08K5zAQ4FWOCEOXhE_z57QY8g"
      />
      <h3>{name}</h3>
      <h4>{resData.contact.phone}</h4>
      <h4>{stars}</h4>
    </div>
  );
};

export default RestaurantCard;