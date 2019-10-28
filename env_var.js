const {exec}= require('child_process');
console.log(process.env.foo);
process.env.foo='fox';
console.log(process.env.foo);
exec(`export foo=${process.env.foo}`,(err, stdout, stderr)=>{
  if(err){
    console.log(err)
  }
})
