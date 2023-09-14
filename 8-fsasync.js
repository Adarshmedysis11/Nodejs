const { log } = require('console')
const { readFile, writeFile} = require('fs')
//same as const fs = req('fs') and fs.readfile or writefile

readFile('./content/first.txt','utf8',
  (err,result)=>{
    if(err){
        console.log(err);
        return
    }
    const first = result;
    readFile('./content/second.txt','utf8',
    (err,result)=>{
      if(err){
      console.log(err);
      return
      }
     const second = result;
       writeFile('./content/resultasync.txt',
        `Here is the result : ${first}, ${second}`,
        (err,result)=>{
            if(err){
                console.log(err);
                return;
            }
            console.log(result)
        })
    }
   )
  }
)
