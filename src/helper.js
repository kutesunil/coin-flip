const Random = (arr) => {
    let idx = Math.floor(Math.random() * arr.length);
    return arr[idx]; 
}

export default Random;