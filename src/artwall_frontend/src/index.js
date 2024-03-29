import { artwall_backend } from "../../declarations/artwall_backend";

////// global constants ///////
// text representation of empty canvas (white rectangle) to check that nothing was drown
const VOID = "data:image/png;base64,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";
const ADJUSTMENT = -1.5; // brush position adjustment for drawing
const ADJUSTMENT2 = -2; // brush position adjustment for filling
const EDITOR_BUFFER_SIZE = 200; // size of undo-redo editors buffers
const BLOCK_SIZE = 24; // number of pictures from total gallery to show at a time
const SUBBLOCK_SIZE = 8; // quant of query for gallery reading to comply with IC limitations
const SUBBLOCKS_IN_BLOCK = BLOCK_SIZE / SUBBLOCK_SIZE;

////// class that is used for managing redo and undo during editing pictures //////
class Buffer {

    constructor(size) {
        this.size = size;
        this.array = [];
        this.pointer = -1;
    }

    put(e) {
        this.array.push(e);
        if (this.pointer + 1 < this.size) {
            this.pointer++;
        } else {
            this.array.shift();
        }
    }

    get() {
        if (this.pointer >= 0) {
            return this.array[this.pointer];
        }
        return null;
    }

    undo() {
        if (this.pointer > 0) {
            return this.array[--this.pointer];
        }
        return null;
    }

    redo() {
        if (this.pointer + 1 < this.array.length) {
            return this.array[++this.pointer];
        }
        return null;
    }

    cut() {
        const NumToCut = this.array.length - this.pointer - 1;
        if (NumToCut > 0) {
            this.array = this.array.slice(0, -NumToCut);
        }
    }

    clean() {
        this.array = [];
        this.pointer = -1;
    }

}

////// build app ///////
async function build() {

    ///// global variables /////
    const glob = {
        block: 1,
        gallery: [], //gallery block in container
        gallery1: [], //first block of the gallery
        brushSize: 6,
        brushForm: "circle",
        brushDir: "free", // direction: free, only horizontal, only vertical
        pressX: null,
        pressY: null,
        prevX: null,
        prevY: null,
        mousePressed: false,
        screenTouched: false,
        postButtonTouched: false,
        undoButtonTouched: false,
        redoButtonTouched: false,
        nextButtonTouched: false,
        backButtonTouched: false
    }

    const container = document.getElementById("container");
    const backButton = document.getElementById("backButton");
    const nextButton = document.getElementById("nextButton");

    ///// get part of total gallery (BLOCK_SIZE) to show in container by subblock to comply with ICP query size limitation //////
    async function getBlockBySubs(block) {
        let gallery = [];
        for (let i = 1; i <= SUBBLOCKS_IN_BLOCK; i++) {
            const subblock = (block - 1) * SUBBLOCKS_IN_BLOCK + i;
            const g = await artwall_backend.getBlock(subblock, SUBBLOCK_SIZE);
            if (g[g.length - 1] === "END") {
                g.pop();
                gallery = g.concat(gallery);
                gallery.push("END");
                break;
            } else {
                gallery = g.concat(gallery);
            }
        }
        return gallery;
    }

    ///// get part of total gallery (BLOCK_SIZE) to show in container //////
    async function getBlock(block) {
        let gallery = await getBlockBySubs(block);
        if (gallery[0] === "END") {
            if (block == 1) {
                nextButton.disabled = true;
                backButton.disabled = true;    
            }
            return [];
        }
        if (gallery[gallery.length - 1] === "END") {
            nextButton.disabled = true;
            gallery.splice(-1);
        } else {
            nextButton.disabled = false;
        }
        if (block > 1) {
            backButton.disabled = false;
        } else {
            backButton.disabled = true;
        }
        return gallery;
    }
    
    ////// show gallery block in container ////////
    function show(gallery) {
        container.innerHTML = "";
        for (const pix of gallery) {
            const img = document.createElement("img");
            img.style.height = "200px";
            img.style.width = "200px";
            img.src = pix;
            const div = document.createElement("div");
            div.appendChild(img);
            container.prepend(div);
        }
    }

    /////// get block and and show ////////
    glob.gallery = await getBlock(glob.block);
    glob.gallery1 = glob.gallery.slice(0);
    show(glob.gallery);

    /////// turn off loader animation and show body ////////
    const body  = document.getElementById("body");
    const loader = document.getElementById("loader");
    loader.style.visibility = "hidden";
    body.style.visibility = "visible";

    /////// creating canvas ///////
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.fillStyle = 'red';

    ////// creating undo-redo buffers //////
    glob.imgBuff = new Buffer(EDITOR_BUFFER_SIZE);
    glob.imgBuff.put(canvas.toDataURL("image/png"));
    glob.lineBuff = new Buffer(EDITOR_BUFFER_SIZE),
    glob.lineBuff.put(null);

    ///// draw text image on canvas /////
    const drawImg = (txt) => {
        const img = new Image();
        img.src = txt;
        img.onload = function() {
            ctx.drawImage(img, 0, 0);
        }
    }

    ////// draw point on canvas ///////
    const drawAt = (x, y) => {
        x += ADJUSTMENT;
        y += ADJUSTMENT;
        if (glob.brushSize === 1) {
            ctx.fillRect(x, y, 1, 1);
        } else if (glob.brushForm === "square") {
            ctx.fillRect(x - glob.brushSize/2, y - glob.brushSize/2, glob.brushSize, glob.brushSize);
        } else if (glob.brushForm === "circle") {
            ctx.beginPath();
            ctx.arc(x, y, glob.brushSize/2, 0, 2 * Math.PI, false);
            ctx.fill();
        } else if (glob.brushForm === "star") {
            let s1, s2;
            if (glob.brushSize >= 6) {
                s1 = glob.brushSize / 2;
                s2 = s1 / 5;
            } else {
                s1 = 2;
                s2 = 0.5;
            }
            ctx.beginPath();
            ctx.moveTo(x, y - s1);
            ctx.lineTo(x - s2, y - s2);
            ctx.lineTo(x - s1, y);
            ctx.lineTo(x - s2, y + s2);
            ctx.lineTo(x, y + s1);
            ctx.lineTo(x + s2, y + s2);
            ctx.lineTo(x + s1, y);
            ctx.lineTo(x + s2, y - s2);
            ctx.lineTo(x, y - s1);
            ctx.closePath();
            ctx.fill();
        } else if (glob.brushForm === "ellipse") {
            ctx.beginPath();
            ctx.ellipse(x, y, glob.brushSize / 2, glob.brushSize / 4, 0, 0, 2 * Math.PI);
            ctx.fill();
        } else if (glob.brushForm === "ellipse2") {
            ctx.beginPath();
            ctx.ellipse(x, y, glob.brushSize / 4, glob.brushSize / 2, 0, 0, 2 * Math.PI);
            ctx.fill();
        } else if (glob.brushForm === "star5") {
            let s;
            if (glob.brushSize >= 6) {
                s = glob.brushSize;
            } else {
                s = 4;
            }
            ctx.beginPath();
            ctx.moveTo(x, y - 0.5 * s);
            ctx.lineTo(x - 0.13 * s, y - 0.18 * s);
            ctx.lineTo(x - 0.48 * s, y - 0.15 * s);
            ctx.lineTo(x - 0.21 * s, y + 0.07 * s);
            ctx.lineTo(x - 0.29 * s, y + 0.4 * s);
            ctx.lineTo(x, y + 0.22 * s);
            ctx.lineTo(x + 0.29 * s, y + 0.4 * s);
            ctx.lineTo(x + 0.21 * s, y + 0.07 * s);
            ctx.lineTo(x + 0.48 * s, y - 0.15 * s);
            ctx.lineTo(x + 0.13 * s, y - 0.18 * s);
            ctx.lineTo(x, y - 0.5 * s);
            ctx.closePath();
            ctx.fill();
        }
    };

    ////// draw between previous point and given point //////
    const drawBetween = (x, y) => {

        if (glob.brushDir === "hor") {
            y = glob.pressY;
        } else if (glob.brushDir === "ver") {
            x = glob.pressX;
        }

        const dx = x - glob.prevX;
        const dy = y - glob.prevY;

        if (dx === 0 && dy === 0) {
            drawAt(x, y);
        } else if (Math.abs(dy) > Math.abs(dx)) {
            for (let i = 0; i <= Math.abs(dy); i++) {
                const rx = glob.prevX + dx * i / Math.abs(dy); 
                const ry = glob.prevY + dy * i / Math.abs(dy); 
                drawAt(rx, ry);
            }
        } else if (Math.abs(dx) >= Math.abs(dy)) {
            for (let i = 0; i <= Math.abs(dx); i++) {
                const rx = glob.prevX + dx * i / Math.abs(dx); 
                const ry = glob.prevY + dy * i / Math.abs(dx); 
                drawAt(rx, ry);
            }
        }

        glob.prevX = x;
        glob.prevY = y;
    };


    //////// fill area with current color /////////
    const fill = (imageData, j0) => {
        const data = imageData.data;
        const w = 4 * imageData.width;
        const h = imageData.height;
        const size = w * h;
        const oldColor = [data[j0], data[j0 + 1], data[j0 + 2]];
        const newColor = [
            parseInt(ctx.fillStyle.slice(1, 3), 16),
            parseInt(ctx.fillStyle.slice(3, 5), 16),
            parseInt(ctx.fillStyle.slice(5, 7), 16)
        ];
        const isColorOld = (i) => {
            if (i < 0 || i > size - 4) { return false; }
            return data[i] === oldColor[0] && data[i + 1] === oldColor[1] && data[i + 2] === oldColor[2];
        };
        const fillLine = (i0) => {
            let i1 = i0;
            const minI = i0 - i0 % w;
            while (i1 >= minI) {
                if (isColorOld(i1)) {
                    [data[i1], data[i1 + 1], data[i1 + 2]] = newColor;
                    i1 -= 4;
                } else {
                    break;
                }
            }
            let i2 = i0 + 4;
            const maxI = minI + w - 4;
            while (i2 <= maxI) {
                if (isColorOld(i2)) {
                    [data[i2], data[i2 + 1], data[i2 + 2]] = newColor;
                    i2 += 4;
                } else {
                    break;
                }
            }
            return (i1 + i2)/2 - ((i1 + i2)/2) % 4;
        }
        let j = j0;
        while (j >= 0) {
            j = fillLine(j) - w;
            if (!isColorOld(j)) {
                break;
            }
        }
        j = j0 + w;
        while (j <= size - 4) {
            j = fillLine(j) + w;
            if (!isColorOld(j)) {
                break;
            }
        }

    };

    /////////// mouse drawing ////////////

    const getMouseCoords = (event) => {
        const { x, y } = canvas.getBoundingClientRect();
        const mouseX = event.clientX - x;
        const mouseY = event.clientY - y;
        return [mouseX, mouseY];
    };

    canvas.onmousedown = (event) => {
        if (event.button !== 0) { return; }
        glob.mousePressed = true;
        const [x, y] = getMouseCoords(event);
        [glob.pressX, glob.pressY] = [x, y];
        if (glob.brushDir === "line") {
            const c = glob.lineBuff.get();
            if (c !== null) {
                [glob.prevX, glob.prevY] = c;
                drawBetween(x, y);
            } else {
                drawAt(x, y);
            }
            glob.lineBuff.cut();
            glob.lineBuff.put([x, y]);
        } else if (glob.brushDir === "fill") {
            const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
            const data = imageData.data;
            const j0 = 4 * (canvas.width * Math.round(y + ADJUSTMENT2) + Math.round(x + ADJUSTMENT2));
            fill(imageData, j0);
            ctx.putImageData(imageData, 0, 0);
        } else {
            [glob.prevX, glob.prevY] = [x, y];
            drawAt(x, y);
        }
    };

    canvas.ondblclick = () => {
        glob.lineBuff.clean();
        glob.lineBuff.put(null);
    }

    onmousemove = (event) => {
        if (!glob.mousePressed || glob.brushDir === "line" || glob.brushDir === "fill") { return; }
        let [x, y] = getMouseCoords(event);
        drawBetween(x, y);
    };

    onmouseup = (event) => {
        if (event.button !== 0) { return; }
        glob.mousePressed = false;
        if (glob.brushDir !== "line") {
            glob.prevX = glob.prevY = null;
        }
        const pix = canvas.toDataURL("image/png");
        if (glob.imgBuff.get() !== pix) {
            glob.imgBuff.cut();
            glob.imgBuff.put(pix);
        }
    };

    /////////// touch screen drawing //////////////

    const getTouchCoords = (event) => {
        const { x, y } = canvas.getBoundingClientRect();
        const touchX = event.touches[0].clientX - x;
        const touchY = event.touches[0].clientY - y;
        return [touchX, touchY];
    };

    canvas.ontouchstart = (event) => {
        event.preventDefault();
        glob.screenTouched = true;
        const [x, y] = getTouchCoords(event);
        [glob.pressX, glob.pressY] = [x, y];
        if (glob.brushDir === "line") {
            const c = glob.lineBuff.get();
            if (c !== null) {
                [glob.prevX, glob.prevY] = c;
                drawBetween(x, y);
            } else {
                drawAt(x, y);
            }
            glob.lineBuff.cut();
            glob.lineBuff.put([x, y]);
        } else if (glob.brushDir === "fill") {
            const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
            const data = imageData.data;
            const j0 = 4 * (canvas.width * Math.round(y + ADJUSTMENT2) + Math.round(x + ADJUSTMENT2));
            fill(imageData, j0);
            ctx.putImageData(imageData, 0, 0);
        } else {
            [glob.prevX, glob.prevY] = [x, y];
            drawAt(x, y);
        }
    };

    canvas.ontouchmove = (event) => {
        event.preventDefault();
        if (!glob.screenTouched || glob.brushDir === "line") { return; }
        let [x, y] = getTouchCoords(event);
        drawBetween(x, y);
    };

    canvas.ontouchend = (event) => {
        event.preventDefault();
        if (!glob.screenTouched) { return; }
        glob.screenTouched = false;
        if (glob.brushDir !== "line") {
            glob.prevX = glob.prevY = null;
        }
        const pix = canvas.toDataURL("image/png");
        if (glob.imgBuff.get() !== pix) {
            glob.imgBuff.cut();
            glob.imgBuff.put(pix);
        }
    };

    /////// color pick radio ////////
    const colorPick = document.getElementsByName("colorPick");
    for (const radio of colorPick) {     
        radio.onclick = function(event) {
            ctx.fillStyle = event.target.value;
        };
    }

    const colorPicker = document.getElementById("colorPicker");
    const myColorPick = document.getElementById("myColorPick");
    colorPicker.onchange = function(event) {
        myColorPick.checked = true;
        ctx.fillStyle = colorPicker.value;
    }
    colorPicker.onclick = function() {
        myColorPick.checked = true;
    }
    myColorPick.onclick = function() {
        ctx.fillStyle = colorPicker.value;
    }


    /////// brush size pick radio ////////
    const sizePick = document.getElementsByName("sizePick");
    for (const radio of sizePick) {     
        radio.onclick = function(event) {
            glob.brushSize = Number(event.target.value);
        };
    }

    /////// brush size slider ////////
    const brushRange = document.getElementById("brushRange");
    const brushRangeSize = document.getElementById("brushRangeSize");
    const sizePickRange = document.getElementById("sizePickRange");
    brushRange.oninput = function() {
        brushRangeSize.innerHTML = brushRange.value;
        sizePickRange.value = brushRange.value;
        sizePickRange.checked = true;
        glob.brushSize = Number(brushRange.value);
    }

    brushRange.ontouchmove = function() {
        brushRangeSize.innerHTML = brushRange.value;
        sizePickRange.value = brushRange.value;
        if (sizePickRange.checked) { glob.brushSize = Number(brushRange.value); }
    }

    /////// brush form pick radio ////////
    const formPick = document.getElementsByName("formPick");
    for (const radio of formPick) {     
        radio.onclick = function(event) {
            glob.brushForm = event.target.value;
        };
    }

    /////// brush direction pick radio ////////
    const dirPick = document.getElementsByName("dirPick");
    for (const radio of dirPick) {     
        radio.onclick = function(event) {
            glob.lineBuff.clean();
            glob.lineBuff.put(null);
            glob.brushDir = event.target.value;
        };
    }

    /////// post ////////
    async function post() {
        const pix = canvas.toDataURL("image/png");
        if (pix !== VOID) {
            postButton.disabled = true;
            undoButton.disabled = true;
            redoButton.disabled = true;
            backButton.disabled = true;
            nextButton.disabled = true;
            container.style.opacity = "0.2";
            postButton.disabled = true;
            loader.style.visibility = "visible";
            const img = document.createElement("img");
            img.style.height = "200px";
            img.style.width = "200px";
            await artwall_backend.putToGallery(pix);
            glob.gallery1.push(pix);
            if (glob.gallery1.length > BLOCK_SIZE) {
                glob.gallery1.shift();
            }
            show(glob.gallery1);
            glob.block = 1;
            const c = ctx.fillStyle;
            ctx.fillStyle = 'white';
            ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
            ctx.fillStyle = c;
            glob.imgBuff.clean();
            glob.imgBuff.put(canvas.toDataURL("image/png"));
            loader.style.visibility = "hidden";
            container.style.opacity = "1";
            postButton.disabled = false;
            undoButton.disabled = false;
            redoButton.disabled = false;
            nextButton.disabled = false;
        }
    }

    ///////////// buttons mouse handlers //////////////

    const postButton = document.getElementById("postButton");
    postButton.onclick = async function() {
        post();
    };

    const undoButton = document.getElementById("undoButton");
    undoButton.onclick = function() {
        glob.lineBuff.undo();
        let res = glob.imgBuff.undo();
        if (res !== null) {
            drawImg(res);
        }
    }

    const redoButton = document.getElementById("redoButton");
    redoButton.onclick = function() {
        glob.lineBuff.redo();
        let res = glob.imgBuff.redo();
        if (res !== null) {
            drawImg(res);
        }
    }

    nextButton.onclick = async function() {
        container.style.opacity = "0.2";
        loader.style.visibility = "visible";
        let g = await getBlock(glob.block + 1);
        if (g.length > 0) {
            glob.block++;
            glob.gallery = g;
            show(glob.gallery);
        }
        loader.style.visibility = "hidden";
        container.style.opacity = "1";
    }

    backButton.onclick = async function() {
        container.style.opacity = "0.2";
        loader.style.visibility = "visible";
        let g = await getBlock(glob.block - 1);
        if (g.length > 0) {
            glob.block--;
            glob.gallery = g;
            if (glob.block === 1) {
                glob.gallery1 = g.slice(0);
            }
            show(glob.gallery);
        }
        loader.style.visibility = "hidden";
        container.style.opacity = "1";
    }

    /////////// buttons touch handlers //////////////

    postButton.ontouchstart = function(event) {
        event.preventDefault();
        if (postButton.disabled) { return; }
        glob.postButtonTouched = true;
    }

    postButton.ontouchmove = function(event) {
        event.preventDefault();
    }

    postButton.ontouchcancel = function(event) {
        event.preventDefault();
    }

    postButton.ontouchend = async function(event) {
        event.preventDefault();
        if (!glob.postButtonTouched) { return; }
        glob.postButtonTouched = false;
        post();
    };

    undoButton.ontouchstart = function(event) {
        event.preventDefault();
        if (undoButton.disabled) { return; }
        glob.undoButtonTouched = true;
    }

    undoButton.ontouchmove = function(event) {
        event.preventDefault();
    }

    undoButton.ontouchcancel = function(event) {
        event.preventDefault();
    }

    undoButton.ontouchend = function(event) {
        event.preventDefault();
        if (!glob.undoButtonTouched) { return; }
        glob.undoButtonTouched = false;
        glob.prevX = glob.prevY = null;
        glob.lineBuff.undo();
        let res = glob.imgBuff.undo();
        if (res !== null) {
            drawImg(res);
        }
    }

    redoButton.ontouchstart = function(event) {
        event.preventDefault();
        if (redoButton.disabled) { return; }
        glob.redoButtonTouched = true;
    }

    redoButton.ontouchmove = function(event) {
        event.preventDefault();
    }

    redoButton.ontouchcancel = function(event) {
        event.preventDefault();
    }

    redoButton.ontouchend = function(event) {
        event.preventDefault();
        if (!glob.redoButtonTouched) { return; }
        glob.redoButtonTouched = false;
        glob.lineBuff.redo();
        let res = glob.imgBuff.redo();
        if (res !== null) {
            drawImg(res);
        }
    }

    nextButton.ontouchstart = function(event) {
        event.preventDefault();
        if (nextButton.disabled) { return; }
        glob.nextButtonTouched = true;
    }

    nextButton.ontouchmove = function(event) {
        event.preventDefault();
    }

    nextButton.ontouchcancel = function(event) {
        event.preventDefault();
    }

    nextButton.ontouchend = async function(event) {
        event.preventDefault();
        if (!glob.nextButtonTouched) { return; }
        glob.nextButtonTouched = false;
        container.style.opacity = "0.2";
        loader.style.visibility = "visible";
        let g = await getBlock(glob.block + 1);
        if (g.length > 0) {
            glob.block++;
            glob.gallery = g;
            show(glob.gallery);
        }
        loader.style.visibility = "hidden";
        container.style.opacity = "1";
    }

    backButton.ontouchstart = function(event) {
        event.preventDefault();
        if (backButton.disabled) { return; }
        glob.backButtonTouched = true;
    }

    backButton.ontouchmove = function(event) {
        event.preventDefault();
    }

    backButton.ontouchcancel = function(event) {
        event.preventDefault();
    }

    backButton.ontouchend = async function(event) {
        event.preventDefault();
        if (!glob.backButtonTouched) { return; }
        glob.backButtonTouched = false;
        container.style.opacity = "0.2";
        loader.style.visibility = "visible";
        let g = await getBlock(glob.block - 1);
        if (g.length > 0) {
            glob.block--;
            glob.gallery = g;
            if (glob.block === 1) {
                glob.gallery1 = g.slice(0);
            }
            show(glob.gallery);
        }
        loader.style.visibility = "hidden";
        container.style.opacity = "1";
    }

}

/////// run!!! //////
onload = () => {
    build();
};
