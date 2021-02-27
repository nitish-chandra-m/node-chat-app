const users = [];

const addUser = ({ id, username, room }) => {
  // Clean the data
  username = username.trim().toLowerCase();
  room = room.trim().toLowerCase();

  // Validate the data
  if (!username || !room) {
    return {
      error: "Username & room are required!",
    };
  }

  //   Check for existing user
  const existingUser = users.find((user) => {
    return user.room === room && user.username === username;
  });

  //   Validate username
  if (existingUser) {
    return {
      error: "Username in use!",
    };
  }

  //   Store user
  const user = { id, username, room };
  users.push(user);
  return { user };
};

const removeUser = (id) => {
  const index = users.findIndex((user) => {
    return user.id === id;
  });

  if (index !== -1) {
    return { ...users.splice(index, 1)[0] };
  }
};

const getUser = (id) => {
  const user = users.find((user) => user.id === id);

  return user ? user : undefined;
};

const getUsersInRoom = (room) => {
  room = room.trim().toLowerCase();
  const roomUsers = users.filter((user) => user.room === room);
  return roomUsers ? roomUsers : [];
};

module.exports = {
  addUser,
  removeUser,
  getUser,
  getUsersInRoom,
};
