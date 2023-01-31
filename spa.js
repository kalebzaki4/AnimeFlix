import home from "./index.js"
import dbzEp2 from "./episodios/dragon-ball-z/dbz-ep2.js"
import dbzEp2Lista from "./episodios/dragon-ball-z/dbz-ep2-lista.js"
import dbzEp3 from "./episodios/dragon-ball-z/dbz-ep3.js"
import dbzEp3Lista from "./episodios/dragon-ball-z/dbz-ep3-lista.js"
import dbzEp4 from "./episodios/dragon-ball-z/dbz-ep4.js"
import dbzEp4Lista from "./episodios/dragon-ball-z/dbz-ep4-lista.js"

const main = document.querySelector('#root')

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
        }
    })
}

window.addEventListener("load", () => {
    main.appendChild(home());
    init();
})