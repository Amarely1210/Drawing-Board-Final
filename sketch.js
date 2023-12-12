class ImageBoard {
  constructor() {
    this.images = [];
    this.currentImage;
    this.string = "Draw whatever your heart desires";
    this.stringStep = 0;
    this.textSizes = 15;
  }

  preload() {
    this.images.push(loadImage('Bridge.png'));
    this.images.push(loadImage('IMG_4939.png'));
    this.images.push(loadImage('Tulip Field.png'));
    this.images.push(loadImage('IMG_7190.png'));
    this.images.push(loadImage('IMG_8216.png'));
    this.currentImage = this.images[0];
  }

  setup() {
    createCanvas(650, 600);
    print(this.string.length);
    background(70);
    
    // font slider
    this.FontSize = createSlider(10, 25, 50);
    this.FontSize.parent('font-slider');
    this.FontSize.style('width', '200px');
    this.textSizes = this.FontSize.value();
    
    //Save Image
    this.ImgSav = createButton('Save Image');
    this.ImgSav.parent('save-button');
    this.ImgSav.mousePressed(() => this.saveImage());

    //Random Image
    this.RanImg = createButton('Random Image');
    this.RanImg.parent('Randpic-button');
    this.RanImg.mousePressed(() => this.randomImage());

    //Clear Image
    this.ClearImg = createButton('Clear Image');
    this.ClearImg.parent('clear-button');
    this.ClearImg.mousePressed(() => this.clearImage());
  }

  draw() {
    let stringline = this.currentImage.get(mouseX, mouseY);
    fill(stringline);
    noStroke();
    textFont("Mr Dafoe");

    //String text
    textSize(this.textSizes);
    text(this.string.charAt(this.stringStep), mouseX, mouseY);
    this.stringStep++;
    if (this.stringStep > this.string.length) {
      this.stringStep = 0;
    }
  }
  
   //Text Size
  textUp() {
    this.textSizes++;
    console.log('Line weight increased, line weight = ' + this.textSizes);
  }
  
  //Text Size
  textDown() {
    if (this.textSizes > 1) {
      this.textSizes--;
      console.log('Line weight decreased, line weight = ' + this.textSizes);
    } else {
      console.log('Line weight at minimum.');
    }
  }
  
 // Save Image 
  saveImage() {
    saveCanvas('myDrawing', 'png');
  }

  //Random Picker
  randomImage() {
    background(70);
    let randomIndex = floor(random(this.images.length));
    this.currentImage = this.images[randomIndex];
  }

  //Clear
  clearImage() {
    background(70);
  }
}

const imageboard = new ImageBoard();

function preload() {
  imageboard.preload();
}

function setup() {
  imageboard.setup();
}

function draw() {
  imageboard.draw();
}

