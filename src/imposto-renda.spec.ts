import { calculaIR } from './imposto-renda'
import { assert } from 'console'

describe('Cálculo de imposto de renda', () => {
  test('deve calcular corretamente para salarios maiores do que 2000.00', () => {
    expect(calculaIR(2020.00)).toEqual(154.0)
  })
})
