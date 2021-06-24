//修改自https://www.algorithm-archive.org/contents/flood_fill/flood_fill.html


// Function to check to make sure we are on the canva
inbounds = (canvas_size, loc) =>{

    // Make sure we are not beneath or to the left of the canvas
    if(loc[0] < 1 || loc[1] < 1)
        return false

    // Make sure we are not to the right of the canvas
    else if (loc[0] > canvas_size[0])
        return false

    // Make sure we are not above the canvas
    else if (loc[1] > canvas_size[1])
        return false
    else
        return true
}

find_neighbors = (imgData,loc, old_val, canvas_size) =>{

    //Finding north, south, east, west neighbors
    let possible_neighbors = [  [[ loc[0]  -0 ],[ loc[1] - 1 ]],
                            [[ loc[0] - (-1) ],[ loc[1] - 0 ]],
                            [[ loc[0] - 0 ],[ loc[1] - (-1) ]],
                            [[ loc[0] - 1 ],[ loc[1] - 0 ]]];

    //Exclusing neighbors that should not be colored
    let neighbors =  [];
    
    for(let i = 0 ; i < possible_neighbors.length ; i++){
        if ( inbounds(canvas_size, possible_neighbors[i]) == true &&
        imgData.data[(possible_neighbors[i][0] - -possible_neighbors[i][1] * canvas_size[0]) * 4] != old_val.r &&
        imgData.data[(possible_neighbors[i][0] - -possible_neighbors[i][1] * canvas_size[0]) * 4 - -1] != old_val.g &&
        imgData.data[(possible_neighbors[i][0] - -possible_neighbors[i][1] * canvas_size[0]) * 4 - -2] != old_val.b &&
        imgData.data[(possible_neighbors[i][0] - -possible_neighbors[i][1] * canvas_size[0]) * 4 - -3] != old_val.a )
            neighbors.push(possible_neighbors[i]);
    }

    return neighbors
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
 }

Ainmate_stack_fill = async(imgData, loc, old_val, new_val,canvas_size) =>{
    if (imgData.data[(loc[0] - -loc[1] * canvas_size[0]) * 4] == new_val.r &&
    imgData.data[(loc[0] - -loc[1] * canvas_size[0]) * 4 - -1] == new_val.g &&
    imgData.data[(loc[0] - -loc[1] * canvas_size[0]) * 4 - -2] == new_val.b &&
    imgData.data[(loc[0] - -loc[1] * canvas_size[0]) * 4 - -3] == new_val.a)
    return
    

    let s = []
    s.push(loc);

    while (s.length > 0 && Drawing.canvas.bucket.isAimate){
        current_loc = s.pop();

        if (imgData.data[(current_loc[0] - -current_loc[1] * canvas_size[0]) * 4] == new_val.r &&
            imgData.data[(current_loc[0] - -current_loc[1] * canvas_size[0]) * 4 - -1] == new_val.g &&
            imgData.data[(current_loc[0] - -current_loc[1] * canvas_size[0]) * 4 - -2] == new_val.b &&
            imgData.data[(current_loc[0] - -current_loc[1] * canvas_size[0]) * 4 - -3] == new_val.a)
                continue;
        if (imgData.data[(current_loc[0] - -current_loc[1] * canvas_size[0]) * 4] == old_val.r &&
        imgData.data[(current_loc[0] - -current_loc[1] * canvas_size[0]) * 4 - -1] == old_val.g &&
        imgData.data[(current_loc[0] - -current_loc[1] * canvas_size[0]) * 4 - -2] == old_val.b &&
        imgData.data[(current_loc[0] - -current_loc[1] * canvas_size[0]) * 4 - -3] == old_val.a){
            
            imgData.data[(current_loc[0] - -current_loc[1] * canvas_size[0]) * 4] = new_val.r ;
            imgData.data[(current_loc[0] - -current_loc[1] * canvas_size[0]) * 4 - -1] = new_val.g ;
            imgData.data[(current_loc[0] - -current_loc[1] * canvas_size[0]) * 4 - -2] = new_val.b;
            imgData.data[(current_loc[0] - -current_loc[1] * canvas_size[0]) * 4 - -3] = new_val.a;

            possible_neighbors = find_neighbors(imgData, current_loc,old_val, new_val)
            
            Drawing.Canvas.getContext("2d").putImageData(imgData, 0, 0);
            await sleep(1);

            for(let i = 0 ; i < possible_neighbors.length ; i++){
                s.push(possible_neighbors[i]);
            }
        }  
    }
}

stack_fill = (imgData, loc, old_val, new_val,canvas_size) =>{
    if (imgData.data[(loc[0] - -loc[1] * canvas_size[0]) * 4] == new_val.r &&
    imgData.data[(loc[0] - -loc[1] * canvas_size[0]) * 4 - -1] == new_val.g &&
    imgData.data[(loc[0] - -loc[1] * canvas_size[0]) * 4 - -2] == new_val.b &&
    imgData.data[(loc[0] - -loc[1] * canvas_size[0]) * 4 - -3] == new_val.a)
    return
    

    let s = []
    s.push(loc);

    while (s.length > 0){
        current_loc = s.pop();

        if (imgData.data[(current_loc[0] - -current_loc[1] * canvas_size[0]) * 4] == new_val.r &&
            imgData.data[(current_loc[0] - -current_loc[1] * canvas_size[0]) * 4 - -1] == new_val.g &&
            imgData.data[(current_loc[0] - -current_loc[1] * canvas_size[0]) * 4 - -2] == new_val.b &&
            imgData.data[(current_loc[0] - -current_loc[1] * canvas_size[0]) * 4 - -3] == new_val.a)
                continue;
        if (imgData.data[(current_loc[0] - -current_loc[1] * canvas_size[0]) * 4] == old_val.r &&
        imgData.data[(current_loc[0] - -current_loc[1] * canvas_size[0]) * 4 - -1] == old_val.g &&
        imgData.data[(current_loc[0] - -current_loc[1] * canvas_size[0]) * 4 - -2] == old_val.b &&
        imgData.data[(current_loc[0] - -current_loc[1] * canvas_size[0]) * 4 - -3] == old_val.a){
            
            imgData.data[(current_loc[0] - -current_loc[1] * canvas_size[0]) * 4] = new_val.r ;
            imgData.data[(current_loc[0] - -current_loc[1] * canvas_size[0]) * 4 - -1] = new_val.g ;
            imgData.data[(current_loc[0] - -current_loc[1] * canvas_size[0]) * 4 - -2] = new_val.b;
            imgData.data[(current_loc[0] - -current_loc[1] * canvas_size[0]) * 4 - -3] = new_val.a;

            possible_neighbors = find_neighbors(imgData, current_loc,old_val, new_val)

            for(let i = 0 ; i < possible_neighbors.length ; i++){
                s.push(possible_neighbors[i]);
            }
        }  
    }
}


/*  Reach maximum call stack size
recursive_fill = (canvas, loc, old_val, new_val,canvas_size) =>{
    if (canvas[(loc[0] + loc[1] * canvas_size[0]) * 4] == new_val.r &&
    canvas[(loc[0] + loc[1] * canvas_size[0]) * 4 + 1] == new_val.g &&
    canvas[(loc[0] + loc[1] * canvas_size[0]) * 4 + 2] == new_val.b &&
    canvas[(loc[0] + loc[1] * canvas_size[0]) * 4 + 3] == new_val.a)
    return
    

    canvas[(loc[0] + loc[1] * canvas_size[0]) * 4] = new_val.r;
    canvas[(loc[0] + loc[1] * canvas_size[0]) * 4 + 1] = new_val.g;
    canvas[(loc[0] + loc[1] * canvas_size[0]) * 4 + 2] = new_val.b;
    canvas[(loc[0] + loc[1] * canvas_size[0]) * 4 + 3] = new_val.a;

    possible_neighbors = find_neighbors(canvas, loc, old_val, canvas_size)
    for(let i = 0 ; i < possible_neighbors.length ; i++){
        recursive_fill(canvas, possible_neighbors[i], old_val, new_val,canvas_size)
    }
    
}
*/
