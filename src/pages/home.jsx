import React from 'react'
import Errors from '../shared/error'

import { errors } from '../shared/error/json'


const HomePage = () => (
  <section role="main">
    <article>
      <h1>Home</h1>
      <hr />

      <Errors data={errors} type="password" theme="default" />

    </article>
  </section>
)

export default HomePage
