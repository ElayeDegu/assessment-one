const Book = require("../models/book");

exports.getBook = async (req, res) => {
  res.json(await Book.find({}).sort({ createdAt: -1 }).exec());
};

exports.postBook = async (req, res) => {
  try {
    const { title, description, discountRate, imageUrl, price } = req.body;
    res.json(
      await new Book({
        title: title,
        description: description,
        discountRate: discountRate,
        imageUrl: imageUrl,
        price: price,
      }).save()
    );
  } catch (err) {
    console.error(err);
    res.status(400).send("Create Book Failed");
  }
};
