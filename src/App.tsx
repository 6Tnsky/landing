import { Header } from './components/Header'
import { Block2 } from './sections/Block2'
import { Block3 } from './sections/Block3'
import { Block4 } from './sections/Block4'
import { Block5 } from './sections/Block5'
import { Block6 } from './sections/Block6'
import { Block7 } from './sections/Block7'
import { Block8 } from './sections/Block8'
import { Block9 } from './sections/Block9'
import { Block10 } from './sections/Block10'
import { Block11 } from './sections/Block11'

function App() {
  return (
    <div className="min-h-dvh">
      <Header />
      <main>
        <Block2 />
        <Block3 />
        <Block4 />
        <Block5 />
        <Block6 />
        <Block7 />
        <Block8 />
        <Block9 />
        <Block10 />
        <Block11 />
      </main>
    </div>
  )
}

export default App
