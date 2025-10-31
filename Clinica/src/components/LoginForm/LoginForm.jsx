import { useEffect, useState } from "react"
import { useAuth } from "../../contexts/AuthContext"
import axios from "axios"
import { toast } from "react-toastify"

import { useNavigate } from "react-router"
import Modal from "../Modal/Modal"
import RegisterUser from "../RegisterUser/RegisterUser"

export default function LoginForm() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  //contexto
  const { login, user } = useAuth()
  //rotas com react router
  const navigate = useNavigate();

  //modal
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    if(user){
      navigate('/DashBoard')
    }
  }, [user,navigate])



  const handleLogin = async (e) => {
    e.preventDefault()

    try {
      const data = {
        email: email,
        senha: password
      }

      const res = await axios.post('http://localhost:3000/auth/login', data)
      // console.log(res)
      const token = res.data.accessToken

      if (res.data.length === 0) {
        return toast.error('Usuario não encontrado', {
          autoClose: 3000,
          hideProgressBar: true,
          pauseOnHover: false
        })
      }

      login(email)
      toast.success('Login realizado com sucesso!', {
        autoClose: 3000,
        hideProgressBar: true,
        pauseOnHover: false
      })
      navigate('/DashBoard')
      // setTimeout(() => , 2000)

    }
    catch (error) {
      console.log('Erro ao de conexão:', error);
      toast.error('Erro ao conectar ao servidor', {
        autoClose: 3000,
        hideProgressBar: true,
        pauseOnHover: false
      })
    }
  }

  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-8 rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
      <form onSubmit={handleLogin} className="space-y-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1">Email:</label>
          <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>

        <div>
          <label htmlFor="password" className=" block text-sm font-medium mb-1">Senha: </label>
          <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required minLength={8} className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>

        <button type="submit" className="w-full bg-cyan-700 text-white p-2 rounded-lg hover:bg-cyan-800 transition-colors cursor-pointer"> Entrar</button>
      </form>

      <div className="flex justify-between mt-4 text-sm">
        <button className="cursor-pointer">Esqueceu sua senha?</button>
        <button className="cursor-pointer" onClick={() => setIsModalOpen(true)}>Criar Conta</button>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <RegisterUser />
      </Modal>

    </div>

  )
}