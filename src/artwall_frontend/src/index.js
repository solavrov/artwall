import { artwall_backend } from "../../declarations/artwall_backend";

////// global constants ///////
// text representation of empty canvas (white rectangle) to check that nothing was drown
const VOID = "data:image/png;base64,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";
const ADJUSTMENT = -1; // brush position adjustment
const EDITOR_BUFFER_SIZE = 100; // size of undo-redo editors buffer
const BLOCK_SIZE = 30; // number of pictures from total gallery to show at a time

////// class that is used for managing redo and undo during editing pictures //////
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

////// build app ///////
async function build() {

    ///// global variables /////
    const glob = {
        block: 1,
        gallery: [], //gallery block in container
        gallery1: [], //first block of the gallery
        brushSize: 6,
        brushForm: "square",
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
    const backButton  = document.getElementById("backButton");
    const nextButton  = document.getElementById("nextButton");

    ///// get part of total gallery (BLOCK_SIZE) to show in container //////
    async function getBlock(block) {
        let gallery = await artwall_backend.getBlock(block, BLOCK_SIZE);
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
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.fillStyle = 'DodgerBlue';

    ////// creating undo-redo buffer //////
    const buff = new EditorBuffer(EDITOR_BUFFER_SIZE);
    buff.put(canvas.toDataURL("image/png"));

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
        if (glob.brushForm === "square") {
            ctx.fillRect(x - glob.brushSize/2 + ADJUSTMENT, y - glob.brushSize/2 + ADJUSTMENT, glob.brushSize, glob.brushSize);
        } else {
            ctx.beginPath();
            ctx.arc(x + ADJUSTMENT, y + ADJUSTMENT, glob.brushSize/2, 0, 2 * Math.PI, false);
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
        if (glob.brushDir !== "line" || glob.prevX === null || glob.prevY === null) {
            [glob.prevX, glob.prevY] = [x, y];
            drawAt(x, y);
        } else {
            drawBetween(x, y);
            [glob.prevX, glob.prevY] = [x, y];
        }
    };

    onmousemove = (event) => {
        if (!glob.mousePressed || glob.brushDir === "line") { return; }
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
        if (buff.get() !== pix) {
            buff.cut();
            buff.put(pix);
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
        if (glob.brushDir !== "line" || glob.prevX === null || glob.prevY === null) {
            [glob.prevX, glob.prevY] = [x, y];
            drawAt(x, y);
        } else {
            drawBetween(x, y);
            [glob.prevX, glob.prevY] = [x, y];
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
        if (buff.get() !== pix) {
            buff.cut();
            buff.put(pix);
        }
    };

    /////// color pick radio ////////
    const colorPick = document.getElementsByName("colorPick");
    for (const radio of colorPick) {     
        radio.onclick = function(event) {
            ctx.fillStyle = event.target.value;
        };
    }

    /////// brush size pick radio ////////
    const sizePick = document.getElementsByName("sizePick");
    for (const radio of sizePick) {     
        radio.onclick = function(event) {
            glob.brushSize = Number(event.target.value);
        };
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
            glob.brushDir = event.target.value;
        };
    }

    /////// post ////////
    async function post() {
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
            glob.gallery1.push(pix);
            glob.gallery1.shift();
            show(glob.gallery1);
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
        nextButton.disabled = false;
    }

    ///////////// buttons mouse handlers //////////////

    const postButton = document.getElementById("postButton");
    postButton.onclick = async function() {
        post();
    };

    const undoButton = document.getElementById("undoButton");
    undoButton.onclick = function() {
        glob.prevX = glob.prevY = null;
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
        let res = buff.undo();
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
        let res = buff.redo();
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
