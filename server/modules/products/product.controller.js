const Model = require("./product.model");

const create = (payload) => {
  // validation Check
  // if failed, fs.unlink() to delete the photos
  return Model.create(payload);
};

const list = async (limit, page, search) => {
  const pageNum = parseInt(page) || 1;
  const size = parseInt(limit) || 5;
  const query = [];
  if (search?.name) {
    query.push({
      $match: { name: new RegExp(search?.name, "gi") },
    });
  }
  query.push(
    {
      $match: { isArchived: search?.isArchived || false },
    },
    {
      $sort: {
        created_at: -1,
      },
    },
    {
      $facet: {
        metadata: [
          {
            $count: "total",
          },
        ],
        data: [
          {
            $skip: (pageNum - 1) * size,
          },
          {
            $limit: size,
          },
        ],
      },
    },
    {
      $addFields: {
        total: {
          $arrayElemAt: ["$metadata.total", 0],
        },
      },
    },
    {
      $project: {
        data: 1,
        total: 1,
      },
    }
  );
  const result = await Model.aggregate(query).allowDiskUse(true);
  return {
    result: result[0].data,
    total: result[0].total || 0,
    page: pageNum,
    limit,
  };
};

const getById = (id) => {
  return Model.findOne({ _id: id });
};
const updateById = (id, payload) => {
  return Model.findOneAndUpdate({ _id: id }, payload, { new: true });
};
const deleteById = (id, payload) => {
  return Model.findOneAndUpdate({ _id: id }, payload, { new: true });
};

module.exports = { create, list, getById, updateById, deleteById };
