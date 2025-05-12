import { useForm } from "react-hook-form";

const projectSchema = {
  "type": "array",
  "items": {
    "type": "object",
    "properties": {
      "projectName": {
        "type": "string",
        "description": "项目名称"
      },
      "role": {
        "type": "string",
        "description": "在项目中担任的角色"
      },
      "startDate": {
        "type": "string",
        "format": "date",
        "description": "项目开始时间 (YYYY-MM)"
      },
      "endDate": {
        "type": ["string", "null"],
        "format": "date",
        "description": "项目结束时间 (YYYY-MM 或 '至今')"
      },
      "description": {
        "type": "string",
        "description": "项目描述 (背景、目标等)"
      },
      "responsibilities": {
        "type": "array",
        "items": {
          "type": "string"
        },
        "description": "在项目中的职责"
      },
      "achievements": {
        "type": "array",
        "items": {
          "type": "string"
        },
        "description": "在项目中取得的成就 (使用动词开头)"
      },
      "technologiesUsed": {
        "type": "array",
        "items": {
          "type": "string"
        },
        "description": "使用的技术/工具 (可选)"
      }
    },
    "required": [
      "projectName",
      "role",
      "startDate",
      "description",
      "responsibilities"
    ]
  }
}

const ProjectFormComp = ()=>{
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    // 假设我们只渲染一个项目表单，所以直接访问 items.properties
    const fields = projectSchema.items.properties;
    const requiredFields = projectSchema.items.required || [];

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            {Object.entries(fields).map(([name, config]) => (
                <div className="field" key={name}>
                    <label className="label">{config.description || name}</label>
                    <div className="control">
                        {config.type === 'string' && config.format === 'date' ? (
                            <input
                                className={`input ${errors[name] ? 'is-danger' : ''}`}
                                type="month" // 使用 month 类型来匹配 YYYY-MM 格式
                                placeholder={config.description || name}
                                {...register(name, { required: requiredFields.includes(name) })}
                            />
                        ) : config.type === 'string' ? (
                            <input
                                className={`input ${errors[name] ? 'is-danger' : ''}`}
                                type="text"
                                placeholder={config.description || name}
                                {...register(name, { required: requiredFields.includes(name) })}
                            />
                        ) : config.type === 'array' ? (
                            // 对于数组类型的字段，你可能需要更复杂的 UI，例如可以动态添加/删除条目的列表
                            // 这里为了简单起见，我们只渲染一个 textarea
                            <textarea
                                className={`textarea ${errors[name] ? 'is-danger' : ''}`}
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
                    <button className="button is-link" type="submit">Submit</button>
                </div>
                <div className="control">
                    <button className="button is-link is-light">Cancel</button>
                </div>
            </div>
        </form>
    );
}

export default ProjectFormComp;