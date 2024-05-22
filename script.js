function mincost(arr)
{ 
//write your code here
// return the min cost
	 arr.sort((a, b) => a - b); // Sort the array in ascending order
    
    // Initialize the total cost
    let totalCost = 0;
    
    // While there are more than one rope in the array
    while (arr.length > 1) {
        // Extract the smallest two ropes
        const smallest1 = arr.shift();
        const smallest2 = arr.shift();
        
        // Connect these two ropes and insert the new rope back into the array
        const combinedCost = smallest1 + smallest2;
        totalCost += combinedCost;
        arr.push(combinedCost);
        arr.sort((a, b) => a - b); // Re-sort the array
    }
    
    return totalCost;
  
}

module.exports=mincost;
