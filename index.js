const accordionsNodeList = document.querySelectorAll(".accordion");

const clickHandler = (accordionEle) => {
  //close other accordions
  const accordionArray = Array.from(accordionsNodeList);
  const filteredArray = accordionArray.filter((item) => item !== accordionEle);
  filteredArray.map((item) => {
    item.classList.remove("active");
    const panelEle = item.nextElementSibling;
    panelEle.style.maxHeight = null;
  });

  //toggle the clicked accordion
  accordionEle.classList.toggle("active");
  const panelEle = accordionEle.nextElementSibling;

  if (panelEle.style.maxHeight) {
    panelEle.style.maxHeight = null;
  } else {
    panelEle.style.maxHeight = panelEle.scrollHeight + "px";
  }
};

accordionsNodeList.forEach((accordionEle) => {
  accordionEle.addEventListener("click", () => {
    clickHandler(accordionEle);
  });
});
