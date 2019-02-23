/// 1 ///
function giveItBackLater(value, callback){
    
      setTimeout(callback, 200, value);
    }

/// 2 ///


    // function addSomePromises(somePromise){

    //   const canGoBothWays = ((resolve, reject) => {
    //     if (true) {
    //       return resolve (somePromise + somePromise)
    //     } else {
    //       return reject (somePromise + somePromise + somePromise)
    //     }
    //   })
      
    //     return canGoBothWays

    // }



    function addSomePromises(somePromise) {
      //Change the resolved value to take a different path
        return Promise.resolve(true);
    }
    
    function addSomePromises(resolve, reject) {
        if (true) {
            //do something
            return somePromise + somePromise
        } else {
            //do something else
            return somePromise + somePromise + somePromise
        }

    }

/// 3 ///

    function promiseToGiveItBackLater(value){
      
      

      }



module.exports = {giveItBackLater, addSomePromises, promiseToGiveItBackLater}
