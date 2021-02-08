import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { SwitchMode } from './components/SwitchMode';
import { Footer } from './components/Footer'
import { GlobalStyle } from './theme/GlobalStyle'
import styled, { ThemeProvider } from 'styled-components';
import { darkMode, lightMode } from './theme';
import { fetchEndpoint } from './function/asyncro'
import { ServerError } from './components/ErrorHandler';
import { changeTheme } from './reducer/reducerTodo';
import { AppComponent } from './components/AppComponent';




function App() {
  let state = useSelector(state => state)
  let dispatch = useDispatch()
  let theme  = state.theme;
  let mode = localStorage.getItem('mode') 
  let modStatus = mode !== null ? mode : theme


useEffect(()=>{
    dispatch(fetchEndpoint('http://localhost:3001/todos')) 
    dispatch(changeTheme(mode))
  },[])

  return (

      <ThemeProvider theme={modStatus === 'light' ? lightMode : darkMode}>
        <GlobalStyle />
        <Container>
          <SwitchMode mode={modStatus}/>
          <h1>👓 Organizza la tua giornata!</h1>
          {state.serverError ? <ServerError message={state.serverError}/> :  <AppComponent />}         
          <Footer />
        </Container>
      </ThemeProvider>

  );
}

const Container = styled.div  `
  width: 80%;
  margin: 0 auto;
  position:relative;
`


export default App;
