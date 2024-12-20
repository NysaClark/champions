import React from "react";
import classNames from "classnames";

const Details = ({ showDetails, delay, selectChampion, setShowDetails }) => {
  let shortenedBlurb = `${selectChampion.blurb.split(".")[0]}.`;

  return (
    <>
      <div className={classNames({
          closeBtn: true,
          show: showDetails,
        })}
        onClick={() => setShowDetails(false)}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
  <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
</svg>
      </div>
      <div
        className={classNames({
          details: true,
          show: showDetails,
          delay: delay,
        })}
      >
        <img
          className="icon"
          src={`https://ddragon.leagueoflegends.com/cdn/12.4.1/img/champion/${selectChampion.image.full}`}
          alt=""
        />
        <div className="id">{selectChampion.key}</div>
        <div className="name">
          <h2>{selectChampion.name}</h2>
        </div>
        <div className="title">
          <h3>{selectChampion.title}</h3>
        </div>
        <div className="tags">
          {selectChampion.tags &&
            selectChampion.tags.map((tag) => <div className={tag}>{tag}</div>)}
        </div>
        <div className="bio">
          <h4>Biography</h4>
          <p>{shortenedBlurb}</p>
        </div>

        <h4 id="rating">Rantings</h4>
        <div className="ratings">
          <div className="attack">
            <h5>Attack</h5>
            <p>{selectChampion.info.attack}</p>
          </div>
          <div className="defense">
            <h5>Defense</h5>
            <p>{selectChampion.info.defense}</p>
          </div>
          <div className="magic">
            <h5>Magic</h5>
            <p>{selectChampion.info.magic}</p>
          </div>
          <div className="difficulty">
            <h5>Difficulty</h5>
            <p>{selectChampion.info.difficulty}</p>
          </div>
        </div>

        <h4>Stats</h4>
        <div className="stats">
          <div className="stat">
            <div className="hp">HP</div>
            <p>{selectChampion.stats.hp}</p>
          </div>
          <div className="stat">
            <div className="atk">ATK</div>
            <p>{selectChampion.stats.attackdamage}</p>
          </div>
          <div className="stat">
            <div className="rng">RNG</div>
            <p>{selectChampion.stats.attackrange}</p>
          </div>
          <div className="stat">
            <div className="ar">AR</div>
            <p>{selectChampion.stats.armor}</p>
          </div>
          <div className="stat">
            <div className="mp">MP</div>
            <p>{selectChampion.stats.mp}</p>
          </div>
          <div className="stat">
            <div className="ms">MS</div>
            <p>{selectChampion.stats.movespeed}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
