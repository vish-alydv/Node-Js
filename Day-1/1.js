const os = require("os")

console.log(os.freemem())
console.log(os.version())
console.log(os.platform())
console.log(os.cpus())



const path = require("path")
console.log(path.resolve())

const dns = require("dns")
console.log(dns.getServers())