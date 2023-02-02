import home from "./episodios/dragon-ball-z/index"
import dbzEp2 from "./episodios/dragon-ball-z/ep2"
import dbzEp2Lista from "./episodios/dragon-ball-z/ep2-lista"
import dbzEp3 from "./episodios/dragon-ball-z/ep3"
import dbzEp3Lista from "./episodios/dragon-ball-z/ep3-lista"
import dbzEp4 from "./episodios/dragon-ball-z/ep4"
import dbzEp4Lista from "./episodios/dragon-ball-z/ep4-lista"
import dbzEp5 from "./episodios/dragon-ball-z/ep5"
import dbzEp5Lista from "./episodios/dragon-ball-z/ep5"
import dbzEp6 from "./episodios/dragon-ball-z/ep6"
import dbzEp6Lista from "./episodios/dragon-ball-z/ep6-lista"
import dbzEp7 from "./episodios/dragon-ball-z/ep7"
import dbzEp7Lista from "./episodios/dragon-ball-z/ep7-lista"
import dbzEp8 from "./episodios/dragon-ball-z/ep8"
import dbzEp8Lista from "./episodios/dragon-ball-z/ep8-lista"
import dbzEp9 from "./episodios/dragon-ball-z/ep9"
import dbzEp9Lista from "./episodios/dragon-ball-z/ep9-lista"
import dbzEp10 from "./episodios/dragon-ball-z/ep10"
import dbzEp10Lista from "./episodios/dragon-ball-z/ep10-lista"
import dbzEp11 from "./episodios/dragon-ball-z/ep11"
import dbzEp11Lista from "./episodios/dragon-ball-z/ep11-lista"
import dbzEp12 from "./episodios/dragon-ball-z/ep12"
import dbzEp12Lista from "../dragon-ball-z/ep12-lista"
import dbzEp13 from "./episodios/dragon-ball-z/ep13"
import dbzEp13Lista from "./episodios/dragon-ball-z/ep13-lista"
import dbzEp14 from "./episodios/dragon-ball-z/ep14"
import dbzEp14Lista from "./episodios/dragon-ball-z/ep14-lista"
import dbzEp15 from "./episodios/dragon-ball-z/ep15"
import dbzEp15Lista from "./episodios/dragon-ball-z/ep15"
import dbzEp16 from "./episodios/dragon-ball-z/ep16"
import dbzEp16Lista from "./episodios/dragon-ball-z/ep16-lista"
import dbzEp17 from "./episodios/dragon-ball-z/ep17"
import dbzEp17Lista from "./episodios/dragon-ball-z/ep17-lista"
import dbzEp18 from "./episodios/dragon-ball-z/ep18"
import dbzEp18Lista from "./episodios/dragon-ball-z/ep18-lista"
import dbzEp19 from "./episodios/dragon-ball-z/ep19"
import dbzEp19Lista from "./episodios/dragon-ball-z/ep19-lista"
import dbzEp20 from "./episodios/dragon-ball-z/ep20"
import dbzEp20Lista from "./episodios/dragon-ball-z/ep20-lista"
import dbzEp21 from "./episodios/dragon-ball-z/ep21"
import dbzEp21Lista from "./episodios/dragon-ball-z/ep21-lista"
import dbzEp22 from "./episodios/dragon-ball-z/ep22"
import dbzEp22Lista from "./episodios/dragon-ball-z/ep22-lista"
import dbzEp23 from "./episodios/dragon-ball-z/ep23"
import dbzEp23Lista from "./episodios/dragon-ball-z/ep23-lista"
import dbzEp24 from "./episodios/dragon-ball-z/ep24"
import dbzEp24Lista from "./episodios/dragon-ball-z/ep24-lista"
import dbzEp25 from "./episodios/dragon-ball-z/ep25"
import dbzEp25Lista from "./episodios/dragon-ball-z/ep25"
import dbzEp26 from "./episodios/dragon-ball-z/ep26"
import dbzEp26Lista from "./episodios/dragon-ball-z/ep26-lista"
import dbzEp27 from "./episodios/dragon-ball-z/ep27"
import dbzEp27Lista from "./episodios/dragon-ball-z/ep27-lista"
import dbzEp28 from "./episodios/dragon-ball-z/ep28"
import dbzEp28Lista from "./episodios/dragon-ball-z/ep28-lista"
import dbzEp29 from "./episodios/dragon-ball-z/ep29"
import dbzEp29Lista from "./episodios/dragon-ball-z/ep29-lista"
import dbzEp30 from "./episodios/dragon-ball-z/ep30"
import dbzEp30Lista from "./episodios/dragon-ball-z/ep30-lista"

const main = document.querySelector('#root');

const init = () => {
    window.addEventListener("hashchange", () => {
        main.innerHTML = "";
        switch(window.location.hash){
            case "#home":
                    main.appendChild(home());
                break
            case "#ep2":
                    main.appendChild(dbzEp2());
                break
            case "#ep2Lista":
                        main.appendChild(dbzEp2Lista());
                break
            case "#ep3":
                        main.appendChild(dbzEp3());
                break
            case "#ep3Lista":
                        main.appendChild(dbzEp3Lista());
                break
                case "#ep4":
                        main.appendChild(dbzEp4());
                break
            case "#ep4Lista":
                        main.appendChild(dbzEp4Lista());
                break
            case "#ep5":
                    main.appendChild(dbzEp5());
                break
            case "#ep5Lista":
                        main.appendChild(dbzEp5Lista());
                break
            case "#ep6":
                        main.appendChild(dbzEp6());
                break
            case "#ep6Lista":
                        main.appendChild(dbzEp6Lista());
                break
            case "#ep7":
                        main.appendChild(dbzEp7());
                break
            case "#ep7Lista":
                        main.appendChild(dbzEp7Lista());
                break
             case "#ep8":
                        main.appendChild(dbzEp8());
                break
            case "#ep8Lista":
                        main.appendChild(dbzEp8Lista());
            break
        }
    })
}

window.addEventListener("load", () => {
    main.appendChild(home());
    init();
})