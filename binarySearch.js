function iterativeFunction(arr, x) {
  let start = 0,
    end = arr.length - 1

  while (start <= end) {
    let mid = Math.floor((start + end) / 2)

    if (arr[mid] === x) return console.log('Element found: ' + arr[mid])
    // Else look in left or right half accordingly
    else if (arr[mid] < x) start = mid + 1
    else end = mid - 1
  }

  return console.error(`Element ${x} does not exist in the list`)
}

// TEST CODE:
const arr = [1, 3, 5, 7, 8, 9]
let x = 5

iterativeFunction(arr, x, 0, arr.length - 1)
x = 6
iterativeFunction(arr, x, 0, arr.length - 1)

function iterativeFunctionRecursirve(arr, y, start, end) {
  if (start > end)
    return console.error(`Element ${y} does not exist in the list`)

  const midValue = Math.floor((start + end) / 2)

  if (arr[midValue] === y) return console.log('Element found: ' + arr[midValue])

  if (arr[midValue] > y) {
    return iterativeFunctionRecursirve(arr, y, start, midValue - 1)
  } else {
    return iterativeFunctionRecursirve(arr, y, midValue + 1, end)
  }
}

// TEST CODE:
const array = [1, 3, 5, 7, 8, 9]
let y = 5

iterativeFunctionRecursirve(array, y, 0, array.length - 1)
y = 6
iterativeFunctionRecursirve(array, y, 0, array.length - 1)
