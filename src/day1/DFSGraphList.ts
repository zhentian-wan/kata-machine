function walk(
    graph: WeightedAdjacencyList,
    curr: number,
    needle: number,
    seen: boolean[],
    path: number[],
) {
    // base case
    if (seen[curr]) {
        return false;
    }

    seen[curr] = true;
    if (curr === needle) {
        path.push(curr);
        return true;
    }
    // pre
    path.push(curr);

    const list = graph[curr];
    for (let i = 0; i < list.length; i++) {
        const edge = list[i];
        if (edge.weight !== 0 && walk(graph, edge.to, needle, seen, path)) {
            return true;
        }
    }

    // post
    path.pop();

    return false;
}

function traceDown(
    needle: number,
    source: number,
    path: number[],
): number[] | null {
    const out = [];
    let curr = needle;

    if (path[needle] === -1) {
        return null;
    }

    while (path[curr] !== -1) {
        out.push(curr);
        curr = path[curr];
    }

    out.push(source);

    return out.reverse();
}

export default function dfs(
    graph: WeightedAdjacencyList,
    source: number,
    needle: number,
): number[] | null {
    const path: number[] = [];
    const seen = Array.from({ length: graph.length }, () => false);

    walk(graph, source, needle, seen, path);

    if (path.length === 0) {
        return null;
    }

    return path;
}
