import * as joi from 'joi';

const schema = joi.object({
  name: joi.string().min(2).required().messages({
    'string.empty': '400|All fields must be filled',
    'string.required': '400|All fields must be filled',
    'string;min':'400| Name must be longer than 2 characters'
  }),
  email: joi.string().email().required().messages({
    'string.empty': '400|All fields must be filled',
    'string.required': '400|All fields must be filled',
    'string.email':'401|Incorrect email or password'
  }),
  password: joi.string().min(2).max(10).required().messages({
    'string.empty': '400|All fields must be filled',
    'string.required': '400|All fields must be filled',
    'string.min':'401|Incorrect email or password',
    'string.max':'401|Incorrect email or password'
  }),
  cpf: joi.string().min(11).max(11).messages({
    'string.empty': '400|All fields must be filled',
    'string.required': '400|All fields must be filled',
    'string.min':'401|Incorrect cpf',
    'string.max':'401|Incorrect cpf'
  })
})

export default schema;