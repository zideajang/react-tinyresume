

const AgentComp = ({agent,clickOnAgent})=>{
    return (
  <div class="box" onClick={clickOnAgent(agent)}>
    <div className="is-flex pt-3 is-justify-content-center">
        <figure class="image is-64x64 is-1by1 mb-3">
            <img
                className="is-rounded"
                src={agent.iconUrl}
                alt={agent.name}
                />
            </figure>
    </div>
      <p className="is-size-5 has-text-centered">{agent.name} <span></span></p>
      <br />
      <p className="is-size=7 is-hidden">{agent.description}</p>
</div>
    )
}

export default AgentComp;