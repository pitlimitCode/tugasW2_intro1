let data = {
  aaa: {
    bbb: "Kulas Light",
    ccc: "Gwenborough",
  },
  ddd: "Kulas Light",
  eee: "Gwenborough",
};

myVehiclez(data);
function myVehiclez({ eee, aaa: { ccc } }) {
  console.log(eee + ' and' + ccc + '.');
}

// let bruh = ["1", 2, "cc"];
