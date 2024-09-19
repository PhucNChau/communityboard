import './App.css'
import Header from './components/Header';
import Card from './components/Card';

const App = () => {
  return (
    <div className='App'>
    <Header />
      <div className='Board'>
        <Card imageUrl='src/assets/azul.png' gameName='Azul' rating='7.7' age='8+' extLink='https://boardgamegeek.com/boardgame/230802/azul' />
        <Card imageUrl='src/assets/blood_rage.png' gameName='Blood Rage' rating='7.9' age='14+' extLink='https://boardgamegeek.com/boardgame/170216/blood-rage' />
        <Card imageUrl='src/assets/cascadia.png' gameName='Cascadia' rating='7.9' age='10+' extLink='https://boardgamegeek.com/boardgame/295947/cascadia' />
        <Card imageUrl='src/assets/decrypto.png' gameName='Decrypto' rating='7.8' age='12+' extLink='https://boardgamegeek.com/boardgame/225694/decrypto' />
        <Card imageUrl='src/assets/dune.png' gameName='Dune' rating='8.7' age='13+' extLink='https://boardgamegeek.com/boardgame/397598/dune-imperium-uprising' />
        <Card imageUrl='src/assets/el_grande.png' gameName='El Grande' rating='7.8' age='12+' extLink='https://boardgamegeek.com/boardgame/93/el-grande' />
        <Card imageUrl='src/assets/frosthaven.png' gameName='Frosthaven' rating='8.8' age='14+' extLink='https://boardgamegeek.com/boardgame/295770/frosthaven' />
        <Card imageUrl='src/assets/monikers.png' gameName='Monikers' rating='7.8' age='17+' extLink='https://boardgamegeek.com/boardgame/156546/monikers' />
        <Card imageUrl='src/assets/nemesis.png' gameName='Nemesis' rating='8.3' age='12+' extLink='https://boardgamegeek.com/boardgame/167355/nemesis' />
        <Card imageUrl='src/assets/race_galaxy.png' gameName='Race for the Galaxy' rating='7.7' age='12+' extLink='https://boardgamegeek.com/boardgame/28143/race-for-the-galaxy' />
        <Card imageUrl='src/assets/root.png' gameName='Root' rating='8.1' age='10+' extLink='https://boardgamegeek.com/boardgame/237182/root' />
        <Card imageUrl='src/assets/sleeping_god.png' gameName='Sleeping Gods' rating='8.2' age='13+' extLink='https://boardgamegeek.com/boardgame/255984/sleeping-gods' />
      </div>
    </div>
  )
}

export default App;
