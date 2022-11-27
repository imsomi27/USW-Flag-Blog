
// export {sideBtn, aside, label}//
function sidebar() {
  const sideBtn = document.querySelector(".SideBoard-btn");
  const aside = document.querySelector('aside');
  const label = document.querySelector('side_toggle_btn');
  
  sideBtn.addEventListener('click', function() {
    aside.style.left = 0;
    label.style.opacity = 0;
  })
  
  sideBtn.addEventListener('blur', function() {
    aside.style.left = '-200px';
    label.style.opacity = 1;
  })
  
};

export default sidebar;
