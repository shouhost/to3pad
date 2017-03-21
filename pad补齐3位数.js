//数字加个0，补齐3位

var pad = (num ,n)=> (Array(n).join(0)+num).slice(-n)

var pad = function(num,n){ (Array(n).join(0)+num).slice(-n) };