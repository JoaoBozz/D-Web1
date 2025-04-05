function ZalcularEquações_z(x, y) {
    // a)
    let Az = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 3)) / Math.abs(x + y);

    // b)
    let Bz = (1 + Math.sin(x)) / (1 + Math.cos(x));

    // c)
    let Cz = 1 + (1 / x) + (1 / Math.pow(x, 2)) + (1 / Math.pow(x, 3)) + (1 / Math.pow(x, 4));

    // d)
    let frac = x / y;
    let Dz = frac - ((x + Math.pow(frac, 2)) / (x - Math.pow(frac, 2)));

    // e)
    let Ez = Math.sqrt(Math.PI + Math.sqrt(Math.pow(Math.E, 3) + Math.sqrt(4 + Math.sqrt(x))));

    return { Az, Bz, Cz, Dz, Ez };
}