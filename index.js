// add solution here

function theBeatlesPlay(arrMu,arrIns){
  let newArr = []
  for (let i = 0; i <arrMu.length; i ++){
    let currentMusician = arrMu[i]
    let currentInstru = arrIns[i]
    newArr.push(`${currentMusician} plays ${currentInstru}`)
  }return newArr
}

function johnLennonFacts(arr){
  let i = 0
    i +=1
  let copy = []
  while (i <= arr.length){
    copy.push(arr.slice(arr[i], arr[i].length-1) + "!!!")
  }return copy
}
