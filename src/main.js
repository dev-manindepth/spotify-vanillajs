
document.addEventListener("DOMContentLoaded",()=>{
  if(localStorage.getItem("accessToke")){
    window.location.href="dashboard/dashboard.html"
  }else{
    window.location.href="login/login.html"
  }
})
