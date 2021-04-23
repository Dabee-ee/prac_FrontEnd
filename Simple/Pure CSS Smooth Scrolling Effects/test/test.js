/* 윈도우의 높이 */
var winH = window.innerHeight; //1080
 
/* 스크롤 값 */
var scrollY = window.scrollY; //0
 
/* item 6의 top 값 */
var posFromTop = item6.getBoundingClientRect().top; //5400
 
/* item 6의 절대좌표 값 */
var absolutePos = scrollY + posFromTop; //5400

// 5400에서 -(1080*section_number) 을 나누면 각 section의 상단 좌표!
// section의 순서는 내림차순 5,4,3,2,1
// 따라서 5400 - 5400 = 0 section 