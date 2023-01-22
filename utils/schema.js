const yup = require('yup');

const registerSchema = yup.object().shape({
   fullName: yup.string().required('لطفا اسم و فامیل خود را کامل وارد کنید گل'),
  email: yup.string().email().required('لطفا ایمیل خود را وارد کنید بیبی '),
  password: yup.string().required('لطفا بسورد خود را وارد فرمایید وگرنه جوره دیگه باهات صحبت میکنم '),
  age: yup.number().required('چند سالته بیبی').positive().integer(),
});

 const loginSchema = yup.object().shape({
   email: yup.string().email().required('لطفا ایمیل خود را وارد کنید بیبی'),
   password: yup.string().required('لطفا بسورد خود را وارد فرمایید وگرنه جوره دیگه باهات صحبت میکنم '),
});



module.exports = { registerSchema, loginSchema};