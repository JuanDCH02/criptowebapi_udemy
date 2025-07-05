import './index.css'
import { CriptoSearchForm } from './components/CriptoSearchForm'
import {CryptoPriceDisplay} from './components/CryptoPriceDisplay'
import  {useCryptoStore} from './store'
import { useEffect } from 'react'


function App() {
  
const {fetchCriptos} = useCryptoStore()

useEffect(() => {
  const fetchData = async () => {
    await fetchCriptos();
  };
  fetchData();
}, [fetchCriptos])

  return (
    <>
      <div className="container">

        <h1 className="app-title"
          >cotizador de <span>criptomonedas</span>
        </h1>

        <div className='content'>
          <CriptoSearchForm/>
          {<CryptoPriceDisplay/>}
        </div>

      </div>
    </>
  )
}

export default App
