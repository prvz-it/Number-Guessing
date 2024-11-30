let box01 = document.querySelector(".box01");
let input01 = document.querySelector(".box01 input");
let error01 = document.querySelector(".box01 span");
let button01 = document.querySelector(".box01 button");

let box02 = document.querySelector(".box02");
let heading02 = document.querySelector(".box02 h2");
let input02 = document.querySelector(".box02 input");
let error02 = document.querySelector(".box02 span");
let button02 = document.querySelector(".box02 button");

let box03 = document.querySelector(".box03");
let input03 = document.querySelector(".box03 input");
let error03 = document.querySelector(".box03 span");
let button03 = document.querySelector(".box03 button");

let box04 = document.querySelector(".box04");
let heading04 = document.querySelector(".box04 h2");
let input04 = document.querySelector(".box04 input");
let error04 = document.querySelector(".box04 span");
let button04 = document.querySelector(".box04 button");
let chance = document.querySelector(".box04 p");

let box05 = document.querySelector(".box05");
let heading05 = document.querySelector(".box05 h2");
let result = document.querySelector(".box05 h3");

let chanceCount = 5;

button01.addEventListener("click", () => {
  if (input01.value == "") {
    error01.classList.add("animation");
  } else {
    if (input01.value - 100) {
      input01.value = "";
      error01.classList.add("animation");
    } else {
      error01.classList.remove("animation");

      box01.style.display = "none";
      box02.style.display = "flex";
      heading02.innerHTML = input01.value;
    }
  }
});

button02.addEventListener("click", () => {
  if (input02.value == "") {
    error02.classList.add("animation");
  } else {
    if (input02.value - 100) {
      if (input02.value >= 0 && input02.value <= 9) {
        error02.classList.remove("animation");

        box02.style.display = "none";
        box03.style.display = "flex";
      } else {
        error02.classList.add("animation");
        input02.value = "";
      }
    } else {
      error02.classList.add("animation");
      input02.value = "";
    }
  }
});

// Eye icon 1 ...

let icon_box = document.querySelector(".icon-box");
let iconX = document.querySelector(".icon-x");
let iconY = document.querySelector(".icon-y");

icon_box.addEventListener("click", () => {
  if (input02.type === "password") {
    input02.type = "text";

    iconX.style.display = "none";
    iconY.style.display = "block";
  } else {
    input02.type = "password";

    iconX.style.display = "block";
    iconY.style.display = "none";
  }
});

button03.addEventListener("click", () => {
  if (input03.value == "") {
    error03.classList.add("animation");
  } else {
    if (input03.value - 100) {
      input03.value = "";
      error03.classList.add("animation");
    } else {
      error03.classList.remove("animation");

      box03.style.display = "none";
      box04.style.display = "flex";
      heading04.innerHTML = input03.value;
    }
  }
});

button04.addEventListener("click", () => {
  if (input04.value == "") {
    error04.classList.add("animation");
  } else {
    if (input04.value - 100) {
      if (input04.value >= 0 && input04.value <= 9) {
        if (input02.value == input04.value) {
          error04.classList.remove("animation");

          box04.style.display = "none";
          box05.style.display = "flex";
          heading05.innerHTML = `${input03.value} is winner`;
          result.innerHTML = `Result : ${input04.value}`;
        } else {
          chanceCount--;
          input04.value = "";
          error04.classList.remove("animation");
          chance.innerHTML = `chance left : ${chanceCount}`;
          if (chanceCount == 0) {
            box04.style.display = "none";
            box05.style.display = "flex";
            heading05.innerHTML = `${input01.value} is winner`;
            result.innerHTML = `Result : ${input02.value}`;
          }
        }
      } else {
        error04.classList.add("animation");
        input04.value = "";
      }
    } else {
      error04.classList.add("animation");
      input04.value = "";
    }
  }
});

// Eye icon 2 ...

let icon_box1 = document.querySelector(".icon-box1");
let iconA = document.querySelector(".icon-a");
let iconB = document.querySelector(".icon-b");

icon_box1.addEventListener("click", () => {
  if (input04.type === "password") {
    input04.type = "text";

    iconA.style.display = "none";
    iconB.style.display = "block";
  } else {
    input04.type = "password";

    iconA.style.display = "block";
    iconB.style.display = "none";
  }
});
