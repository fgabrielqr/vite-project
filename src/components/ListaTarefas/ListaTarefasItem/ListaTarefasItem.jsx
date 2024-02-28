import { useState } from 'react';
import { useAppContext } from '../../../hooks';
import { Botao, CampoTexto, TIPO_BOTAO } from '../../../components';
import style from './ListaTarefasItem.module.css';

const ListaTarefasItem = (props) => {
    const { id, nome } = props;
    const [estaEditando, setEstaEditando] = useState(false);

    const { editarTarefa, removerTarefa } = useAppContext();

    return (
        <li className={style.ListaTarefasItem}>
            {estaEditando && (
                <CampoTexto
                    defaultValue={nome}
                    onChange={event => editarTarefa(id, event.currentTarget.value)}
                    onBlur={() => setEstaEditando(false)}
                    autoFocus
                />
            )}
            {!estaEditando && (
                <samp
                    onDoubleClick={() => setEstaEditando(true)}>
                    {nome}
                </samp>
            )}

            <Botao texto='-' tipo={TIPO_BOTAO.SECUNDARIO} onClick={() => removerTarefa(id)} />
        </li>
    )
}

export { ListaTarefasItem }