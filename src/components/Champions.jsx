import React from "react";

const Champions = ({ champions, handleClick}) => {
  return (
    <div className="champList">
      {champions.map((champ, i) => {
          return (
            <div onClick={() => handleClick(champ.key)} key={champ.key} className="champion">
              <img
                className="icon"
                src={`https://ddragon.leagueoflegends.com/cdn/12.4.1/img/champion/${champ.image.full}`}
                alt=""
              />
              <div className="id">{champ.key}</div>
              <div className="name">{champ.name}</div>
              <div className="tags">
                {champ.tags.map(tag => (
                  <div className={tag}>
                    {tag}
                  </div>
                ))}
              </div>
            </div>
          );
      })}
    </div>
  );
};

export default Champions;
