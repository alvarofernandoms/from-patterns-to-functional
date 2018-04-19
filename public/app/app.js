import { log } from './utils/promises-helepers.js'
import './utils/array-helpers.js'
import { notasService as service } from './nota/service.js'
import { takeUntil } from './utils/operators.js'

const operation = takeUtil(3, () => {
  service
  .sumItems('2143')
  .then(console.log)
  .catch(console.log)
})

document
  .querySelector('#myButton')
  .onclick = operation