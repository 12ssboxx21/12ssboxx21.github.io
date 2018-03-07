function setup() {

    const bW = 10;
    const bH = 18;
    const bS = 30;

    let brett = [];

    let by = (bH + 5);

    let screen = document.getElementById("screen");
    let poeng = document.getElementById("poeng");
    let cPos = document.getElementById('canvas');

    let btnStart = document.getElementById("start");
    btnStart.addEventListener("click", drawscreen);
    btnStart.addEventListener("click", drawtiles);

    function drawscreen() {     /* tegner skjermen og lager en array  */


        let brettPiece = [];
        let brettBottom = [];
        /*let ctx = screen.getContext("2d");
        ctx.moveTo(0, 0);
        ctx.lineTo(0, bH * bS);
        ctx.stroke();

        ctx.moveTo(0, bH * bS);
        ctx.lineTo(bW * bS, bH * bS);
        ctx.stroke();

        ctx.moveTo(bW * bS, bH * bS);
        ctx.lineTo(bW * bS, 0);
        ctx.stroke();

        ctx.moveTo(bW * bS, 0);
        ctx.lineTo(0, 0);
        ctx.stroke(); */

        brettPiece.push(9);     //lager arrayen som bygger opp brettet
        for (let i = 0; i < bW; i++) {
            brettPiece.push(0);
        }
        brettPiece.push(9);

        for (let i = 0; i < bW + 2; i++) {      //lager bunnen av arrayen
            brettBottom.push(9);
        }

        for (let i = 0; i < by; i++) {      //lager arrayen
            brett.push(brettPiece);
        }


        brett.push(brettBottom);
        return brett;

        newtile()   //starter spillet

    }

    //definerer de forskjellige brikkene i en 6x6 array
    let boks = [[0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 1, 1, 0, 0], [0, 0, 1, 1, 0, 0], [0, 0, 0, 0, 0, 0]];   /* 2x2 boks  */
    let linje = [[0, 0, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0], [0, 0, 1, 0, 0, 0], [0, 0, 1, 0, 0, 0], [0, 0, 1, 0, 0, 0], [0, 0, 0, 0, 0, 0]];   /* 1x4 linje */
    let Lr = [[0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 1, 1, 0, 0], [0, 0, 1, 0, 0, 0], [0, 0, 1, 0, 0, 0], [0, 0, 0, 0, 0, 0]];   /* L r       */
    let Ll = [[0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 1, 1, 0, 0], [0, 0, 0, 1, 0, 0], [0, 0, 0, 1, 0, 0], [0, 0, 0, 0, 0, 0]];   /* L l       */
    let Zl = [[0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0], [0, 0, 1, 1, 0, 0], [0, 0, 1, 0, 0, 0], [0, 0, 0, 0, 0, 0]];   /* Z l       */
    let Zr = [[0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0], [0, 0, 1, 1, 0, 0], [0, 0, 1, 0, 0, 0], [0, 0, 0, 0, 0, 0]];   /* Z r       */
    let T = [[0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0], [0, 0, 1, 1, 0, 0], [0, 0, 0, 1, 0, 0], [0, 0, 0, 0, 0, 0]];   /* T         */


    function newtile() { // velger en tilfeldig tile basert på math.random
        let tilepick = Math.random();
        let tp = [];
        if (0 <= tilepick < 0.2) {
            tp = boks;
        }
        else if (0.2 <= tilepick < 0.4) {
            tp = Ll;
        }
        else if (0.4 <= tilepick < 0.6) {
            tp = Lr;
        }
        else if (0.6 <= tilepick < 0.7) {
            tp = T;
        }
        else if (0.7 <= tilepick < 0.8) {
            tp = Zl;
        }
        else if (0.8 <= tilepick < 0.9) {
            tp = Zr;
        }
        else {
            tp = linje;
        }
        return tp;

        //pusher brikken inn i brettet, og sender verdiene videre til "behandling"

        let startPos = [[0, 1, 2, 3, 4, 5], [, 0, 1, 2, 3, 4, 5], 0];
        for (j = 0; j < 6; j++) {
            for (i = /*(bW - 6) */ 2; i < /*(bw - ((bw - 6) / 2))*/ 8; i++) {
                brett[i][j] = 1;
            }
        }
        console.log(brett);
        tilepos(startPos);

    }





    function tilepos(a) {
        let tilepos = [];
        if (a[3] = 0) { //aktiveres ved newTile
            for (i = 0; i < 2; i++) {
                for (j = 0; j < 6; j++) {
                    tilepos[i][j] = a[i][j];
                }
            }


        }

        if (a[3] = 1) { //aktiveres ved movedown
            for (j = 0; j < 6; j++) {
                tilepos.push(a[0][j] + 1)
            }
        }

        if (a[3] = 1) { //aktiveres ved movedown
            for (i = 0; i < 6; i++) {
                tilepos.push(a[i][1] + 1)
            }
        }



    }

    document.onkeydown = checkKey;

    function checkKey(e) {    //aktiveres når man trykker ned en piltast, og reagerer avhengig av hvilken

        e = e || window.event;

        if (e.keyCode == '38') {

            rot(linje)
            // up arrow
        }
        else if (e.keyCode == '40') {
            movedown()
            // down arrow
        }
        else if (e.keyCode == '37') {
            sidemove(-1, currentpiece)
            // left arrow
        }
        else if (e.keyCode == '39') {
            sidemove(1, currentpiece)
            // right arrow
        }

    }

    function sidemove(a, b) {   //sjekker om brikkene kan bevege seg til venstre/ høyre

        for (i = bW + 1; i > 0; i--) {
            for (j = bH + 1; j > 0; j--)
                if (brett[j][i] + brett[j + a][i] === 2) {
                    break

                }
                else if (brett[j][i] + brett[j + a][i] === 9) {
                    break

                }

                else {
                    brett[j + a][i] = brett[j][i];

                }
        }
        console.log(brett);
        definetile()

    }
    function drawtiles() {
        for (i = 5; i < bH; i++) {      //tegner brikkene inni brettet
            for (j = 1; j < bW; j++) {
                let x = (j) * bS;
                let y = (i - 1) * bS;
                if (brett[j][i] === 1) {
                    let ctx = screen.getContext("2d");
                    ctx.moveTo(y, x);
                    ctx.lineTo(y, x + bS);
                    ctx.stroke();

                    ctx.moveTo(y, x + bS);
                    ctx.lineTo(y + bS, x + bS);
                    ctx.stroke();

                    ctx.moveTo(y + bS, x + bS);
                    ctx.lineTo(y + bS, x);
                    ctx.stroke();

                    ctx.moveTo(y + bS, x);
                    ctx.lineTo(y, x);
                    ctx.stroke();
                }

            }
        }
    }

    function rot(a) {
        let b = []
        for (let y = 0; y < a.length; y++) {
            b[y] = [];
            for (let x = 0; x < a.length; x++) {
                b[y][x] = a[x][y];

            }
        }
        console.log(b);



    }

}

