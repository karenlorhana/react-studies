import React from "react";
import Routes from "./routes";
import { AuthProvider, useAuth } from "./contexts/auth";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </div>
  );
}

export default App;
