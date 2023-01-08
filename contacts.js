const fs = require("fs").promises;
const path = require("path");

const contactsPath = path.resolve(
  "/Users/aleksandr/git_hub_projects/Node.js-Course-Homework/db/contacts.json"
);

async function listContacts() {
  const rawData = await fs
    .readFile(`${contactsPath}`, "utf-8")
    .then((data) => data)
    .catch((err) => console.error(err.message));
  const contacts = JSON.parse(rawData);
  console.log(contacts);
}

async function getContactById(contactId) {
  const rawData = await fs
    .readFile(`${contactsPath}`, "utf-8")
    .then((data) => data)
    .catch((err) => console.error(err.message));
  const contacts = JSON.parse(rawData);

  const contactById = contacts.filter((el) => el.id === contactId.toString());

  console.log(contactById);
}

function removeContact(contactId) {
  // ...твій код
}

async function addContact(name, email, phone) {
  const rawData = await fs
    .readFile(`${contactsPath}`, "utf-8")
    .then((data) => data)
    .catch((err) => console.error(err.message));
  const contacts = JSON.parse(rawData);
  let contact = {
    id: `${contacts.length + 1}`,
    name: `${name}`,
    email: `${email}`,
    phone: `${phone}`,
  };
  let data = [...contacts, contact];
  let dataToWrite = JSON.stringify(data, null, 2);

  console.log(dataToWrite);

  fs.writeFile(`${contactsPath}`, dataToWrite, (err) => {
    if (err) throw err;
    console.log("Data written to file");
  });
  console.log("There is you contacts after upgrade: ", listContacts());
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
