
import {GrFormNext, GrFormPrevious } from "react-icons/gr"
import UserForm from './components/UserForm'
import ReviewForm from './components/ReviewForm'
import Thanks from './components/Thanks'

import { UseForm } from "./hooks/useForm"

import './App.css'

function App() {


  const formComponents = [<UserForm />, <ReviewForm />, <Thanks />]

  const {currentStep, currentComponent} = UseForm(formComponents)


  return (
   <div className="app">
    <div className="header">
        <h2>Deixe sua Avaliação</h2>
        <p>Obrigado pela confiança, utilize o formulário abaixo para avaliar o produto</p>
    </div>
    <div className="form-container">
      <p>etapas</p>
      <form>
        <div className="inputs-container">{currentComponent}</div>
        <div className="actions">
          <button type="button">
            <GrFormPrevious />
            <span>Voltar</span>
          </button>
          <button type="submit">
            <span>Avançar</span>
            <GrFormNext />
            </button>
        </div>
      </form>
    </div>
   </div>
   
  )
}

export default App
