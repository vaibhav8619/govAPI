// External Dependancies
const boom = require("boom");
const mongoose = require("mongoose");

// Get Data Models
const LocRecord = require("../models/LocRecord");
function parseFilters(filterString) {
  if (!filterString) return [];
  return filterString.trim().split(" ");
}

exports.getPin = async (req, reply) => {
  if (!req.query.s && !req.query.t && !req.query.d)
    reply.code(400).send({
      error: "Query param missing, expecting either s/t/d."
    });

  const sFilters = parseFilters(req.query.s),
    dFilters = parseFilters(req.query.d),
    tFilters = parseFilters(req.query.t);

  console.log(sFilters);
  try {
    const pincodes = await LocRecord.find(
      {
        $or: [
          {
            statename: { $in: sFilters }
          },
          {
            Districtname: { $in: dFilters }
          },
          {
            Taluk: { $in: tFilters }
          }
        ]
      },
      { _id: 0, pincode: 1 }
    ).lean();

    return pincodes.map(pin => pin.pincode);
  } catch (err) {
    throw boom.boomify(err);
  }
};
