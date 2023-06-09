import { openDB } from './config/db.js'
import {
  CREATE_TABLE_OCORRENCIA,
  CREATE_TABLE_VITIMA,
  INSERT_VITIMA,
  INSERT_OCORRENCIA,
} from './config/queries.js'

const vitima = [
  {
    id: 1,
    nome_vitima: 'Maria Joaquina',
    genero_vitima: 'Feminino',
    idade: 21,
  },
  {
    id: 2,
    nome_vitima: 'Custódia',
    genero_vitima: 'Feminino',
    idade: 22,
  },
  {
    id: 3,
    nome_vitima: 'Anderson',
    genero_vitima: 'Masculino',
    idade: 23,
  },
  {
    id: 4,
    nome_vitima: 'Fernando',
    genero_vitima: 'Masculino',
    idade: 24,
  },
  {
    id: 5,
    nome_vitima: 'Marcelina',
    genero_vitima: 'Feminino',
    idade: 25,
  },
  {
    id: 6,
    nome_vitima: 'Patrick',
    genero_vitima: 'Masculino',
    idade: 26,
  },
]

const ocorrencia = [
  {
    id: 1,
    descricao: 'acidente de carro',
    endereco: 'Aquidauana',
    houve_obito: 1,
    vitima_id: 1, 
  },
  {
    id: 2,
    descricao: 'acidente de barco',
    endereco: 'Anastácio',
    houve_obito: 0,
    vitima_id: 2, 
  },
  {
    id: 3,
    descricao: 'acidente de moto',
    endereco: 'Aquidauana',
    houve_obito: 1,
    vitima_id: 3, 
  },
  {
    id: 4,
    descricao: 'acidente de carro',
    endereco: 'Campo Grande',
    houve_obito: 1,
    vitima_id: 4, 
  },
  {
    id: 5,
    descricao: 'acidente doméstico',
    endereco: 'Aquidauana',
    houve_obito: 0,
    vitima_id: 5, 
  },
  {
    id: 6,
    descricao: 'acidente de trabalho',
    endereco: 'Aquidauana',
    houve_obito: 1,
    vitima_id: 6, 
  },
]

;(async () => {
  const db = await openDB()
  await db.exec(CREATE_TABLE_OCORRENCIA)
  await db.exec(CREATE_TABLE_VITIMA)

 

  for (let i = 0; i < vitima.length; i++) {
    const { id, nome_vitima, genero_vitima, idade } =
      vitima[i]

    console.log({ id, nome_vitima, genero_vitima, idade })

    await db.run(
      INSERT_VITIMA,
      id,
      nome_vitima,
      genero_vitima,
      idade,
    )

    console.log(`Vitima #${i + 1} adcionada`)
  }

  for (let i = 0; i < ocorrencia.length; i++) {
    const { id, descricao, endereco, houve_obito, vitima_id } = ocorrencia[i]

    console.log({
      id,
      descricao,
      endereco,
      houve_obito,
      vitima_id,
    })

    await db.run(INSERT_OCORRENCIA, id, descricao, endereco, houve_obito, vitima_id)
    console.log(`--> Ocorrencia #${i + 1} adicionada`)
  }
})()
