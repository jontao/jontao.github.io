var buttons = document.querySelectorAll(".radmenu a");

for (var i=0, l=buttons.length; i<l; i++) {
  var button = buttons[i];
  button.onclick = setSelected;
}

function setSelected(e) {
    if (this.classList.contains("selected")) {
      this.classList.remove("selected");
      if (!this.parentNode.classList.contains("radmenu")) {
        this.parentNode.parentNode.parentNode.querySelector("a").classList.add("selected")
      } else {
        this.classList.add("show");
      }
	  
    } else {
      this.classList.add("selected");
      if (!this.parentNode.classList.contains("radmenu")) {
        this.parentNode.parentNode.parentNode.querySelector("a").classList.remove("selected")
            //console.log("当前URL为:", $(this).attr('href'));
		$(this).attr('href') //a标签的点击事件被js捕获，超链接无反应，加这句处理
      } else {
        this.classList.remove("show");
      }
    }
    return false;
}