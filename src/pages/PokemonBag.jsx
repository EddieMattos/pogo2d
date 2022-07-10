import { useContext, useState,useMemo, useEffect } from "react"
import CloseButton from "../components/CloseButton"
import UserContext from "../contexts/userContext"
import {useNavigate} from 'react-router-dom'

function PokemonBagScreen(){
   
    
    const {pokemonBag,setPokemonBag,music}= useContext(UserContext)
    const [busca, setBusca] = useState('')
    const navigate = useNavigate()


    useEffect(() => {
        music.current.pause()
    }, [])
    


    if (pokemonBag === []) return <></>

    const filtrados = useMemo(()=> {
        return pokemonBag.filter((filtrado)=> filtrado.name.toLowerCase().includes(busca.toLowerCase()))
       },[,pokemonBag,busca]) 


    return(
        <div id='tela' className='relative w-screen h-[100vh] overflow-hidden m-auto sm:w-[300px] sm:rounded-[20px] sm:border-[10px] sm:border-black sm:h-[90vh] sm:max-h-[600px] flex items-center justify-center'
        style={{background: 'linear-gradient(170deg, rgba(57,154,93,1) 20%, rgba(46,103,115,1) 83%)'}}
        >
        <div className="w-[95%] h-full bg-white p-2 flex flex-col items-center text-center">
    
        <h1>POKÉMON</h1>
        <h2>{pokemonBag.length}</h2>
        <input className="px-5 py-2 rounded-2xl bg-gray-100 text-center"
        type="text" name="busca" id="" value={busca}
        onChange={(ev) => setBusca(ev.target.value)}
        placeholder='🔍 Procurar'/>
        
        <div className="flex w-full flex-wrap mt-5 mx-auto items-center justify-center">
        {filtrados.map((pokemon) =>
        <div className="hover:scale-110 w-28 h-28 flex  flex-col justify-center text-center  sm:w-20 sm:h-20 mb-5"
        key={pokemon.id}>
        <div className="flex text-center items-center gap-2 justify-center ">
        <span className="text-sm font-mono">CP </span>
          <p>{pokemon.cp}</p>
          </div>
          <img width='60px'src={pokemon.imgbag} alt='' style={{ margin: '0 auto' }} />
          <p className="text-md sm:text-xs font-mono">{pokemon.name}</p>
          
        </div>
      )}
      </div>
        <div className="flex w-full items-center justify-center">
            <div className="absolute bottom-6">
            <CloseButton onclick={()=>{return navigate('/world')}}/>
            </div>
        </div>


        </div>
       
        </div>

    )
}

export default PokemonBagScreen