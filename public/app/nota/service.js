import { handleStatus } from '../utils/promises-helepers.js'

const API = 'http://localhost:3000/notas'

const sumItems = code => notas =>
  notas.$flatMap(notas => notas.itens)
  .filter(item => item.codigo == '2143')
  .reduce((total, item) => (total + item.valor), 0)

export const notasService = {
  listAll() {
    return fetch(API)
    .then(handleStatus)
    .catch(err => {
      console.log(err)
      return Promise.reject('Não foi possível obter as notas fiscais')
    })
  },

  sumItems(code) {
    return this.listAll().then(sumItems(code))
  }
}