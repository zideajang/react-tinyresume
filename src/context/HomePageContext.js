
import { createContext, useState, useEffect,useRef } from "react";
import { createResume, getAgentList,getUser } from "../api";
const baseURL = process.env.REACT_APP_BASE_URL || '/api'; // 如果环境变量未设置，提供一个默认值

const HomePageContext = createContext({});

export const HomePageProvider = ({ children }) => {

    // 通用的属性
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [notification, setNotification] = useState(null);
    const websocket = useRef(null);
    // user
    const [user, setUser] = useState(null);

    // response
    const [response, setResponse] = useState(null);

    // agents 列表
    const [agents, setAgents] = useState([]);
    // 当前运行的 Agent
    const [currentAgent, setCurrentAgent] = useState(null);

    // messages 列表
    const [messages, setMessages] = useState([]);


    // 消息
    const [newMessage, setNewMessage] = useState(null);
    const [resume, setResume] = useState(null);

    const [formNameList,setFormNameList] = useState(
        [
            "personalInfo",
            "desiredPosition",
            "educationExperience",
            "projectExperience",
            "workExperience",
        ]
    )

    const [currentFormName,setCurrentFormName] = useState("personalInfo")

  

  useEffect(() => {
    websocket.current = new WebSocket('ws://localhost:8000/ws');

    websocket.current.onopen = () => {
      console.log('WebSocket connection opened');
    };

    websocket.current.onclose = () => {
      console.log('WebSocket connection closed');
    };

    websocket.current.onmessage = (event) => {
        

        try {
            const result = JSON.parse(JSON.parse(event.data))
            result.role = "assistant"
            setMessages((prevMessages) => [...prevMessages, result]);
        } catch (error) {
        console.error("Error parsing modified JSON:", error);
        }
    };

    websocket.current.onerror = (error) => {
      console.error('WebSocket error:', error);
    };

    return () => {
      if (websocket.current && websocket.current.readyState === WebSocket.OPEN) {
        websocket.current.close();
      }
    };
  }, []);



    useEffect(() => {
        let isMounted = true; // 添加一个标志来处理组件卸载的情况

        const fetchAgents = async () => {
            setLoading(true);
            setError(null); // 重置错误状态

            try {
                const response = await getAgentList();
                if (isMounted) {
                    response.data.data.forEach(agent => {
                        agent.iconUrl = `${baseURL}${agent.iconUrl}`
                        return agent
                    });
                    setAgents(response.data.data); // 根据你的后端返回结构调整
                    setCurrentAgent(response.data.data[0])
                    setLoading(false);

                }
            } catch (err) {
                if (isMounted) {
                    setError(err);
                    setLoading(false);
                    console.error("获取 Agent 列表失败:", err);
                }
            }
        };

        const fetchUser = async () => {
            try {
                const userData = await getUser();
                if (isMounted) {
                    userData.data.iconUrl = `${baseURL}${userData.data.iconUrl}`
                    setUser(userData.data);
                    console.log("用户信息获取成功:", userData.data.name);
                }
            } catch (err) {
                if (isMounted) {
                    setError(err);
                    console.error("获取用户信息失败:", err);
                }
            }
        };

        const fetchData = async () => {
            setLoading(true);
            setError(null);
            await Promise.all([fetchAgents(), fetchUser()]);
            
            if (isMounted) {
                setLoading(false);
            }
        };

        fetchData();

        // cleanup function 在组件卸载时执行
        return () => {
            isMounted = false;
        };
    }, []); // 空依赖数组表示 effect 只在组件挂载和卸载时执行一次

    const sendMessage = async (data) => {

        console.log(data)

        console.log(user)
        console.log(currentAgent)

        setError(null);
        setResponse(null);

        try {
            setLoading(true)
            if (websocket.current && websocket.current.readyState === WebSocket.OPEN) {
                const humanMessage = {
                    userId:user.id,
                    agentId:currentAgent.id,
                    role:"user",
                    content:data.query
                }
                setMessages((prevMessages) => [...prevMessages, humanMessage]);
                websocket.current.send(JSON.stringify(humanMessage));
                setNewMessage(null);
                }

        } catch (err) {
            console.log(err)
            setError(err);
        } finally {
            setLoading(false);
        }
    };

    const handlecreateResume = (data) => {
        createResume(data)
    }

    return (
        <HomePageContext.Provider value={{
            agents,
            setAgents,
            currentAgent,
            setCurrentAgent,
            messages,
            setMessages,
            user,
            setUser,

            newMessage,
            setNewMessage,
            sendMessage,

            handlecreateResume,
            currentFormName,
            formNameList
        }}>
            {children}
        </HomePageContext.Provider>
    )
}

export default HomePageContext;