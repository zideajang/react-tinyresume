import AgentCommentComp from "../components/AgentCommentComp";
import AgentListComp from "../components/AgentListComp";
import ChatInputComp from "../components/ChatInputComp";
import FormTabComp from "../components/FormTabComp";
import MessageListComp from "../components/MessageListComp";
import PersonalInfoFormComp from "../components/PersonalInfoFormComp";
import ProjectFormComp from "../components/ProjectFormComp";
import ResumePreviewComp from "../components/ResumePreviewComp";
import ToolSetComp from "../components/ToolSetComp";
import { HomePageProvider } from "../context/HomePageContext";


const HomePage = ()=>(
    <HomePageProvider>
        <div className="container is-fluid mt-6">
        <div class="columns">
            <div class="column">
                <ToolSetComp/>
                <div className="mt-3">
                    <ResumePreviewComp/>
                </div>
            </div>
            <div class="column">
                <FormTabComp/>
                <PersonalInfoFormComp/>
                <div className="mt-6">
                    <AgentCommentComp/>
                </div>
            </div>
            <div class="column ">
                <div className="is-flex is-flex-direction-column" 
                    style={{
                        height:"100vh"
                    }}>
                    <div>
                        <AgentListComp/>
                    </div>
                    <div className="is-flex-grow-1">
                        <MessageListComp/>
                    </div>
                    <div>
                        <ChatInputComp/>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </HomePageProvider>
)

export default HomePage;