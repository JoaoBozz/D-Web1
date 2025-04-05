s = 4508
h = Math.trunc(s/3600)
m = Math.trunc(s%3600/60)
se = s - h*3600 - m*60

console.log(`${h}:${m}:${se}`)