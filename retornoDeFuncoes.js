function multiplicaPar(x, y) {
    if ( (x % 2) == 1) return 0;
    if ( (y % 2) == 1) return 0;
    return x * y; 
}

alert(multiplicaPar(1, 1));

alert(multiplicaPar(1, 2));

alert(multiplicaPar(2, 1));

alert(multiplicaPar(2, 2));