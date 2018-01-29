// @flow
import * as React from 'react'
import ErrorText from './error-text'


type Props = {
  data: Object,
  type: string,
};

const Errors = ({data, type}: Props) => (
  <div>
    {data.filter(error => error.type === type).map(error => (
      <ErrorText key={error.detail} data={error} />
    ))}
  </div>
)

export default Errors
