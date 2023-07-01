import { hogwarts } from "../../data/hogwarst";
import { CastleAnimation } from "../CastleAnimation/CastleAnimation";
import { ContainerMagicWorld } from "./magicWorldStyle";
import castle from "../../Assests/img/hp/hogwarts.png";
import star from "../../Assests/img/hp/hogwarts2.png";
import door from "../../Assests/img/hp/door.png";
import light from "../../Assests/img/hp/luzes2.png";
import chapeu from "../../Assests/img/hp/chapeu2.png";
import chapeu2 from "../../Assests/img/hp/chapeu.png";

export const MagicWorld = () => {
  return (
    <ContainerMagicWorld id="magicworld">
      <div className="container-MagicWorld">
        <div className="about-school">
          <CastleAnimation castle={castle} stars={door} />
          <div className="text-history">
            <h3>About school</h3>
            <h2>{hogwarts.name}</h2>

            {hogwarts.description.map((item) => (
              <p>{item}</p>
            ))}
          </div>
        </div>
        <div className="about-school">
          <CastleAnimation castle={star} stars={light} />
          <div className="text-history">
            <h3>History</h3>
            <p>{hogwarts.earlyHistory}</p>
            <p>{hogwarts.middleHistory}</p>
          </div>
        </div>
        <div className="about-school">
          <CastleAnimation castle={chapeu} stars={chapeu2} />
          <div className="text-history">
            <h3>Shorting Hat</h3>

            {hogwarts.selection.map((item) => (
              <p>{item}</p>
            ))}
          </div>
        </div>
      </div>
    </ContainerMagicWorld>
  );
};
