// function getTempCallBack(location, callback){
//   callback(undefined, 78);
//   callback('City not found');
// }
//
// getTempCallBack('Philadelpia', function(err, temp){
//   if(err){
//     console.log('error', err);
//   } else {
//     console.log('success', temp);
//   }
// });
//
// function getTempPromise(location){
//   return new Promise(function(resolve, reject){
//     setTimeout(function (){
//       resolve(79);
//       reject('City not found');
//     }, 1000);
//   });
// }
//
// getTempPromise('Philadelpia').then(function(temp){
//   console.log('promise success', temp);
// }, function(err){
//   console.log('promise error', err);
// });

// Challenge Area
function addPromise(a,b){
  return new Promise(function(resolve, reject){
      setTimeout(function (){
        if(typeof a === 'number' && typeof b === 'number'){
          resolve(a + b);
        } else {
          reject('A + B should both be numbers');
        }
      }, 1000);
    });
}

addPromise(4,6).then(function(sum){
  console.log('success: ', sum);
}, function(err){
  console.log('error: ', err);
});

addPromise(5,6).then(function(sum){
  console.log('success ', sum);
}, function(err){
  console.log('error', err);
});
