import React from "react";

const Champions = ({ champions, handleClick}) => {
  // console.log(champions);

  return (
    <div className="champList">
      {champions.map((champ, i) => {
        if (i <= 20) {
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
        }
      })}

      {/* <div key={1} onClick={() => {setSelectVillager(1)}} className="villager">
        <img
          className="icon"
          src="https://dodo.ac/np/images/8/87/Ribbot_NH_Villager_Icon.png"
          alt=""
        />
        <div className="id">#1</div>
        <div className="name">Ribbot</div>
        <div className="info">
          <div className="gender m">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-gender-male"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M9.5 2a.5.5 0 0 1 0-1h5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-1 0V2.707L9.871 6.836a5 5 0 1 1-.707-.707L13.293 2zM6 6a4 4 0 1 0 0 8 4 4 0 0 0 0-8"
              />
            </svg>
          </div>
          <div className="birthMonth">Feb</div>
        </div>
        <div className="traits">
          <div className="species">Frog</div>
          <div className="personality">Jock</div>
        </div>
      </div>

      <div key={2}  onClick={() => {setSelectVillager(2)}} className="villager">
        <img
          className="icon"
          src="https://dodo.ac/np/images/8/87/Ribbot_NH_Villager_Icon.png"
          alt=""
        />
        <div className="id">#2</div>
        <div className="name">Ribbot</div>
        <div className="info">
          <div className="gender m">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-gender-male"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M9.5 2a.5.5 0 0 1 0-1h5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-1 0V2.707L9.871 6.836a5 5 0 1 1-.707-.707L13.293 2zM6 6a4 4 0 1 0 0 8 4 4 0 0 0 0-8"
              />
            </svg>
          </div>
          <div className="birthMonth">Feb</div>
        </div>
        <div className="traits">
          <div className="species">Frog</div>
          <div className="personality">Jock</div>
        </div>
      </div>

      <div key={3}  onClick={() => {setSelectVillager(3)}} className="villager">
        <img
          className="icon"
          src="https://dodo.ac/np/images/8/87/Ribbot_NH_Villager_Icon.png"
          alt=""
        />
        <div className="id">#3</div>
        <div className="name">Ribbot</div>
        <div className="info">
          <div className="gender m">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-gender-male"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M9.5 2a.5.5 0 0 1 0-1h5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-1 0V2.707L9.871 6.836a5 5 0 1 1-.707-.707L13.293 2zM6 6a4 4 0 1 0 0 8 4 4 0 0 0 0-8"
              />
            </svg>
          </div>
          <div className="birthMonth">Feb</div>
        </div>
        <div className="traits">
          <div className="species">Frog</div>
          <div className="personality">Jock</div>
        </div>
      </div> */}
    </div>
  );
};

export default Champions;
