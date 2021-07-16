function App() {
  const [userColor, setUserColor] = React.useState('#3DB7F4');

  return <div>
    <SeletorDeCores onChange={setUserColor} />
    <p style={{ color: userColor }}>Olá mundo colorido</p>
  </div>
}


function App() {
  const [userColor, setUserColor] = React.useState('#3DB7F4');

  return <ContextoCorUsuario.Provider value={userColor}>
    <SeletorDeCores onChange={setUserColor} />
    <TextoColorido>Olá mundo colorido</TextoColorido>
    <Dashboard />
  </ContextoCorUsuario.Provider>
}