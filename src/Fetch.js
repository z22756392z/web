const Fetch = async (/*resource*/) => {//known as an asynchronous function and whenever we called an asynchronous function that always return a Promise
    const response  = await fetch('https://z22756392z.github.io/web-data/data.json'/*resource*/);
    if(response.status !== 200){//when we use the fetch method if there's a problem with resource we're passing misspell or something and that resource
                                 //doesn't exist. Then this doesn't reject still resolved. So because the response is not valid it not 
                                 //been found then it is throwing some kind of error with response.json and it is rejecting this promise. 
                                 //So to combat this, we have to manually check if the response object have a status of 200
  
    throw new Error('cannot fetch the data'); //when we throw an error inside an async function the Promise return by Fetch async function is rejected 
                                              //and therefore if it's rejected  we gonna catch it by catch method. 
    }
    const data  = response.json();
  
    return data;
    //what is does is do this fetch and this return a Promise and this await keyword stops javascript right here
    //it stops it from assigning a value to this variable, response, until the promise has resolved 
    //once the promise has resolved we can take the value from that resolve function the response and assign it to this variable.
  
    //And this won't blocking code because adding all of this inside an asynchronous function and this asynchronous function in itself is non-blocking
    //So when we call function out here somewhere that isn't going to block the rest of the code this is returning a promise. So all of this stuff in being
    //handled somewhere else in the browser so the rest of our code down here could carry on if it wanted to so we're only stopping it inside this 
    //asynchronous function
};

  