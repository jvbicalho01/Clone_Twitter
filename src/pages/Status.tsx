import { Header } from "../components/Header"
import { Separator } from "../components/Separator"
import { Tweet } from "../components/Tweet"

import "./Status.css"

const answers = [
  'Meu primeiro tweet',
  'Teste',
  'Hello World'
]

export function Status() {

  return (
    <main className='timeline'>
      <Header title="Tweet" />

      <Tweet content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit nam animi reiciendis dolores ex, qui quaerat iste culpa fuga perferendis a reprehenderit, quae explicabo officiis! Eius inventore maiores omnis eum?" />

      <Separator />

      <form className='answer-tweet-form'>
        <label htmlFor="tweet">
          <img src="https://github.com/jvbicalho01.png" alt="João Vítor Bicalho" />
          <textarea id="tweet" placeholder="Tweet your answer" />
        </label>

        <button type='submit'>Answer</button>
      </form>

      {answers.map(answer => {
        return (
          <Tweet key={answer} content={answer} />
        )
      })}

    </main>
  )
}