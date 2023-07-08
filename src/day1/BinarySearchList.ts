/**
 * low, high, mid
 * do {
 *  mid = (low + high) / 2
 *  if (v === needle) return true
 *  elif (v < needle) low = mid + 1
 *  else high = mid - 1
 * } while (low < high)
 * always: [low, high)
 */
export default function bs_list(haystack: number[], needle: number): boolean {
    let low = 0, high = haystack.length;

    do {
        const mid = Math.floor((low + high) / 2)
        const v = haystack[mid]
        if (v === needle) return true
        else if(v < needle) {
            low = mid + 1
        } else {
            high = mid - 1
        }
    } while (low < high)

    return false
}