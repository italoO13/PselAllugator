import * as joi from 'joi';

const schema = joi.object({
  email: joi.string().email().required().error(new Error('Non-standard email or password')),
  password: joi.string().required().error(new Error('Non-standard email or password')),
})

export default schema;