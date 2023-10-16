export const langs = ["html", "css", "javascript"];

export function hello1() {
  console.log("hello");
}

export const hello2 = function () {
  console.log("hello");
};

export const hello3 = () => {
  console.log("hello");
};

export { langs, hello1, hello2, hello3 };
