const cp =  require("child_process")

console.log("Start")

const p = cp.spawn("node", ["dist/yo.js"])
p.on('close', () => console.log("Done"))

