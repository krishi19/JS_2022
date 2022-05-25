var container = document.querySelector(".container");
const filter = document.getElementById('filter');
// The Scroll Event.
window.addEventListener("scroll", function () {
  var scrollHeight = document.documentElement.scrollHeight;
  var scrollTop = document.documentElement.scrollTop;
  var clientHeight = document.documentElement.clientHeight;

  if (scrollTop + clientHeight > scrollHeight - 5) {
    setTimeout(createPost, 1000);
  }
});
// The createPost function creates the blog post.
function createPost() {
  var post = document.createElement("div");
  post.className = "text";
  var h1 = document.createElement("h1");
  var p = document.createElement("p");
  h1.innerHTML = "Lorem ipsum dolor sit amet";
  p.innerHTML =
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque eos, atque sed saepe tempore, sequi qui excepturi voluptate ut perspiciatis culpa sit harum, corrupti ullam voluptatibus obcaecati sint dignissimos quas.";
  post.appendChild(h1);
  post.appendChild(p);
  container.appendChild(post);
}
