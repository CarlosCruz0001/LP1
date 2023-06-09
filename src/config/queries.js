export const CREATE_TABLE_VITIMA = `
  create table if not exists vitima (
    id integer primary key,
    nome_vitima text not null,
    genero_vitima text not null,
    idade integer not null
  )
`

export const CREATE_TABLE_OCORRENCIA = `
    create table if not exists ocorrencia (
      id integer primary key,
      descricao text not null,
      endereco text not null,
      houve_obito boolean not null,
      vitima_id integer not null,
      foreign key(vitima_id)
        references vitima(id)
    )
`

export const INSERT_VITIMA = `
      insert into vitima values (
        ?, ?, ?, ?
      )
`

export const INSERT_OCORRENCIA = `
      insert into ocorrencia values (
        ?, ?, ?, ?, ?
      )
`


export const SELECT_VITIMA_BY_AGE = `
        select * from vitima where idade >= 20 AND idade <=25
`

export const SELECT_OCORRENCIA_BY_FEM_OBITO = `
        select * from ocorrencia where houve_obito = 1 AND vitima_id IN (SELECT id FROM vitima WHERE genero_vitima='Feminino')
`
/*FALTA LIMITAR EM MULHER */

export const SELECT_OCORRENCIA_BY_ENDERECO = `
        select * from ocorrencia where lower(endereco) like lower(?)
`