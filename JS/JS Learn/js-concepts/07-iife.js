// // Immediate Invoked Function Expression

const result = []

for (var i = 0; i < 5; i++) {
  (function (j) {
    result.push(function () {
      console.log(j)
    })
  })(i)
}

result[1]()
result[4]()

