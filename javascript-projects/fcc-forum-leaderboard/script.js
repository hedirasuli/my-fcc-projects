const forumLatest =
  'https://cdn.freecodecamp.org/curriculum/forum-latest/latest.json';
const forumTopicUrl = 'https://forum.freecodecamp.org/t/';
const forumCategoryUrl = 'https://forum.freecodecamp.org/c/';
const avatarUrl = 'https://cdn.freecodecamp.org/curriculum/forum-latest';

const allCategories = {
  299: { category: 'Career Advice', className: 'career' },
  409: { category: 'Project Feedback', className: 'feedback' },
  417: { category: 'freeCodeCamp Support', className: 'support' },
  421: { category: 'JavaScript', className: 'javascript' },
  423: { category: 'HTML - CSS', className: 'html-css' },
  424: { category: 'Python', className: 'python' },
  432: { category: 'You Can Do This!', className: 'motivation' },
  560: { category: 'Backend Development', className: 'backend' }
};
const timeAgo = (timestamp) => {
  const date = new Date(timestamp);
  const now = new Date();
  const seconds = Math.floor((now - date) / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  if (minutes < 60) return `${minutes}m ago`;
  if (hours < 24) return `${hours}h ago`;
  return `${days}d ago`;
};

const viewCount = (views) => {
  if (views >= 1000) {
    return Math.floor(views / 1000) + "k";
  }
  return views;
};

const forumCategory = (id) => {
  let selectedCategory = allCategories[id];

  if (!selectedCategory) {
    selectedCategory = { category: "General", className: "general" };
  }

  const { category, className } = selectedCategory;
  return `<a class="category ${className}" href="${forumCategoryUrl}${className}/${id}">${category}</a>`;
};

const avatars = (posters, users) => {
  return posters.map((poster) => {
    const user = users.find((user) => user.id === poster.user_id);
    if (user) {
      const avatarSize = 30;
      const avatarPath = user.avatar_template.replace("{size}", avatarSize);
     
      const src = avatarPath.startsWith("http") ? avatarPath : avatarUrl + avatarPath;
      return `<img src="${src}" alt="${user.name}">`;
    }
  }).join("");
};

const showLatestPosts = (data) => {
  const { users, topic_list } = data;
  const { topics } = topic_list;

  const postsContainer = document.getElementById("posts-container");

  postsContainer.innerHTML = topics.map((item) => {
    const { id, title, views, posts_count, slug, posters, category_id, bumped_at } = item;

    return `
      <tr>
        <td>
          <a class="post-title" href="${forumTopicUrl}${slug}/${id}" target="_blank">${title}</a>
          ${forumCategory(category_id)}
        </td>
        <td>
          <div class="avatar-container">${avatars(posters, users)}</div>
        </td>
        <td>${posts_count - 1}</td>
        <td>${viewCount(views)}</td>
        <td>${timeAgo(bumped_at)}</td>
      </tr>`;
  }).join("");
};

const fetchData = async () => {
  try {
    const res = await fetch(forumLatest);
    const data = await res.json();
    showLatestPosts(data);
  } catch (err) {
    console.log(err);
  }
};

fetchData();