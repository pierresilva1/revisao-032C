import { useState } from "react"
import "./App.css"

export function App() {
  const [usuario, setUsuario] = useState("")
  const [senha, setSenha] = useState("")
  
  function hendleUsuario(evento) {
    setUsuario(evento.target.value)
  }
  function hendleSenha(evento) {
    setSenha(evento.target.value)
  }

  function hendleSubmit() {
    alert(`
    Usuário: ${usuario}
    Senha: ${senha}
    `)
  }
  console.log(usuario)
  console.log(senha)




  return (
    <>
      <header>
        <h1>Login</h1>
      </header>

      <main>
        <form action="" onSubmit={hendleSubmit}>
          <div>
            <label htmlFor="usuario">Usuário</label>
            <input type="text" id="usuario" placeholder="Digite seu usuário" onChange={hendleUsuario} />
          </div>
          <div>
            <label htmlFor="senha">Senha</label>
            <input type="password" id="senha" placeholder="Digite seu senha" onChange={hendleSenha} />
          </div>
          
          <button>Entrar</button>
        </form>
      </main>
    </>
  )
}

