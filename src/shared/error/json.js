export const errors = [
  {
    status: '422',
    type: 'login',
    title: 'Invalid Attribute',
    detail: 'First name must contain at least three characters.',
  },
  {
    status: '422',
    type: 'login',
    title: 'Invalid Attribute',
    detail: 'Last name must contain at least three characters.',
  },
  {
    status: '422',
    type: 'login',
    title: 'Invalid Attribute',
    detail: 'Only [a-zA-Z] symbols are acceptable',
  },
  {
    status: '423',
    type: 'password',
    title: 'Invalid Attribute',
    detail: 'password can\'t be shorter than 6 symbols',
  },
  {
    status: '423',
    type: 'password',
    title: 'Invalid Attribute',
    detail: 'password should contain special characters (like !@#$, e.t.c.)',
  },
]
