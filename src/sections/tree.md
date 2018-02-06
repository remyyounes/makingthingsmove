# Fractals
Fractals are probably the most beautiful rendering. Because of their exponential nature, they are very CPU intensive and will quickly freeze your screen if you aren't careful with the number of iteration you want to generate

## Fractal Trees
Fractal trees are usually generated from one branch that grows two others at its extremity.
Each child branch is identical to its parent except it:
- starts from the top of the previous one (`p.translate`)
- deviates from its parent's orientation. (`p.rotate`)
- grows shorter (`p.scale`)

each child then starts growing children of its own until the maxGeration cap is reached

### Other Fractals
http://remyyounes.github.io/fractalizeru/

```code
<div>
  <Tree
    generations={8}
    baseScale={0.77}
    baseLength={150}
  />
</div>
```
