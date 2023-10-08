import { Outlet } from "react-router-dom";
import Menu from "../Menu";
import ListaLateral from "../ListaLateral";
import Banner from "../Banner";
import ListaDeAnimes from "../ListaDeAnimes";

export default function PaginaPadrao() {
    return (
        <main>
            <ListaLateral />
            <Banner />
            <ListaDeAnimes />

            <Outlet />
        </main>
    )
}