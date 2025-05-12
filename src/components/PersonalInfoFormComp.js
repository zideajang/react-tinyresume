import React from 'react';
import { useForm } from 'react-hook-form';

const personalInfoSchema = {
  "type": "object",
  "properties": {
    "name": {
      "type": "string",
      "description": "姓名"
    },
    "englishName": {
      "type": ["string", "null"],
      "description": "英文名 (可选)"
    },
    "gender": {
      "type": "string",
      "enum": ["male", "female"],
      "description": "性别"
    },
    "birthDate": {
      "type": ["string", "null"],
      "format": "date",
      "description": "出生日期 (YYYY-MM-DD, 可选)"
    },
    "phone": {
      "type": "string",
      "description": "电话号码"
    },
    "email": {
      "type": "string",
      "format": "email",
      "description": "电子邮件"
    },
    "location": {
      "type": "string",
      "description": "居住地"
    }
  },
  "required": [
    "name",
    "gender",
    "birthDate",
    "phone",
    "email",
    "location"
  ]
};

const PersonalInfoFormComp = ()=>{
  const { register, handleSubmit, formState: { errors } } = useForm();
  const fields = personalInfoSchema.properties;
  const requiredFields = personalInfoSchema.required || [];

  const onSubmit = (data) => {
    console.log(data);
    // 在这里处理表单提交的逻辑
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {Object.entries(fields).map(([name, config]) => (
        <div className="field" key={name}>
          <label className="label">{config.description || name}</label>
          <div className="control">
            {config.type === 'string' && config.format === 'email' ? (
              <input
                className={`input ${errors[name] ? 'is-danger' : ''}`}
                type="email"
                placeholder={config.description || name}
                {...register(name, {
                  required: requiredFields.includes(name),
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: '请输入有效的邮箱地址'
                  }
                })}
              />
            ) : config.type === 'string' && config.format === 'date' ? (
              <input
                className={`input ${errors[name] ? 'is-danger' : ''}`}
                type="date"
                placeholder={config.description || name}
                {...register(name)}
              />
            ) : config.type === 'string' && config.enum ? (
              <div className="select">
                <select {...register(name, { required: requiredFields.includes(name) })}>
                  <option value="">请选择性别</option>
                  {config.enum.map((option) => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </div>
            ) : config.type === 'string' && config.format === 'url' ? (
              <input
                className={`input ${errors[name] ? 'is-danger' : ''}`}
                type="url"
                placeholder={config.description || name}
                {...register(name)}
              />
            ) : config.type === 'string' ? (
              <input
                className={`input ${errors[name] ? 'is-danger' : ''}`}
                type="text"
                placeholder={config.description || name}
                {...register(name, { required: requiredFields.includes(name) })}
              />
            ) : null}
            {errors[name] && <p className="help is-danger">{errors[name].message || `${config.description || name} 是必填项`}</p>}
          </div>
        </div>
      ))}

      <div className="field is-grouped">
        <div className="control">
          <button className="button is-link" type="submit">提交</button>
        </div>
        <div className="control">
          <button className="button is-link is-light">取消</button>
        </div>
      </div>
    </form>
  );
}

export default PersonalInfoFormComp;