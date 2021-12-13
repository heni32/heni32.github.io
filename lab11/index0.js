const dns = require('dns');
  
// Calling dns.resolve4() method for hostname
// geeksforgeeks.org and display them in
// console as a callback
dns.resolve4('miu.edu', (err,
    address) => console.log('address: %j', address));