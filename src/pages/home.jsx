import React from 'react'
import Errors from '../shared/error'
import ErrorText from '../shared/error/error-text'

import { errors } from '../shared/error/json'


const HomePage = () => (
  <section role="main">
    <article>
      <h1>Home</h1>
      <hr />

      <Errors data={errors} type="password">
        <ErrorText theme="default" />
      </Errors>

    </article>
  </section>
)

export default HomePage
