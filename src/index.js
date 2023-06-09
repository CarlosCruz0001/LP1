import { openDB } from './config/db.js'
import {
  SELECT_VITIMA_BY_AGE,
  SELECT_OCORRENCIA_BY_FEM_OBITO,
  SELECT_OCORRENCIA_BY_ENDERECO,
} from './config/queries.js'
;(async () => {
  const db = await openDB()

  let results = await db.all(SELECT_OCORRENCIA_BY_ENDERECO, '%quidaua%')
  console.log(results)

  results = await db.all(
    SELECT_OCORRENCIA_BY_FEM_OBITO)
  console.log(results)

  results = await db.all(SELECT_VITIMA_BY_AGE)
  console.log(results)
})()
