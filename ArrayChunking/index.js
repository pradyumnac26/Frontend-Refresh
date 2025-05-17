function chunkArray(arr, n) {
    // Your implementation
    const result = [] 
    if (!Array.isArray(arr) || n <= 0) return [];
    for (let i = 0; i < arr.length; i = i + n){
        result.push(arr.slice(i, i + n));
    }
    return result;
}

//For the purpose of user debugging.
//pass your array and chunk size in function call
chunkArray();
module.exports = chunkArray
