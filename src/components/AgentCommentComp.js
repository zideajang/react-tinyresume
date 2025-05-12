

const AgentCommentComp = ()=>{
    return (
        <div class="card is-primary">
  <header class="card-header">
    <p class="card-header-title">建议</p>
    <button class="card-header-icon" aria-label="more options">
      <span class="icon">
        <i class="fas fa-angle-down" aria-hidden="true"></i>
      </span>
    </button>
  </header>
  <div class="card-content">
    <div class="content">
      给出修改建议
      <br />
      <time datetime="2016-1-1">2025-05-12 </time>
    </div>
  </div>
  <footer class="card-footer">
    <button class="card-footer-item">接受</button>
    <button class="card-footer-item">取消</button>
    <button class="card-footer-item">继续</button>
  </footer>
</div>
    )
}

export default AgentCommentComp;