// 1. ======================================
// ให้โค้ดดังนี้
for(var i = 0; i < 5; i++) {
  setTimeout(() => { console.log(i) }, 100)
}

// จะ log ได้
// 5
// 5
// 5
// 5
// 5

// จงตอบว่าทำไม log ถึงไม่เป็น
// 1
// 2
// 3
// 4
// 5
// และจงแก้โค้ดให้ log เป็น 
// 1
// 2
// 3
// 4
// 5
// ได้ยังไง (หน้าเอา setTimeout ออก)

// เฉลย
// for(let i = 0; i < 5; i++) {
//   setTimeout(() => { console.log(i) }, 100)
// }




// 2. ประกาศตัวแปรค่าคงที่ใน ES6 ใช้อะไรประกาศ  ==============

// เฉลย
// const