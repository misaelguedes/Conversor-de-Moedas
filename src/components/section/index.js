import './section.css'

import Modal from '../modal'
import { useState } from 'react'

export default function Section() {

    const [openModal, setOpenModal] = useState(false)
    const [status, setStatus] = useState('')

    function transform(status) {
        setOpenModal(true)
        setStatus(status)
    }

    return (
        <section>
            <p>Selecione a moeda que dejesa converter!</p>
            <button onClick={() => transform('realDolar')}>REAL EM DÓLAR</button>
            <button onClick={() => transform('realEuro')}>REAL EM EURO</button>
            <button onClick={() => transform('realLibra')}>REAL EM LIBRA</button>
            <button onClick={() => transform('dolarReal')}>DOLÁR EM REAL</button>
            <button onClick={() => transform('dolarEuro')}>DÓLAR EM EURO</button>
            <button onClick={() => transform('dolarLibra')}>DÓLAR EM LIBRA</button>
            <button onClick={() => transform('euroReal')}>EURO EM REAL</button>
            <button onClick={() => transform('euroDolar')}>EURO EM DÓLAR</button>
            <button onClick={() => transform('euroLibra')}>EURO EM LIBRA</button>
            <button onClick={() => transform('libraReal')}>LIBRA EM REAL</button>
            <button onClick={() => transform('libraDolar')}>LIBRA EM DÓLAR</button>
            <button onClick={() => transform('libraEuro')}>LIBRA EM EURO</button>

            {openModal && (
                <Modal closeModal={() => setOpenModal(!setOpenModal)} status={status}/>
            )}
        </section>
    )
}