import React from 'react'
import { useGlobalContext } from './context'

const SetupForm = () => {
  const {quiz, handleChange, handleSubmit, error}=useGlobalContext()
  return <main>
    <section className="quiz quiz-small">
      <form action="" className='setup-form'>
        <h2>setup quiz</h2>
        {/* {amount} */}
        <div className="form-control">
          <label htmlFor="amount">number of questions</label>
          <input type="number"
            name='amount'
            id='amount'
            value={quiz.amount}
            onChange={handleChange}
            className='form-input'
            min={1}
            max={50} />
        </div>
            {/* {category} */}
        <div className="form-control">
        <label htmlFor="category">category</label>
        <select type="text"
          name='category'
          id='category'
          className='form-input'
          value={quiz.category}
          onChange={handleChange}
        >
          <option value="sports">sports</option>
          <option value="history">history</option>
          <option value="politics">politics</option>
          </select>
          </div>
            {/* {dificulty} */}
        <div className="form-control">
        <label htmlFor="dificulty">select dificulty</label>
        <select type="text"
          name='dificulty'
          id='dificulty'
          className='form-input'
          value={quiz.dificulty}
          onChange={handleChange}
        >
          <option value="easy">easy</option>
          <option value="medium">medium</option>
          <option value="hard">hard</option>
          </select>
          </div>
        {error && <p className='error'> can't generate questions, please try diferent options</p>}
        <button type='submit' onClick={handleSubmit} className='submit-btn'>start</button>
      </form>
    </section>
  </main>
}

export default SetupForm
