/*

#4 Leetcode (Hard) = Median of Two Sorted Arrays

*/

function findMedianSortedArrays(nums1, nums2) {
    let arr = [...nums1, ...nums2]
    arr.sort((a, b) => a - b);
    let median = 0
    let m1 = 0, m2 = 0
    if ((arr.length - 1) % 2 == 0) {
        m1 = (arr.length - 1) / 2
        median = arr[m1]
        return median
    }
    else if ((arr.length - 1) % 2 != 0) {
        m1 = Math.trunc((arr.length - 1) / 2)
        m2 = (arr.length) / 2
        median = (arr[m1] + arr[m2]) / 2
        return median
    }
};
// let nums1 = [12, 24], nums2 = [33, 45] // output = 28.5
let nums1 = [1, 2, 3, 4, 5], nums2 = [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17] // output = 9
console.log(findMedianSortedArrays(nums1, nums2)) 