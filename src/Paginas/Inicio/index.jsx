import Banner from "../../Components/Banner";
import Animes from "../../Components/ListaDeAnimes";
import ListaLateral from "../../Components/ListaLateral";
import Menu from "../../Components/Menu";

export default function Inicio() {
    return (
        <>
            <Menu />
            <Banner />
            <ListaLateral/>
            <Animes/>
        </>
    )
}