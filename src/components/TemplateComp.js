import { useContext } from "react";
import HomePageContext from "../context/HomePageContext";


const TemplateComp = ()=>{
    const {
        agents
    } = useContext(HomePageContext)
    return (
        <>
        <h1 className="title">Agent 列表</h1>
        </>
    )
}

export default TemplateComp;