import { useContext } from "react";
import { useForm } from "react-hook-form";

import HomePageContext from "../context/HomePageContext";
import { CiExport } from "react-icons/ci";
import { FaRegSave } from "react-icons/fa";
import { AiFillEdit } from "react-icons/ai";

const ToolSetComp= ()=>{
    const { handleSubmit, register, formState: { errors } } = useForm();
    const {
        handlecreateResume,
        user
    } =useContext(HomePageContext)

    const onSubmit = (data) => {
        console.log("Form data:", data);
        data.userId = user.id
        handlecreateResume(data); // 假设 createResume 接收表单数据
    };

    return (
        <>
        {user && <form onSubmit={handleSubmit(onSubmit)}>
            <div className="level">
                <div className="level-left">
                    <div className="buttons">
                        <button className="button">
                            <span className="icon">
                                <CiExport/>
                            </span>
                            <span>导出</span>
                        </button>
                        <button className="button">
                            <span className="icon">
                                <FaRegSave/>
                            </span>
                            <span>保存</span>
                        </button>
                        <button className="button">
                            <span className="icon">
                                <AiFillEdit/>
                            </span>
                            <span>优化</span>
                        </button>
                    </div>
                    </div>
                <div className="level-item">
                    <div className="field">
                        <div className="control">
                            <input
                                className={`input ${errors.title ? 'is-danger' : ''}`} // 根据是否有错误添加 Bulma 的 is-danger 类
                                type="text"
                                placeholder="简历标题"
                                {...register("title", { required: "简历标题是必填项" })} // 注册 title 字段并添加必填验证
                            />
                            {errors.title && <p className="help is-danger">{errors.title.message}</p>} {/* 显示错误消息 */}
                        </div>
                    </div>
                </div>
                <div className="level-right">
                    <button className="button" type="submit">
                        创建
                    </button>
                </div>
            </div>
        </form>}
    </>
    )
}
export default ToolSetComp;