import React  from 'react'
import Sidebar from './components/sidebar/Sidebar.jsx'
import Main from './components/main/main.jsx'
import ContextProvider from './context/context.jsx'
function App() {

  return (
    <>
       <ContextProvider>
      <Sidebar />
      <Main />
    </ContextProvider>
    </>
  )
}

export default App
