class App {
  constructor() {
    this.dom = {
      form: document.querySelector('form'),
      audioFile: document.getElementById('audioFile'),
      imageFile: document.getElementById('imageFile'),
      audio: document.getElementById('audio'),
      canvas: document.getElementById('canvas'),
      colorPicker: document.getElementById('colorPicker'),
      title: document.getElementById('title'),
      description: document.getElementById('description'),
      recordRadios: document.forms.form.record,
    };

    this.dimension = 1080;
    this.fps = 30;
    this.gutter = 10;
    this.record = false;

    this.capturer = new CCapture({
      format: 'webm',
      framerate: this.fps,
    });

    this.ctx = this.dom.canvas.getContext('2d');
    this.imageObj = new Image();

    this.canvas = {
      backgroundColor: '#ff6666',
      color: '#ffffff',
      width: this.dimension,
      height: this.dimension,
      title: {
        value: 'Title',
        size: 60,
        y: 0,
      },
      description: {
        value: 'Description',
        size: 40,
        y: 0,
      },
      image: {
        original: {
          width: 0,
          height: 0,
        },
        width: this.dimension,
        height: 0,
      },
      content: {
        margin: 0,
        height: 0,
        textHeight: 0,
      },
    };
  }

  /**
   * Methods
   */
  init() {
    this.initVars();
    this.bindEvents();
    this.drawBasic();
  }

  initVars() {
    this.canvas.width = this.dom.canvas.width;
    this.canvas.halfWidth = this.canvas.width / 2;
    this.canvas.height = this.dom.canvas.height;
    this.setContent();
  }

  bindEvents() {
    this.dom.audioFile.addEventListener('change', (e) => this.setAudio(e));
    this.dom.imageFile.addEventListener('change', (e) => this.setImage(e));
    this.dom.colorPicker.addEventListener('change', (e) => this.setBackgroundColor(e));
    this.dom.title.addEventListener('keyup', (e) => this.setTitle(e));
    this.dom.description.addEventListener('keyup', (e) => this.setDescription(e));
    this.dom.audio.addEventListener('ended', () => this.stop());
    Array.prototype.forEach.call(this.dom.recordRadios, radio => {
      radio.addEventListener('change', () => this.record = this.dom.recordRadios.value);
    });
  }

  setContent() {
    this.canvas.content.textHeight = this.canvas.title.size + this.canvas.description.size + this.gutter;
    this.canvas.content.height = this.canvas.height - this.canvas.image.height;
    this.canvas.content.margin = (this.canvas.content.height - this.canvas.content.textHeight) / 2;
    this.canvas.title.y = this.canvas.image.height + this.canvas.content.margin;
    this.canvas.description.y = this.canvas.title.y + this.canvas.title.size + this.gutter;
  }

  setBackgroundColor(e) {
    this.canvas.backgroundColor = e.srcElement.value;
    this.drawBasic();
  }

  setImage(e) {
    let file = e.target.files[0];
    let reader = new FileReader();

    reader.readAsDataURL(file);
    reader.onload = (e) => {
      if (e.target.readyState == FileReader.DONE) {
        this.imageObj.src = e.target.result;
        this.imageObj.onload = (img) => {
          this.canvas.image.original.width = img.path[0].width;
          this.canvas.image.original.height = img.path[0].height;
          this.canvas.image.height =
            (this.canvas.width / this.canvas.image.original.width) * this.canvas.image.original.height;

          this.setContent();
          this.drawBasic();
        };
      }
    };
  }

  setTitle(e) {
    this.canvas.title.value = e.srcElement.value.toUpperCase();
    this.drawBasic();
  }

  setDescription(e) {
    this.canvas.description.value = e.srcElement.value.toUpperCase();
    this.drawBasic();
  }

  setAudio(e) {
    //this.capturer.timeLimit = e.currentTarget.duration;
    //this.capturer.autoSaveTime = e.currentTarget.duration;
    let file = e.srcElement.files[0];
    this.dom.audio.src = URL.createObjectURL(file);
    this.start();
  }

  stop() {
    if (this.record) {
      this.capturer.stop();
      this.capturer.save();
    }
  }

  start() {
    this.dom.audio.load();
    this.dom.audio.play();

    let audioCtx = new AudioContext();
    this.src = audioCtx.createMediaElementSource(this.dom.audio);
    this.analyser = audioCtx.createAnalyser();

    this.src.connect(this.analyser);
    this.analyser.connect(audioCtx.destination);
    this.analyser.fftSize = 256;
    this.bufferLength = this.analyser.frequencyBinCount;
    this.dataArray = new Uint8Array(this.bufferLength);

    this.bar = {
      width: Math.round(this.canvas.width / this.bufferLength),
      height: 0,
    };

    this.startAnimating();
  }

  startAnimating() {
    this.draw();
    if(this.record) {
      this.capturer.start();
    }
    this.dom.audio.play();
  }

  draw() {
    window.requestAnimationFrame(() => this.draw());

    this.drawBasic();
    this.drawBars();

    if (this.record) {
      this.capturer.capture(this.dom.canvas);
    }
  }

  drawBasic() {
    // Background Color
    this.ctx.fillStyle = this.canvas.backgroundColor;
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

    // Image
    this.ctx.drawImage(this.imageObj, 0, 0, this.canvas.image.width, this.canvas.image.height);

    // Title
    this.ctx.font = `bold ${this.canvas.title.size}px Helvetica`;
    this.ctx.textAlign = 'center';
    this.ctx.textBaseline = 'hanging';
    this.ctx.fillStyle = this.canvas.color;
    this.ctx.fillText(this.canvas.title.value, this.canvas.halfWidth, this.canvas.title.y, this.canvas.width);

    // Description
    this.ctx.font = `${this.canvas.description.size}px Helvetica`;
    this.ctx.fillText(
      this.canvas.description.value,
      this.canvas.halfWidth,
      this.canvas.description.y,
      this.canvas.width
    );
  }

  drawBars() {
    let posX = 0;
    this.analyser.getByteFrequencyData(this.dataArray);

    for (let x = 0; x < this.bufferLength; x++) {
      this.bar.height = (this.dataArray[x] / 256) * 400;
      this.ctx.fillStyle = this.canvas.backgroundColor;
      let posY = this.canvas.image.height - this.bar.height + 1;
      this.ctx.fillRect(posX, posY, this.bar.width, this.bar.height);

      posX += this.bar.width * 2;
    }
  }
}

var app = new App();
app.init();
