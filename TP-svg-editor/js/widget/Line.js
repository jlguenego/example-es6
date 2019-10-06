export class Line {
    depose(board, event) {
        console.log('event: ', event);
        const x1 = 10;
        const y1 = 20;
        const x2 = x1 + 100;
        const y2 = y1 + 100;

        const line = document.createElementNS("http://www.w3.org/2000/svg", 'line');
        line.setAttribute('x1', x1);
        line.setAttribute('x2', x2);
        line.setAttribute('y1', y1);
        line.setAttribute('y2', y2);
        line.setAttribute('stroke', 'black');
        board.svg.appendChild(line);
    }
}