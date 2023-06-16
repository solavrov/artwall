import { artwall_backend } from "../../declarations/artwall_backend";

const VOID = "data:image/png;base64,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";
const ADJUSTMENT = -1;
const EDITOR_BUFFER_SIZE = 100;
const BLOCK_SIZE = 30;

class EditorBuffer {

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


async function build() {

    let block = 1;
    let gallery = [];
    const backButton  = document.getElementById("backButton");
    const nextButton  = document.getElementById("nextButton");
    const container = document.getElementById("container");
    
    async function getBlock(b) {
        let g = await artwall_backend.getBlock(b, BLOCK_SIZE);
        if (g[0] === "END") {
            if (b == 1) {
                nextButton.disabled = true;
                backButton.disabled = true;    
            }
            return [];
        }
        if (g[g.length - 1] === "END") {
            nextButton.disabled = true;
            g.splice(-1);
        } else {
            nextButton.disabled = false;
        }
        if (b > 1) {
            backButton.disabled = false;
        } else {
            backButton.disabled = true;
        }
        return g;
    }
    
    function showGallery() {
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

    gallery = await getBlock(block);
    showGallery();

    const body  = document.getElementById("body");
    const loader = document.getElementById("loader");
    loader.style.visibility = "hidden";
    body.style.visibility = "visible";

    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    ctx.fillStyle = 'green';
    let brushSize = 6;
    let brushForm = "square";
    let brushDir = "free";
    let pressX = null;
    let pressY = null;
    const buff = new EditorBuffer(EDITOR_BUFFER_SIZE);
    buff.put(canvas.toDataURL("image/png"));

    const drawImg = (txt) => {
        let img = new Image();
        img.src = txt;
        img.onload = function() {
            ctx.drawImage(img, 0, 0);
        }
    }

    const drawAt = (x, y) => {    
        if (brushForm === "square") {
            ctx.fillRect(x - brushSize/2 + ADJUSTMENT, y - brushSize/2 + ADJUSTMENT, brushSize, brushSize);
        } else {
            ctx.beginPath();
            ctx.arc(x + ADJUSTMENT, y + ADJUSTMENT, brushSize/2, 0, 2 * Math.PI, false);
            ctx.fill();
        }
    };

    const getMouseCoords = (data) => {
        const { x, y } = canvas.getBoundingClientRect();
        const curX = data.clientX - x;
        const curY = data.clientY - y;
        return [curX, curY];
    };

    let buttonPressed = false;
    let prevX = null;
    let prevY = null;

    onmousemove = (data) => {
        if (!buttonPressed) { return; }

        let [curX, curY] = getMouseCoords(data);

        if (brushDir === "hor") {
            curY = pressY;
        } else if (brushDir === "ver") {
            curX = pressX;
        }

        if (prevX === null) {
            drawAt(curX, curY);
        } else {
            const dx = curX - prevX;
            const dy = curY - prevY;

            if (dx === 0 && dy === 0) { 
                drawAt(curX, curY);
            } else if (Math.abs(dy) > Math.abs(dx)) {
                for (let i = 0; i <= Math.abs(dy); i++) {
                    const rx = prevX + dx * i / Math.abs(dy); 
                    const ry = prevY + dy * i / Math.abs(dy); 
                    drawAt(rx, ry);
                }
            } else if (Math.abs(dx) >= Math.abs(dy)) {
                for (let i = 0; i <= Math.abs(dx); i++) {
                    const rx = prevX + dx * i / Math.abs(dx); 
                    const ry = prevY + dy * i / Math.abs(dx); 
                    drawAt(rx, ry);
                }
            }
        }

        prevX = curX;
        prevY = curY;
    };

    canvas.onmousedown = (data) => {
        if (data.button !== 0) { return; }
        buttonPressed = true;
        const [x, y] = getMouseCoords(data);
        [pressX, pressY] = [x, y];
        drawAt(x, y);
    };

    onmouseup = (data) => {
        if (data.button !== 0) { return; }
        buttonPressed = false;
        prevX = null;
        prevY = null;
        const pix = canvas.toDataURL("image/png");
        if (buff.get() !== pix) {
            buff.cut();
            buff.put(pix);
        }
    };
    
    const colorPick = document.getElementsByName("colorPick");
    for (const radio of colorPick) {     
        radio.onclick = function(event) {
            ctx.fillStyle = event.target.value;
        };
    }
    
    const sizePick = document.getElementsByName("sizePick");
    for (const radio of sizePick) {     
        radio.onclick = function(event) {
            brushSize = Number(event.target.value);
        };
    }

    const formPick = document.getElementsByName("formPick");
    for (const radio of formPick) {     
        radio.onclick = function(event) {
            brushForm = event.target.value;
        };
    }

    const dirPick = document.getElementsByName("dirPick");
    for (const radio of dirPick) {     
        radio.onclick = function(event) {
            brushDir = event.target.value;
        };
    }
            
    const postButton = document.getElementById("postButton");
    postButton.onclick = async function() {
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
        const pix = canvas.toDataURL("image/png");
        if (pix !== VOID) {
            await artwall_backend.putToGallery(pix);
            block = 1;
            gallery = await getBlock(block);
            showGallery();
            const c = ctx.fillStyle;
            ctx.fillStyle = 'white';
            ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
            ctx.fillStyle = c;
            buff.clean();
            buff.put(canvas.toDataURL("image/png"));
        }
        loader.style.visibility = "hidden";
        container.style.opacity = "1";
        postButton.disabled = false;
        undoButton.disabled = false;
        redoButton.disabled = false;
    };

    const undoButton = document.getElementById("undoButton");
    undoButton.onclick = function() {
        let res = buff.undo();
        if (res !== null) {
            drawImg(res);
        }
    }

    const redoButton = document.getElementById("redoButton");
    redoButton.onclick = function() {
        let res = buff.redo();
        if (res !== null) {
            drawImg(res);
        }
    }

    nextButton.onclick = async function() {
        container.style.opacity = "0.2";
        loader.style.visibility = "visible";
        let g = await getBlock(block + 1);
        if (g.length > 0) {
            block++;
            gallery = g;
            showGallery();
        }
        loader.style.visibility = "hidden";
        container.style.opacity = "1";
    }

    backButton.onclick = async function() {
        container.style.opacity = "0.2";
        loader.style.visibility = "visible";
        let g = await getBlock(block - 1);
        if (g.length > 0) {
            block--;
            gallery = g;
            showGallery();
        }
        loader.style.visibility = "hidden";
        container.style.opacity = "1";
    }

}

onload = () => {
    build();
};
