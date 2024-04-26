/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // let indexArr = [];
    // const newArr = indexArr.index;
    for(let i = 0; i < nums.length; i++){
        for(let j = i + 1; j < nums.length; j++){
            if(target - nums[i] === nums[j]){
                // indexArr.push(i, j);
                return [i, j];
        }
    }  
    }
     return[]; 
};
//新しい配列とかいらなかった、
//j = i + 1！！