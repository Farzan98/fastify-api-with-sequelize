let items = require("../items");
const { v4: uuidv4 } = require("uuid"); // v4 is the version of package uuid we are using
const Item = require("../models/Items");

const getItem = async (req, reply) => {
  try {
    const { id } = req.params;
    const item = await Item.findByPk(id);
    reply.send(item);
  } catch (error) {}
};

const getItems = async (req, reply) => {
  try {
    const items = await Item.findAll();
    reply.send(items);
  } catch (error) {}
};

const addItem = async (req, reply) => {
  try {
    const { title } = req.body;
    const itemObj = {
      id: uuidv4(),
      title,
    };
    // items = [...items, itemObj];
    // items.push(itemObj);
    const createdItem = await Item.create(itemObj);
    reply.code(201).send(createdItem);
  } catch (error) {}
};

const deleteItem = async (req, reply) => {
  try {
    const { id } = req.params;
    // items = items.filter((item) => item.id !== id);
    await Item.destroy({ where: { id } });
    reply.send({ message: `Item with id : ${id} deleted successfully.` });
  } catch (error) {}
};

const updatedItem = async (req, reply) => {
  try {
    const { id } = req.params;
    const { title } = req.body;
    await Item.update({ title }, { where: { id } });
    reply.send({ message: `Item with ${id} updated successfully.` });
  } catch (error) {}
};

module.exports = { getItem, getItems, addItem, deleteItem, updatedItem };
