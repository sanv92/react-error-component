// @flow
import React from 'react'


type Props = {
  data: {
    detail: string,
  }
};

const ErrorText = ({ data }: Props) => (
  <p>
    {data.detail}
  </p>
)

export default ErrorText
