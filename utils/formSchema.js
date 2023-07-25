import * as yup from 'yup';

/* -------------------------------------------------------------------------- */
/*                                  LOCALIZE                                  */
/* -------------------------------------------------------------------------- */
yup.setLocale({
    string:{
      min: 'طول ${path} باید حداقل ${min} حرف باشد',
      length:'${path} باید ${length} کاراکتر باشد'
    },
    number:{
      notType:'${path} باید به صورت عددی باشد',
      min: '${path} باید بیشتر از  ${min} باشد',
      max: '${path} باید کمتر از  ${max} باشد',
      positive: '${path} باید عدد مثبت باشد',
      
    },
    mixed:{
      notType:'${path} باید به صورت عددی باشد',
      required:'وارد کردن ${path} الزامی است',
      
    },
    array:{
      max:'تعداد ${path} باید کمتر از  ${max} باشد',
      min:'تعداد ${path} باید بیشتر از  ${min} باشد'
    }
  })

  /* -------------------------------------------------------------------------- */
  /*                             FORMAT CATCH ERRORS                            */
  /* -------------------------------------------------------------------------- */
  export const formatError = err => {
    if (!err || !err?.errors || !Array.isArray(err.errors)) return null;
    const {errors} = err
    
    return errors[0];
  };
  
  

  /* ------------------------------- ADD PRODUCT ------------------------------ */
  export const changeRoleSchema = yup.object().shape({
    role_id: yup.number().positive().required().label('نقش'),
    city_id: yup.number().positive().required().label('شهر'),
    postal_code: yup.string().required().length(10,'کد پستی باید ده رقم باشد').label('کد پستی'),
    address: yup.string().required().label('آدرس'),
    // docs: yup.array().of(yup.string()).required().max(5).label('مدارک هویتی'),
    
  });

  /* ------------------------------- ADD ADDRESS ------------------------------ */
  export const addAddressSchema = yup.object().shape({
    address: yup.string().required().label('آدرس'),
      province: yup.string().required().label('استان'),
      city: yup.string().required().label('شهر'),
      lat: yup.number().required().label('موقعیت روی نقشه'),
      long: yup.number().required().label('موقعیت روی نقشه'),
      
    
  });