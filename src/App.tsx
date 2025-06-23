import './index.css'
import { CriptoSearchForm } from './components/CriptoSearchForm'
import  {useCriptoStore} from './store'
import { useEffect } from 'react'


function App() {
  
const {fetchCriptos} = useCriptoStore()

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
        </div>

      </div>
    </>
  )
}

export default App
