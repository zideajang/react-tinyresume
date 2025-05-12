import React, { useContext } from "react";
import HomePageContext from "../context/HomePageContext";

const FormTabComp = () => {
    const formNames = {
        personalInfo: "个人信息",
        desiredPosition: "期望职位",
        educationExperience: "教育背景",
        projectExperience: "项目经验",
        workExperience: "工作履历",
    };

    const { currentFormName, setCurrentFormName } = useContext(HomePageContext);

    const handleTabClick = (name) => {
        setCurrentFormName(name);
    };

    return (
        <div className="tabs is-centered">
            <ul>
                {Object.entries(formNames).map(([name, label]) => (
                    <li
                        key={name}
                        className={currentFormName === name ? "is-active" : ""}
                        onClick={() => handleTabClick(name)}
                    >
                        <a>{label}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FormTabComp;