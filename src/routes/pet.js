const { Router } = require("express");
const Pet = require("../models/pet");

const router = Router();

router.get("/", async (req, res) => {
  Pet.find({}, (err, doc) => {
    if (err) {
      res.status(404).json({
        data: err,
      });
    }
    res.status(200).json({
      data: doc,
    });
  });
});

router.post("/", async (req, res) => {
  const { name, age } = req.body;
  Pet.insert({ data: { name, age } }).then((data) => {
    res
      .status(201)
      .json({
        pet: data,
      })
      .catch((err) => {
        res.status(500).json({
          pet: err.error,
        });
      });
  });
});

router.get("/:id", async (req, res) => {
  const { id } = req.params.id;
  Pet.findOne(id).then((id) => {
    res.status(200).json({
      id: id,
    });
  });
});

router.put("/:id", async (req, res) => {
  const { id } = req.params.id;
  Pet.update(id, { $set: req.query })
      .then((item) => {
    res.status(204).json({
      data: item,
      status: "Pet updated successfully",
    });
  });
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params.id;
  Pet.delete(id).then((del) => {
    res
      .status(202)
      .json({
        data: del,
        status: "Pet deleted successfully",
      })
      .catch((err) => {
        res.status(404).json({
          data: err,
          status: "Pet not found",
        });
      });
  });
});

module.exports = router
