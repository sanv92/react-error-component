// @flow
import * as React from 'react'


const renderChildren = (children: React.Node, error: {data: Object}) => (
  React.Children.map(children, child => (
    React.cloneElement(child, {
      data: error,
    })
  ))
)


type Props = {
  children: React.Node,
  data: Object,
  type: string,
};

const Errors = ({children, data, type}: Props) => (
  <div>
    {data.filter(error => error.type === type).map(error => renderChildren(children, error))}
  </div>
)

export default Errors
