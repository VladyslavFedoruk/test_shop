const threeCheck = document.querySelector(".focus");

const pageOne = document.querySelector(".page_one");
const pageTwo = document.getElementById("page_two");
const pageThree = document.getElementById("Check");
const pageBox = document.getElementById("page_box");

const commentsOne = document.getElementById("comments_display");
const commentsTwo = document.getElementById("comments_display_one");
const footer = document.getElementById("fppter_display");

const oneBox = document.querySelector(".one_box");
const twoBox = document.querySelector(".two_box");
const threeBox = document.querySelector(".three_box");
const fourBox = document.querySelector(".four_box");
const fiveBox = document.querySelector(".five_box");
const sixBox = document.querySelector(".six_box");
const sevenBox = document.querySelector(".seven_box");
const eightBox = document.querySelector(".eight_box");
const nineBox = document.querySelector(".nine_box");
const tenBox = document.querySelector(".ten_box");
const elevenBox = document.querySelector(".eleven_box");
const twelvBox = document.querySelector(".tvelw_box");

const oneModal = document.querySelector(".click_me_pidor");
const modalWrapp = document.querySelector(".wrapp_modal_box");

const endGiftAnimation = document.querySelector(".img_gift_wind");
const blyyyy = document.querySelector(".pop");

document.addEventListener('DOMContentLoaded', function () {
  setTimeout(() => {


    pageThree.style.display = "block";
  }, 1000);

  setTimeout(() => {
    threeCheck.classList.add("b-show-two");
    threeCheck.style.display = "block";
  }, 2000);

  setTimeout(() => {
    secondCheck.classList.add("b-show-two");
    secondCheck.style.display = "block";
  }, 3200);
  setTimeout(() => {
    threeCheck.classList.add("b-show-two");
    threeCheck.style.display = "block";
  }, 5200);

  setTimeout(() => {
    pageThree.style.display = "none";
    pageBox.style.display = "block";
    modalWrapp.style.display = "block";
  }, 6000);


  let fddfd = false;
  oneModal.addEventListener("click", function () {
    modalWrapp.remove();

    const remove = document.querySelector(".remove");

    const twoModalIcon = document.querySelector(".two_modal_icon");
    const threeModalIcon = document.querySelector(".two_modal_icon_Two");

    let kdsfksd = document.querySelector(".gift_box_one");
    let giftBoxUp = document.querySelector(".gift_box_gift");

    let delit = document.querySelector(".clickKlos");
    let test = false;
    let tesTwoHui = false;
    let hui = document.querySelector(".wrapp_box");
    hui.addEventListener("click", function (p) {
      if (!test) {
        let tart = p.target;
        tart.style.top = "-16px";
        tart.classList.add("no-click");
        setTimeout(() => {
          twoModalIcon.style.display = "block";
        }, 2000);

        delit.addEventListener("click", function () {
          remove.remove();

          let huiTwo = document.querySelector(".wrap_box_two");
          huiTwo.addEventListener("click", function (a) {
            if (!tesTwoHui) {
              let targTwo = a.target;
              let classTest = targTwo.classList.contains("no-click");
              if (classTest) {
                console.log("test");
              } else {
                let styles = `
            top: 62px;
            margin: -31px 0`;
                targTwo.style = styles;

                setTimeout(() => {
                  endGiftAnimation.style.display = "block";
                  huiTwo.classList.add("blur");
                  blyyyy.classList.add("decoration_rotato");
                  setTimeout(() => {
                    endGiftAnimation.style.display = "none";
                  }, 2000);
                }, 2500);

                setTimeout(() => {
                  threeModalIcon.style.display = "block";
                }, 4500);
                tesTwoHui = true;
              }
            }
          });
        });

        test = true;
      }
    });
  });
});