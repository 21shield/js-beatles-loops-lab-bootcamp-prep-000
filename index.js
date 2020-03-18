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
  let copy = arr.slice(0,arr.length)
    let newArr = []
  while (i <= copy.length){
    i +=1
    newArr.push(copy[i]+ "!!!")
  
  }return newArr
}
