// Base case
// 1. Off the map
// 2. Hit a wall
// 3. Already visited
// 4. It's the end

const dirs = [
    [1, 0], //top
    [0, 1], //right
    [-1, 0], //bottom
    [0, -1], //left
];

function walk(
    maze: string[],
    wall: string,
    curr: Point,
    end: Point,
    seen: boolean[][],
    path: Point[],
): boolean {
    // Base case
    // 1. Off the map
    if (
        curr.x < 0 ||
        curr.x >= maze[0].length ||
        curr.y < 0 ||
        curr.y >= maze.length
    ) {
        return false;
    }

    // 2. Hit a wall
    if (maze[curr.y][curr.x] === wall) {
        return false;
    }

    // 3. Already visited
    if (seen[curr.y][curr.x]) {
        return false;
    }

    // 4. It's the end
    if (curr.y === end.y && curr.x === end.x) {
        path.push(curr);
        return true;
    }

    // do Recurse
    // pre
    // update seen array
    seen[curr.y][curr.x] = true;
    // add next point to the path
    path.push(curr);

    // recurse
    for (let i = 0; i < dirs.length; i++) {
        const [y, x] = dirs[i];
        if (
            walk(maze, wall, { y: curr.y + y, x: curr.x + x }, end, seen, path)
        ) {
            return true;
        }
    }

    // post
    // it's not the correct path, remove it
    path.pop();
    return false;
}

export default function solve(
    maze: string[],
    wall: string,
    start: Point,
    end: Point,
): Point[] {
    const seen: boolean[][] = Array.from({ length: maze.length }, () =>
        Array.from({ length: maze[0].length }, () => false),
    );
    const path: Point[] = [];
    walk(maze, wall, start, end, seen, path);
    return path;
}
