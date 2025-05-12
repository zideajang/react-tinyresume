import { useState } from "react";
import Markdown from "react-markdown";


const ResumePreviewComp = ()=>{
    const [content,setContent] = useState(`
## 个人基本信息

**姓名：** zidea

**联系方式：**
* **电话：** +81-80-xxxx-xxxx
* **邮箱：** zidea.zhang@example.com
* **LinkedIn：** linkedin.com/in/weizhangai

**居住地：** 沈阳

## 教育背景

* **本科：** 软件工程
    * XX大学
    * 毕业时间：2020年7月
    * **荣誉：** 校级优秀毕业生

## 工作履历

* **AI 工程师**
    * xx大型互联网公司 (xxx Corporation)
    * 2020年4月至今
    * **职责：**
        * 参与公司智能语音助手产品的核心算法研发与优化，包括语音识别、自然语言理解和语音合成等模块。
        * 负责构建和维护大规模语料库，进行数据清洗、标注和增强。
        * 利用深度学习框架 (PyTorch, TensorFlow) 搭建和训练各类 AI 模型。
        * 与产品团队紧密合作，将 AI 模型部署到实际应用中，并进行性能监控和迭代优化。
        * 参与前沿 AI 技术的研究和探索，例如 Transformer、BERT 等。

## 项目经历

* **智能客服对话系统优化**
    * **项目时间：** 2023年5月 - 至今 (xxx公司)
    * **项目描述：** 负责优化现有智能客服对话系统的自然语言理解模块，提升对话的流畅性和准确性。
    * **技术栈：** Python, TensorFlow, BERT, LSTM, Spacy
    * **个人贡献：**
        * 参与了基于 BERT 的意图识别模型的fine-tuning和优化，提升了意图分类的准确率。
        * 设计并实现了基于对话历史的上下文理解机制，改善了多轮对话的连贯性。
        * 参与了知识图谱的构建和应用，提升了客服系统的知识覆盖范围和问题解决能力。
        * **成果：** 系统对话轮数提升 15%，用户满意度提升 8%。    
        
        `)
    return (
        <div className="box">
        <Markdown>{content}</Markdown>
        </div>
    )
}
export default ResumePreviewComp;