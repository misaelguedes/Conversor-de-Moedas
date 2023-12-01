import './modal.css'
import { FiX } from 'react-icons/fi'
import axios from 'axios'
import { useEffect, useState } from 'react'

import realDolar from '../../assets/real-em-dolar.jpg'
import realEuro from '../../assets/real-em-euro.jpg'
import realLibra from '../../assets/real-em-libra.jpg'
import dolarReal from '../../assets/dolar-em-real.jpg'
import dolarEuro from '../../assets/dolar-em-euro.jpg'
import dolarLibra from '../../assets/dolar-em-libra.jpg'

export default function Modal({closeModal, status}) {

    const [dolar, setDolar] = useState()
    const [euro, setEuro] = useState()
    const [libra, setLibra] = useState()
    const [valor, setValor] = useState()
    const [resultado, setResultado] = useState()

    useEffect(() => {
        axios.get('https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,GBP-BRL')
        .then((res) => {
            setDolar(parseFloat(res.data.USDBRL.high).toFixed(2))
            setEuro(parseFloat(res.data.EURBRL.high).toFixed(2))
            setLibra(parseFloat(res.data.GBPBRL.high).toFixed(2))
        })
        .catch((err) => {
            console.log(err)
            alert('Ocorreu um erro ao tentar obter as taxas de câmbio no momento. Por favor, verifique sua conexão com a internet e tente novamente mais tarde.')
        })
    }, [])

    return (
        <div className='modal'>
            <div className='modal-container'>
                <button className='close' onClick={closeModal}>
                    <FiX/>
                </button>
                {status === 'realDolar' && (
                    <div>
                        <img className='img' src={realDolar} alt='Real em Dólar'/>
                        <p>R$: <input type='number' placeholder='00,00' required onChange={(res) => setValor(res.target.value)}/>
                        <button className='calcular' onClick={() => setResultado(valor / dolar)}>Calcular</button></p>
                        {valor !== '' && !isNaN(resultado) && (
                            <p className='res'>US$: {resultado.toFixed(2)}</p>
                        )}
                    </div>
                )}
                {status === 'realEuro' && (
                    <div>
                        <img className='img' src={realEuro} alt='Real em Euro'/>
                        <p>R$: <input type='number' placeholder='00,00' required onChange={(res) => setValor(res.target.value)}/>
                        <button className='calcular' onClick={() => setResultado(valor / euro)}>Calcular</button></p>
                        {valor !== '' && !isNaN(resultado) && (
                            <p className='res'>&euro;: {resultado.toFixed(2)}</p>
                        )}
                    </div>
                )}
                {status === 'realLibra' && (
                    <div>
                        <img className='img' src={realLibra} alt='Real em Libra'/>
                        <p>R$: <input type='number' placeholder='00,00' required onChange={(res) => setValor(res.target.value)}/>
                        <button className='calcular' onClick={() => setResultado(valor / libra)}>Calcular</button></p>
                        {valor !== '' && !isNaN(resultado) && (
                            <p className='res'>&pound;: {resultado.toFixed(2)}</p>
                        )}
                    </div>
                )}
                {status === 'dolarReal' && (
                    <div>
                        <img className='img' src={dolarReal} alt='Dólar em Real'/>
                        <p>US$: <input type='number' placeholder='00,00' required onChange={(res) => setValor(res.target.value)}/>
                        <button className='calcular' onClick={() => setResultado(valor * dolar)}>Calcular</button></p>
                        {valor !== '' && !isNaN(resultado) && (
                            <p className='res'>R$: {resultado.toFixed(2).replace('.', ',')}</p>
                        )}
                    </div>
                )}
                {status === 'dolarEuro' && (
                    <div>
                        <img className='img' src={dolarEuro} alt='Dólar em Euro'/>
                        <p>US$: <input type='number' placeholder='00,00' required onChange={(res) => setValor(res.target.value)}/>
                        <button className='calcular' onClick={() => setResultado(valor / ((euro - dolar) + 1))}>Calcular</button></p>
                        {valor !== '' && !isNaN(resultado) && (
                            <p className='res'>&euro;: {resultado.toFixed(2)}</p>
                        )}
                    </div>
                )}
                {status === 'dolarLibra' && (
                    <div>
                        <img className='img' src={dolarLibra} alt='Dólar em Libra'/>
                        <p>US$: <input type='number' placeholder='00,00' required onChange={(res) => setValor(res.target.value)}/>
                        <button className='calcular' onClick={() => setResultado(valor / ((libra - dolar) + 1))}>Calcular</button></p>
                        {valor !== '' && !isNaN(resultado) && (
                            <p className='res'>&pound;: {resultado.toFixed(2)}</p>
                        )}
                    </div>
                )}
                {status === 'euroReal' && (
                    <div>
                        <img className='img' src={realEuro} alt='Euro em Real'/>
                        <p>&euro;: <input type='number' placeholder='00,00' required onChange={(res) => setValor(res.target.value)}/>
                        <button className='calcular' onClick={() => setResultado(valor * euro)}>Calcular</button></p>
                        {valor !== '' && !isNaN(resultado) && (
                            <p className='res'>R$: {resultado.toFixed(2).replace('.', ',')}</p>
                        )}
                    </div>
                )}
                {status === 'euroDolar' && (
                    <div>
                        <img className='img' src={dolarEuro} alt='Euro em Dólar'/>
                        <p>&euro;: <input type='number' placeholder='00,00' required onChange={(res) => setValor(res.target.value)}/>
                        <button className='calcular' onClick={() => setResultado(valor * ((euro - dolar) + 1))}>Calcular</button></p>
                        {valor !== '' && !isNaN(resultado) && (
                            <p className='res'>US$: {resultado.toFixed(2)}</p>
                        )}
                    </div>
                )}
                {status === 'euroLibra' && (
                    <div>
                        <img className='img' src={realLibra} alt='Euro em Libra'/>
                        <p>&euro;: <input type='number' placeholder='00,00' required onChange={(res) => setValor(res.target.value)}/>
                        <button className='calcular' onClick={() => setResultado(valor / ((libra - euro) + 1))}>Calcular</button></p>
                        {valor !== '' && !isNaN(resultado) && (
                            <p className='res'>&pound;: {resultado.toFixed(2)}</p>
                        )}
                    </div>
                )}
                {status === 'libraReal' && (
                    <div>
                        <img className='img' src={realLibra} alt='Libra em Real'/>
                        <p>&pound;: <input type='number' placeholder='00,00' required onChange={(res) => setValor(res.target.value)}/>
                        <button className='calcular' onClick={() => setResultado(valor * libra)}>Calcular</button></p>
                        {valor !== '' && !isNaN(resultado) && (
                            <p className='res'>R$: {resultado.toFixed(2).replace('.', ',')}</p>
                        )}
                    </div>
                )}
                {status === 'libraDolar' && (
                    <div>
                        <img className='img' src={dolarLibra} alt='Libra em Dólar'/>
                        <p>&pound;: <input type='number' placeholder='00,00' required onChange={(res) => setValor(res.target.value)}/>
                        <button className='calcular' onClick={() => setResultado(valor * ((libra - dolar) + 1))}>Calcular</button></p>
                        {valor !== '' && !isNaN(resultado) && (
                            <p className='res'>US$: {resultado.toFixed(2)}</p>
                        )}
                    </div>
                )}
                {status === 'libraEuro' && (
                    <div>
                        <img className='img' src={realLibra} alt='Libra em Euro'/>
                        <p>&pound;: <input type='number' placeholder='00,00' required onChange={(res) => setValor(res.target.value)}/>
                        <button className='calcular' onClick={() => setResultado(valor * ((libra - euro) + 1))}>Calcular</button></p>
                        {valor !== '' && !isNaN(resultado) && (
                            <p className='res'>&euro;: {resultado.toFixed(2)}</p>
                        )}
                    </div>
                )}
            </div>
        </div>
    )
}