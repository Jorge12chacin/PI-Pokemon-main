import React from "react";
//import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import "./Card.css";

export default function Card({ name, image, types, createInData, id }) {
  let typePokemon = types.map((e, index) => {
    const nameType = e.name ? e.name : e;
    return <p key={index}>{nameType}</p>;
  });

  //const dispatch = useDispatch();

  return (
    <div className="card">
      <div className="detail"></div>
      <Link to={`/pokemon/${id}`}>
        <div className="card-info">
          <img className="imgCard" src={image} alt="img not" />
          <p className="title">{name}</p>
          <span className="subtitle">{typePokemon}</span>
        </div>
      </Link>
    </div>
  );
}
