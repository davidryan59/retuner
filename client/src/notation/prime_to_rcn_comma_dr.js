const primeToRcnCommaDr = (p) => {
  // See https://arxiv.org/pdf/1612.01860.pdf

  const logp = Math.log(p)  // Natural logs
  const log2 = Math.log(2)
  const log3 = Math.log(3)

  const log2p = logp / log2
  const log3p = logp / log3
  const log2_3 = log3 / log2

  const bmid = -log3p / 2
  const bmin1 = Math.round(bmid - (12-1)/2)
  const bmax1 = Math.round(bmid + (12-1)/2)
  const bmin2 = Math.ceil(-log3p - 1 / (2 * log2_3))
  const bmax2 = 0
  const bmin = Math.min(bmin1, bmin2)
  const bmax = Math.max(bmax1, bmax2)

  // console.log(`Prime ${p} searching b from ${bmin} to ${bmax}`)

  const results = []
  for (var b = bmin; b <= bmax; b++) {
    const a = Math.round(-log2p - b * log2_3);
    const pcand = (2 ** a) * (3 ** b) * p
    const absOct = Math.abs(Math.log2(pcand));
    const logCY = Math.log2((2 ** Math.abs(a)) * (3 ** Math.abs(b)) * p);
    const commaMeasure = absOct * logCY
    results.push([commaMeasure, a, b])
    // results.push([commaMeasure, a, b, p, pcand, absOct, logCY])  // DEBUG only
  }

  let minIndex = 0
  let minValue = 1000000
  for (const i in results) {
    const row = results[i]
    const commaMeasure = row[0]
    if (commaMeasure < minValue) {
      minValue = commaMeasure
      minIndex = i
    }
  }

  const aFinal = results[minIndex][1]
  const bFinal = results[minIndex][2]

  // console.log(`Prime ${p} is approximately 2^${-aFinal} * 3^${-bFinal}`)

  return [aFinal, bFinal]
}

export default primeToRcnCommaDr
