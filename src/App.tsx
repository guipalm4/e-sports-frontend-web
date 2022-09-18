import './styles/main.css'
import logo from './assets/logo.svg'

import GameBanner from './components/GameBanner/GameBanner'
import { useEffect, useState } from 'react'
import CreateAdBanner from './components/CreateAdBanner/CreateAdBanner'

interface Game {
  id: string
  title: string
  bannerUrl: string
  _count: {
    ads: number
  }
}

function App() {

  const [games, setGames] = useState<Game[]>([])

  useEffect(() => {
    fetch('http://localhost:3333/games')
    .then(response => response.json())
    .then(data => setGames(data))
  }, [])

  function renderGameBanner(game:Game) {
    return(
      <GameBanner
        key={game.id}
        bannerUrl={game.bannerUrl} 
        title={game.title}
        adsCount={game._count?.ads}
      />
    )
  }
  
  return (
    <div className='max-w-[1344px] mx-auto flex flex-col items-center my-20'> 
      <img src={logo} alt=""/>
      
      <h1 className='text-6xl text-white font-black mt-20'>
        Seu <span className='text-transparent bg-gradient bg-clip-text'>duo</span> está aqui.
      </h1>      
      <div className='grid grid-cols-6 gap-6 mt-16'>
        {games.map(game=> renderGameBanner(game))}       
      </div>

      <CreateAdBanner />
    
    </div>

    
  )
}

export default App
