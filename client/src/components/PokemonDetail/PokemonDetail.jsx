import React from "react";
import { useEffect } from "react";
import { removePoke } from "../../redux/actions/index";
import { useDispatch, useSelector } from "react-redux";
import { getDetail } from "../../redux/actions/index";
import "./PokemonDetail.css";
import { Link } from "react-router-dom";
import Loading from "../Loading/Loading";
import pokedeximg from "./pokedex.jpeg";
import { useHistory } from "react-router-dom";

function PokemonDetail(props) {
  const dispatch = useDispatch();
  const history = useHistory;
  const pokeDetail = useSelector((state) => state.detail);

  const id = props.match.params.id;

  useEffect(() => {
    dispatch(getDetail(id));
  }, [dispatch, id]);

  const loading = useSelector((state) => state.loading);
  if (loading) {
    return <Loading />;
  }

  const handlerDelete = () => {
    dispatch(removePoke(id));
    history.push("/home");
  };

  const deletePoke = () => {
    return (
      <Link to="/home">
        <button className="delete-btn" onClick={() => handlerDelete()}>
          X
        </button>
      </Link>
    );
  };

  return (
    <div className="fullpokedex">
      <div className="borrar">{deletePoke()}</div>
      <div className="pokedex">
        <div className="pokedeximg">
          <div className="titlename">
            <img className="img-loading" src={pokedeximg} alt="img Not Found" />
          </div>
          <div className="pokedex-left">
            <div className="pokedex-screen-container"></div>
            {console.log(pokeDetail)}
            <div className="details">
              <div className="imgpoke">
                <img src={pokeDetail.image} alt="img Not Found" />
              </div>

              <div className="letters">
                <p>
                  <div className="nombreyid">
                    <h2>
                      {pokeDetail.name} #{pokeDetail.id}
                    </h2>
                  </div>
                </p>
                <p>HP: {pokeDetail.hp}</p>
                <p>Attack: {pokeDetail.attack}</p>
                <p>Defense: {pokeDetail.defense}</p>
                <p>Speed: {pokeDetail.speed}</p>
                <p>Type: {pokeDetail.types?.join(" - ")}</p>
                <p>Height: {pokeDetail.height}</p>
                <p>Weight: {pokeDetail.weight}</p>
              </div>
            </div>
          </div>

          <Link to="/home">
            <button className="btn-back">volver</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PokemonDetail;
