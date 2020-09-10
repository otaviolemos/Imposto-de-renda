// O IR (Imposto de Renda) é calculado da seguinte forma:
//   se salário-base > 2000, IR = (150) + (salário-base - 2000) * 20%
//   se 1000 < salário-base <= 2000, IR = (salário-base - 1000) * 15%
//   se salário-base <= 1000, IR = 0

export function calculaIR (salario: number): number {
  let ret: number = 0.0
  if (salario > 1000.0 && salario <= 2000.0) {
    ret += (salario - 1000.0) * (0.15)
  }
  if (salario > 2000.0) {
    ret += 150 + (salario - 2000.0) * (0.20)
  }
  if (salario > 3000.0) {
    ret += (salario - 3000.0) * (0.05)
  }
  return ret
}
