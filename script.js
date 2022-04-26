"use script";

const cars = {
  color: "red",
  isBuy: false,
  isArmor: function () {
    console.log("armor does not have");
  },
};

//--------------Object.create(a); orqali bir obyekt orqali yangi obyekt yaratish

const nexia = Object.create(cars);
nexia.isArmor();
console.log(nexia.isBuy);

// const bmw = {
//   color: "black",
// };
// // bmw __proto__ = cars;

// // -----------------Object.setPrototypeOf(a, b); orqali bir obyektdagi malumotni
// // ikkinchi obyektga utkazish mumkin
// Object.setPrototypeOf(bmw, cars);

// bmw.isArmor();
// console.log(bmw.isBuy);
