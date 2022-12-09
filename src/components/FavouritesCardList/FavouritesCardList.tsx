import { useSelector } from "react-redux";
import { selectFavourite } from "../../store/pokemon/pokemon.selector";
import "./favourites.styles.css";

const FavouritesCardList = () => {
  const favourites = useSelector(selectFavourite);
  return (
    <div>
      <h2>Favoris</h2>
      <div className="container">
        {favourites.length > 0
          ? favourites.map((favourite) => {
              return (
                <div key={favourite.id} className="favouritesCard">
                  <h2>{favourite.name}</h2>
                  {favourite.sprites && (
                    <img
                      src={favourite.sprites.front_default}
                      alt={favourite.name}
                    />
                  )}
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
};

export default FavouritesCardList;
