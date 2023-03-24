const promiseObj = new Promise((resolve, reject) => {
    const obj = {name:'Soman', Role:'Head of XYZ'};
    resolve(obj);
  });
  
  promiseObj.then((obj) => {
    console.log(obj);
  });