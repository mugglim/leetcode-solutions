/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function(image) {
    
    for(const row of image){
        // flip
        row.reverse()
        
        // invert
        row.forEach((v,idx) => {
            row[idx] = v === 1 ? 0 : 1; 
        })
    }
    
    return image;
}

