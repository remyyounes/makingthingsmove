```code
  <Canvas draw={(canvas => {
    const ctx = canvas.getContext('2d')
    ctx.clearRect(0,0, canvas.width, canvas.height)
    const width = 100;
    const height = 100;

    ctx.beginPath();
    ctx.fillStyle = 'blue';
    ctx.rect(0, 0, width, height);
    ctx.fill();

    ctx.beginPath();
    ctx.fillStyle = 'red';
    ctx.ellipse(width/2, height/2, width/2, height/2, 0, 0, 2*Math.PI);
    ctx.fill();
  })} />
```
