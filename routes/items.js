const {
  getItem,
  getItems,
  addItem,
  deleteItem,
  updatedItem,
} = require("../controllers/items");

// Options for Items
const item = {
  type: "object",
  properties: {
    id: {
      type: "string",
    },
    title: {
      type: "string",
    },
  },
};

// Options for getting single item
const getItemOpts = {
  schema: {
    response: {
      200: item,
    },
  },
  handler: getItem,
};

// Options for get items
const getItemsOpts = {
  schema: {
    response: {
      200: {
        type: "array",
        items: item,
      },
    },
  },
  handler: getItems,
};

// Optiosn for adding an Item
const addItemOpts = {
  schema: {
    body: {
      type: "object",
      required: ["title"],
      properties: {
        title: {
          type: "string",
        },
      },
    },
    response: {
      201: item,
    },
  },
  handler: addItem,
};

// Options for deleting an Item
const deleteItemOpts = {
  schema: {
    response: {
      200: {
        type: "object",
        properties: {
          message: {
            type: "string",
          },
        },
      },
    },
  },
  handler: deleteItem,
};

// Options for updating an Item
const updateItemOpts = {
  schema: {
    response: {
      200: {
        type: "object",
        properties: {
          message: {
            type: "string",
          },
        },
      },
    },
  },
  handler: updatedItem,
};

function itemRoutes(fastify, options, done) {
  //To just check if server is alive!!
  fastify.get("/", (req, reply) => {
    reply.send(`Here for you mate!`);
  });

  // Get single item
  fastify.get("/items/:id", getItemOpts);

  // Get all items
  fastify.get("/items", getItemsOpts);

  // Post an Item
  fastify.post("/addItem", addItemOpts);

  // Delete an Item
  fastify.delete("/deleteItem/:id", deleteItemOpts);

  // Update an Item
  fastify.put("/updateItem/:id", updateItemOpts);

  done();
}

module.exports = itemRoutes;
