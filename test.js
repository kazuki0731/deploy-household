function test() {
  return new Promise((ok) => {
    ok("OK");
  });
}

async function fnc() {
  const res = await test();
  return res;
}

fnc().then((res) => {
  console.log(res);
});

// function sampleResolve(value) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(value);
//     }, 1000);
//   });
// }

// async function sample2() {
//   const a = await sampleResolve(5);
//   const b = await sampleResolve(10);
//   const c = await sampleResolve(20);
//   return a * b + c;
// }

// sample2().then((v) => {
//   console.log(v); // => 70
// });
