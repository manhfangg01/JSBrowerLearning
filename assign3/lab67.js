console.log("hello lab 67");

const tbody = document.getElementById("tbody");
const fetchUserData = async () => {
  try {
    const response = await fetch("http://localhost:8000/users");
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Something's off", error.message);
    return [];
  }
};

const renderUserTable = async () => {
  const data = await fetchUserData();
  const html = data
    .map(
      (user) =>
        `<tr>
          <td>${user.id}</td>
          <td>${user.name}</td>
          <td>${user.email}</td>
        </tr>
        `
    )
    .join("");
  console.log(html);
  tbody.innerHTML = html;
};

renderUserTable();
