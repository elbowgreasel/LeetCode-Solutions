// Merge Two Sorted Lists
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

var mergeTwoLists = function(list1, list2) {
    if(!list1){
        return list2
    }
    if(!list2){
        return list1
    }
    let newList = []
    while(list1 && list2){
        if(list1.val < list2.val || list1.val == list2.val){
            newList.push(list1.val)
            list1 = list1.next
        }
        else{
            newList.push(list2.val)
            list2 = list2.next
        }
    }
    console.log(newList)
    while(list1){
        newList.push(list1.val);
        list1 = list1.next
    }
    while(list2){
        newList.push(list2.val);
        list2 = list2.next
    }
    let mergedLinkedList = new ListNode(newList.shift());
    let current = mergedLinkedList
    while(newList.length > 0){
        if(current.next){
            current = current.next;
        }
        else{
            current.next = new ListNode(newList.shift())
        }
    }
    return mergedLinkedList
};

class ListNode {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

// Remove Duplicates from Sorted Array

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if(nums.length < 1){
        return 0
    }
    
    let step = 0;
    for(let i = 1; i < nums.length; i++){
        if(nums[i] !== nums[step]){
            step++
            nums[step] = nums[i]
        }
    }
    return step+1
};

// Remove Element

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let kCounter = 0;
    for(let i = 0; i < nums.length; i++){
        if(nums[i] !== val){
            nums[kCounter] = nums[i]
            kCounter++
        }
    }
    return kCounter
};


// Search Insert Position

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    for(let num in nums){
        if(nums[num] >= target){
            return +num
        }
    }
    return nums.length
};

// Longest Common Prefix

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let pfs = ""
    for(let i in strs[0]){
        for(let j in strs){
            if(strs[0][i] !== strs[j][i]){
                return pfs
            }
        }
        pfs = pfs.concat(strs[0][i])
    }
    return pfs
};

// Palindrome Number

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x < 0){
        return false
    }
    x_arr = x.toString().split("")
    while(x_arr.length > 1){
        if(x_arr[0] !== x_arr[x_arr.length-1]){
            return false
        }
        x_arr.pop()
        x_arr.shift()
    }
    return true
};

// Climbing Stairs

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n, memo = {'0': 1}) {
    count = 0
    if(memo[n]){
        return memo[n]
    }
    if(n > 1){
        count += climbStairs(n-2, memo)
        memo[n] = count 
    }
    count += climbStairs(n-1, memo)
    memo[n] = count
    return count
};

// Min Cost Climbing Stairs

/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    for(let i = cost.length-3; i >= 0; i--){
        cost[i] += cost[i+1] < cost[i+2] ? cost[i+1] : cost[i+2]
    }
    return cost[0] < cost[1] ? cost[0] : cost[1]
};
