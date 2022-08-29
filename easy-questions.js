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
