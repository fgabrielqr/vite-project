import { Outlet } from "react-router-dom"
import { Cabecalho, Conteudo, Footer } from "../../components"

const LayoutsPadrao = () => {
    return (
        <>
            <Cabecalho nomeUsuario="Felipe" />
            <Conteudo>
                <Outlet />
            </Conteudo>
            <Footer nomeCriador="Felipe Gabriel" />
        </>
    )
}

export { LayoutsPadrao } 