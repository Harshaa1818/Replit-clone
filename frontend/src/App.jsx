
import { useEffect } from 'react'
import './App.css'
import  {Terminal as xterminal} from '@xterm/xterm'
import '@xterm/xterm/css/xterm.css'
function App() {
  useEffect(() => {
    const terminal = new xterminal({
      
      rows: 10,
      cols: 100,
     
    })
    terminal.open(document.getElementById('terminal'))
    terminal.write('Terminal')
    terminal.onData(e => {
      console.log(e)
    })

    return () => {
      terminal.dispose()
    }
  }, [])

  return (
    <div id='terminal'>
    
    </div>
  )
}

export default App
