// @flow
import React from 'react'


type Props = {
  data: {
    detail: string,
  }
};

const defaultStyle = {
  color: '#ff0000',
}

const ErrorText = ({ data }: Props) => (
  <p style={defaultStyle}>
    {data.detail}
  </p>
)

export default ErrorText
