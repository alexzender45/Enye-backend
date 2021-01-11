import { BaseController } from '.';
const fetch = require('node-fetch');

export class Controller extends BaseController {
  constructor() {
    super();
  }
  async fetchSeveralTest(req, res, next) {
    let base = req.query.base
    let currency = req.query.currency.split(',')
    try {
      fetch(`https://api.exchangeratesapi.io/latest?base=${base}&symbols=${currency}`)
    .then(res => res.json())
    .then(data => {
      return res.status(200).send({
        results:{
          'base':data.base,
          'date':data.date,
          rates:data.rates
        }
      });
    })
    } catch (e) {
      success(res, e);
    }
  }
}
