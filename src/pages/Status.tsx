import { FormEvent, KeyboardEvent, useState } from "react"
import { Header } from "../components/Header"
import { Separator } from "../components/Separator"
import { Tweet } from "../components/Tweet"

import "./Status.css"
import { PaperPlaneRight } from "@phosphor-icons/react"

export function Status() {

  const [newAnswers, setNewAnswers] = useState('')

  const [answers, setAnswers] = useState([
    'Concordo',
    'Faz sentido',
    'Parabéns pelo progresso'
  ])

  const createNewAnswers = (event: FormEvent) => {
    event.preventDefault()

    setAnswers([newAnswers, ...answers])
    setNewAnswers('')
  }

  const handleHotKeySubmit = (event: KeyboardEvent) => {
    if (event.key === 'Enter' && (event.ctrlKey || event.metaKey)) {
      setAnswers([newAnswers, ...answers])
      setNewAnswers('')
    }
  }

  return (
    <main className='timeline'>
      <Header title="Tweet" />

      <Tweet content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit nam animi reiciendis dolores ex, qui quaerat iste culpa fuga perferendis a reprehenderit, quae explicabo officiis! Eius inventore maiores omnis eum?" />

      <Separator />

      <form onSubmit={createNewAnswers} className='answer-tweet-form'>
        <label htmlFor="tweet">
          <img src="https://github.com/jvbicalho01.png" alt="João Vítor Bicalho" />
          <textarea
            id="tweet"
            placeholder="Tweet your answer"
            value={newAnswers}
            onKeyDown={handleHotKeySubmit}
            onChange={(event) => {
              setNewAnswers(event.target.value)
            }}
          />
        </label>

        <button type='submit'>
          <PaperPlaneRight />
          <span>Answer</span>
        </button>
      </form>

      {answers.map(answer => {
        return (
          <Tweet key={answer} content={answer} />
        )
      })}

    </main>
  )
}