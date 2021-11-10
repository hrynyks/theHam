(function () {
  const tabContainer = document.querySelector("#tab-container");
  let activeTab = document.querySelector(".active-tab");
  const tabsContent = document.querySelectorAll("[data-tab-content]");

  tabContainer.addEventListener("click", ({ target }) => {
    const attrTab = target.dataset.btnTab;

    if (target === activeTab || !attrTab) {
      return;
    }

    switchTab(target, attrTab);
  });

  function switchTab(target, attrTab) {
    activeTab.classList.remove("active-tab");
    activeTab = target;
    activeTab.classList.add("active-tab");

    tabsContent.forEach((el) => {
      if (el.dataset.tabContent === attrTab) {
        el.classList.remove("hidden");
      } else {
        el.classList.add("hidden");
      }
    });
  }

  switchTab(activeTab, "1");
})();

const tabContainer = document.querySelector(".js-work-items");
let activeTab = document.querySelector(".work__item-active");
const tabsContent = document.querySelectorAll(".work__content-image");

tabContainer.addEventListener("click", ({ target }) => {
  const attrTab = target.id;

  if (target === activeTab || !attrTab) {
    return;
  }

  switchTab(target, attrTab);
});

function switchTab(target, attrTab) {
  activeTab.classList.remove("work__item-active");
  activeTab = target;
  activeTab.classList.add("work__item-active");
  console.log(tabsContent);
  if (attrTab === "all") {
    tabsContent.forEach((el) => {
      el.classList.remove('hidden');
    });
  } else {
      tabsContent.forEach(el => {
          const attrContent = el.dataset.workItem;
          if(attrTab === attrContent) {
            el.classList.remove('hidden');
          } else {
            el.classList.add('hidden');
          }
      })
  }
}

//switchTab(activeTab, 'all')
