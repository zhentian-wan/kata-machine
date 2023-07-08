/**
 * Noramlly we would consider find middle point of the array
 * But if assume the first ball break, then we need to walk through
 * half of the array to find the breaking point.
 *
 * There fore the T: O(N/2) = O(N).
 *
 * We want better than that.
 *
 * So what we can do is we take step of sqrt(N) each time for the first ball
 * If it breaks, then we can walk through the sqrt(N) array to find the breaking point.
 *
 * O(sqrt(N)) < O(N)
 */
export default function two_crystal_balls(breaks: boolean[]): number {

    const jumpAmount = Math.floor(Math.sqrt(breaks.length))

    // using first ball to find the breaking point range
    let i = 0
    while (jumpAmount * i < breaks.length) {
        if (breaks[jumpAmount * i]) {
            break
        }
        i++
    }

    // using second ball to find actual breaking point
    let j = jumpAmount * (i - 1)
    for (let k =0; k < jumpAmount; k++) {
        if (breaks[j + k]) {
            return j + k
        }
    }

    return -1
}