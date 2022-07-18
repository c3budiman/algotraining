class ListNode {
        val: number
        next: ListNode | null
        constructor(val?: number, next?: ListNode | null) {
            this.val = (val===undefined ? 0 : val)
            this.next = (next===undefined ? null : next)
        }
 }

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let head: ListNode | null = new ListNode(0);
    let curr = head;
    let carry = 0;
    while (l1 || l2) {
        let val1 = l1 ? l1.val : 0;
        let val2 = l2 ? l2.val : 0;
        let sum = val1 + val2 + carry;
        carry = sum > 9 ? 1 : 0;
        curr.next = new ListNode(sum % 10);
        curr = curr.next;
        l1 = l1 ? l1.next : null;
        l2 = l2 ? l2.next : null;
    }
    if (carry) {
        curr.next = new ListNode(1);
    }
    return head.next;
};

// explanation,
// if you not familiar with linked list,
// please learn it first, because it is very important for this problem.
// the reversed order is actually help us to get the result, because it is important to do the math in 
// the most right side, return carry if it has, and then return the result.

// basically what we are doing are something like this:
// 342
// 465
// ----+
// 807

// 2 + 5 = 7
// 4 + 6 = 10 => 0 //it has carry, so it will be added to the next
// 3 + 4 + 1 = 8
// hence 807

// so what we can do?
// in line 14
// first check if the l1 or l2 has value from the stream of linked list, 
// if non then the calculation is already finished.
// then check if l1 has value and if l2 has none, then just assume l2 = 0, in either way.
// in line 15 and 16
// ex : 
//l1 1420
//l2  465
//   ----+
//   1885
// in line 17
// it is the main calculation.
// in line 18
// check if it has carry, if yes, then add 1 to the next
// in line 20 than it goes to the next stream.