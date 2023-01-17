// ทำได้แค่นี้ละ ครับ :D

const media_list = document.querySelectorAll(".media-list > ul > li");
media_list.forEach((li) => {

  li.addEventListener("click", () => {
    let current_id = "";
    current_id = li.getAttribute("id");

    const m_item = document.querySelectorAll(".m-item");

    m_item.forEach((item) => {
      if (!item.classList.contains(current_id)) {
        item.classList.add("unactive");
      } else {
        item.classList.remove("unactive");
      }
    });
    // console.log(current_id);
  });
});
