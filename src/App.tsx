import { ThemeProvider } from 'styled-components'
import Header from './components/Cabecalho'
import Hero from './components/Hero'
import ListaVagas from './containers/ListaVagas'

import './global.css'
import EstiloGlobal, { Container } from './styles'
import temaPrincipal from './themes/temaPrincipal'

function App() {
  return (
    <ThemeProvider theme={temaPrincipal}>
      <EstiloGlobal />
      <Header />
      <Hero />
      <Container>
        <ListaVagas />
      </Container>
    </ThemeProvider>
  )
}

export default App
