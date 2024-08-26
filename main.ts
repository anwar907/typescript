type Direction = 'up' | 'down' | 'left' | 'right';

function main() {
    const move = (direction: Direction) => {
        switch (direction) {
            case 'up':
                console.log('up');
                break;
            case 'down':
                console.log('down');
                break;
            case 'left':
                console.log('left');
                break;
            case 'right':
                console.log('right');
                break;
            default:
                const exhaustiveCheck: never = direction;
                console.log('tidak ada', exhaustiveCheck);
        }
    }

    move('up')
}



main();