export default function bfs(
    graph: WeightedAdjacencyMatrix,
    source: number,
    needle: number,
): number[] | null {
    const queue: number[] = [];
    const visited = Array.from({ length: graph.length }, () => false);
    const path = Array.from({ length: graph.length }, () => -1);

    // Add source to the visited array
    visited[source] = true;
    queue.push(source);

    while (queue.length) {
        const current = queue.shift() as number;
        if (current === needle) {
            break;
        }
        const links = graph[current];
        for (let i = 0; i < links.length; i++) {
            if (visited[i] || links[i] === 0) {
                continue;
            }
            visited[i] = true;
            path[i] = current;

            queue.push(i);
        }
    }

    if (path[needle] === -1) {
        return null;
    }

    let curr = needle;
    let out = [];

    while (path[curr] !== -1) {
        out.push(curr);
        curr = path[curr];
    }

    if (out.length) {
        out.push(source);
    }

    return out.reverse();
}
