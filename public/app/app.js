import { log, promiseTimeout, retry } from './utils/promises-helepers.js'
import './utils/array-helpers.js'
import { notasService as service } from './nota/service.js'
import { takeUntil, debounceTime, partialize, pipe } from './utils/operators.js'

const operations = pipe(
  partialize(takeUntil, 3),
  partialize(debounceTime, 500),
)

const action = operations(() =>
  retry(3, 3000, () => promiseTimeout(200, service.sumItems('2143')))
  .then(console.log)
  .catch(console.log)
)

document
  .querySelector('#myButton')
  .onclick = action