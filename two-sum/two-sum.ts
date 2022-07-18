// Solution 1 
function twoSumSolutionOne(nums: number[], target: number): number[] {
    for (let index = 0; index < nums.length; index++) {
        const element = nums[index];
        for (let index2 = 0; index2 < nums.length; index2++) {
            const element2 = nums[index2];
            if(index != index2) {
                if((element + element2) === target) {
                    return [index, index2]
                }
            }
        }
    }
    return [];
};

// Solution 2
function twoSumSolutionTwo(nums: number[], target: number): number[] {
    const map = new Map<number, number>();
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (map.has(complement)) {
            const mapvv = map.get(complement);
            if(typeof mapvv != "undefined") {
                return [mapvv, i];
            }
        }
        map.set(nums[i], i);
    }
    return [];
};
// explanation :
// Input: nums = [2,11,7,15], target = 9
// iterate 1 :
// {
//   "complement": 7,
//   "target": 9,
//   "curNum": 2,
// } 
// iterate 2 :
// {
//   "complement": -2,
//   "target": 9,
//   "curNum": 11,
// }
// iterate 3 :
// {
//   "complement": 2,
//   "target": 9,
//   "curNum": 7,
// }
// look at iterate 1, we store the complement in the map, and the index of the current number in the map.
// and also look at iterate 3, we get the complement from the map, and the index of the current number in the map.

// solution 2 is i think the best solution, because it only loop once.
// we store the complement of every pair that needed in the map, 
// and if the complement is in the map,
// we know that we have found the pair.

// if you not familiar with map, let me with solution 3 then, 
// using object but it doesnt work on typescript.
// and i dont recommend it as well, cause it is not safe to code like this.
// but it is faster than 94.88% of JavaScript online submissions for Two Sum. said the leetcode.
function twoSumSolutionThree(nums, target){
    const object = {};
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (typeof object[complement] != "undefined") {
            return [object[complement], i];
        }
        object[nums[i]] = i
    }
    return [];
};

