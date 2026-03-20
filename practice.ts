function flatten(arr: any[]): any[] {

  const result: any[] = []

  for (const item of arr) {

    if (Array.isArray(item)) {
      let finished = flatten(item)
      result.push(...finished)
    } else {
      result.push(item)
    }

  }

  return result
}