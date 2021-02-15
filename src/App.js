import React, { useState } from 'react'

import './App.css'
import backgroundImage from './assets/background.jpg'

import Header from './components/Header'

function App() {
  const [projects, setProjects ] = useState(['Desenvolvimento App', 'Front-end Web'])
  //const projects = useState(['Desenvolvimento App', 'Front-end Web'])
  //useState retorna um array com 2 posiçoes

  //1 posiçao é o valor da variavel mesmo
  //2 posiçao é uma funçao que irá atualizar o valor do state

  function handleAddProject() {    
    setProjects([...projects, `Novo Projeto: ${Date.now()}`])
    
    //projects.push(`Novo Projeto: ${Date.now()}`)
    //em React existe o conceito de imutabilidade, ou seja, nunca podemos mutar o valor de uma variavel, nesse caso, criamos um novo array, passando para setProjects, que é a funcao que atualiza nosso state, novamente o projects, que é nosso objeto que sera atualizado, usando o operador ... fazendo assim termos todos os dados que o nosso state já possuia, e como 2 parametro para a função, simplesmente adicionamos o novo projeto
  }

  return (
    <>
      <Header title='Projects' />

      <img width={300} src={backgroundImage} alt="background"/>
      <ul>
        {projects.map(project => <li key={project}>{project}</li>)}
      </ul>
      <button type='button' onClick={handleAddProject}>Adicionar</button>
    </>
  )
}

export default App