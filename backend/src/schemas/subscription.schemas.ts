import * as joi from 'joi';

const schema = joi.object({
  productId: joi.number().required().error(new Error('Error passing when making request')),
})

export default schema;