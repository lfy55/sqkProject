let createColorL = function (color1, color2) {
  let c11 = parseInt(color1.substr(1, 2).toLowerCase(), 16)
  let c12 = parseInt(color1.substr(3, 2).toLowerCase(), 16)
  let c13 = parseInt(color1.substr(5, 2).toLowerCase(), 16)
  let c21 = parseInt(color2.substr(1, 2).toLowerCase(), 16)
  let c22 = parseInt(color2.substr(3, 2).toLowerCase(), 16)
  let c23 = parseInt(color2.substr(5, 2).toLowerCase(), 16)

  return {
    c11: c11,
    c12: c12,
    c13: c13,
    c21: c21,
    c22: c22,
    c23: c23,
    getColor: function (num) {
      num = num > 1 ? 1 : num < 0 ? 0 : num
      let cr = Math.round((this.c21 - this.c11) * num + this.c11),
        cg = Math.round((this.c22 - this.c12) * num + this.c12),
        cb = Math.round((this.c23 - this.c13) * num + this.c13)

      return 'rgb(' + cr + ',' + cg + ',' + cb + ')'
    }
  }
}
var _ = {
  createColorL: createColorL
}