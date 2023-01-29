import home from "./index.js"
import dbzEp2 from "./episodios/dbz-ep2.js"

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
        }
    })
}

window.addEventListener("load", () => {
    main.appendChild(home());
    init();
})