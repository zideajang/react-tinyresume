import axios from 'axios';

// 设置 Axios 的 baseUrl
// const baseURL = '/api'; // 假设你的后端 API 服务的基础路径是 /api
const baseURL = process.env.REACT_APP_BASE_URL || '/api'; // 如果环境变量未设置，提供一个默认值
console.log(baseURL)
const instance = axios.create({
  baseURL: baseURL,
  timeout: 10000, // 可选: 设置请求超时时间 (毫秒)
  // headers: { 'Authorization': 'Bearer YOUR_AUTH_TOKEN' } // 可选: 设置全局请求头
});

/**
 * 获取 agent 列表
 * @returns {Promise<AxiosResponse>}
 */
export const getAgentList = async () => {
  return await instance.get('/api/agents');
};

// 获取 用户
export const getUser = async () => {
  console.log("getUser")
  return await instance.get('/api/users/2738b3a4-8928-417f-94ec-e6567a1092ff');
};

// Resume 相关 API
export const createResume = async (data) => {
  try {
    const response = await instance.post('/api/resumes', data); // 注意这里使用了相对路径，baseURL 会自动添加
    return response.data;
  } catch (error) {
    console.error("创建简历失败:", error);
    if (error.response) {
      console.error("后端错误:", error.response.data);
    }
    throw error;
  }
};
