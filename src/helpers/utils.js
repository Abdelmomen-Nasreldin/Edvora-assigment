export function groupProductsBy(objectArray, property) {
    return objectArray.reduce(function (acc, current) {
      let nameExist = acc.find((z)=> z.name === current[property])
  if(!nameExist){
  acc.push({name: current[property], products : [current]})
  } else{
  nameExist.products.push(current)
  }
      return acc
    }, [])
  }

  