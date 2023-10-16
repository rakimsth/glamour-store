require("dotenv").config();
const mongoose = require("mongoose");
const Controller = require("../modules/users/user.controller");
const productController = require("../modules/products/product.controller");
const catControllor = require("../modules/categories/category.controller");

mongoose.connect(process.env.DB_URL);

const setup = {
  initialize: async () => {
    await mongoose.connection.dropDatabase();
    console.log("DB reset");
    console.log("Creating Admin...");
    const payload = {
      name: "Raktim Admin",
      email: "rakimsth@gmail.com",
      password: "12345",
      isEmailVerified: true,
      roles: ["admin"],
      isArchived: false,
    };
    await Controller.create(payload);
    console.log("Creating User...");
    const userPayload = {
      name: "Raktim User",
      email: "raktim@rumsan.com",
      password: "12345",
      isEmailVerified: true,
      isArchived: false,
    };
    await Controller.create(userPayload);
    console.log("User Completed...");

    console.log("adding multiple Categories...");
    const category1 = await catControllor.create({ name: "Tshirt" });
    const category2 = await catControllor.create({ name: "Jeans" });
    console.log("Finishing multiple Categories...");

    console.log("adding Products...");
    await productController.create({
      name: "Armani tshirt",
      alias: "asu, hero",
      description: "Best tees in the town",
      type: "tshirt",
      price: 2000,
      isRelease: true,
      quantity: 4,
      images: [
        "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
        "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
        "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
      ],
      category: category1._id,
    });
    await productController.create({
      name: "zara Jeans",
      description: "Best pants in the town",
      type: "jeans",
      price: 3000,
      isRelease: true,
      quantity: 5,
      images: [
        "https://thumbs.dreamstime.com/b/womens-blue-denim-jeans-4462309.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStvIbWpN9VnfX-HxPAYfnxDgHH-ulWlFMrYA&usqp=CAU",
      ],
      category: category2._id,
    });
    await productController.create({
      name: "Baka tshirt",
      alias: "asu, hero",
      description: "Best tees in the town",
      type: "tshirt",
      price: 2000,
      isRelease: true,
      quantity: 4,
      images: [
        "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
        "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
        "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
      ],
      category: category1._id,
    });
    await productController.create({
      name: "Baka Jeans",
      description: "Best pants in the town",
      type: "jeans",
      price: 3000,
      isRelease: true,
      quantity: 5,
      images: [
        "https://thumbs.dreamstime.com/b/womens-blue-denim-jeans-4462309.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStvIbWpN9VnfX-HxPAYfnxDgHH-ulWlFMrYA&usqp=CAU",
      ],
      category: category2._id,
    });
    await productController.create({
      name: "Cat tshirt",
      alias: "asu, hero",
      description: "Best tees in the town",
      type: "tshirt",
      price: 2000,
      isRelease: true,
      quantity: 4,
      images: [
        "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
        "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
        "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
      ],
      category: category1._id,
    });
    await productController.create({
      name: "Cat Jeans",
      description: "Best pants in the town",
      type: "jeans",
      price: 3000,
      isRelease: true,
      quantity: 5,
      images: [
        "https://thumbs.dreamstime.com/b/womens-blue-denim-jeans-4462309.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStvIbWpN9VnfX-HxPAYfnxDgHH-ulWlFMrYA&usqp=CAU",
      ],
      category: category2._id,
    });
    await productController.create({
      name: "Dog tshirt",
      alias: "asu, hero",
      description: "Best tees in the town",
      type: "tshirt",
      price: 2000,
      isRelease: true,
      quantity: 4,
      images: [
        "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
        "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
        "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
      ],
      category: category1._id,
    });
    await productController.create({
      name: "Dog Jeans",
      description: "Best pants in the town",
      type: "jeans",
      price: 3000,
      isRelease: true,
      quantity: 5,
      images: [
        "https://thumbs.dreamstime.com/b/womens-blue-denim-jeans-4462309.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStvIbWpN9VnfX-HxPAYfnxDgHH-ulWlFMrYA&usqp=CAU",
      ],
      category: category2._id,
    });
    await productController.create({
      name: "Elephant tshirt",
      alias: "asu, hero",
      description: "Best tees in the town",
      type: "tshirt",
      price: 2000,
      isRelease: true,
      quantity: 4,
      images: [
        "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
        "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
        "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
      ],
      category: category1._id,
    });
    await productController.create({
      name: "Elephant Jeans",
      description: "Best pants in the town",
      type: "jeans",
      price: 3000,
      isRelease: true,
      quantity: 5,
      images: [
        "https://thumbs.dreamstime.com/b/womens-blue-denim-jeans-4462309.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStvIbWpN9VnfX-HxPAYfnxDgHH-ulWlFMrYA&usqp=CAU",
      ],
      category: category2._id,
    });
    console.log("Finishing Products...");
    // <>adding fake product for testing</>
    console.log("adding Products...");
    await productController.create({
      name: "Armani tshirt",
      alias: "asu, hero",
      description: "Best tees in the town",
      type: "tshirt",
      price: 2000,
      isRelease: true,
      quantity: 4,
      images: [
        "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
        "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
        "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
      ],
      category: category1._id,
    });
    await productController.create({
      name: "zara Jeans",
      description: "Best pants in the town",
      type: "jeans",
      price: 3000,
      isRelease: true,
      quantity: 5,
      images: [
        "https://thumbs.dreamstime.com/b/womens-blue-denim-jeans-4462309.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStvIbWpN9VnfX-HxPAYfnxDgHH-ulWlFMrYA&usqp=CAU",
      ],
      category: category2._id,
    });
    await productController.create({
      name: "Baka tshirt",
      alias: "asu, hero",
      description: "Best tees in the town",
      type: "tshirt",
      price: 2000,
      isRelease: true,
      quantity: 4,
      images: [
        "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
        "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
        "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
      ],
      category: category1._id,
    });
    await productController.create({
      name: "Baka Jeans",
      description: "Best pants in the town",
      type: "jeans",
      price: 3000,
      isRelease: true,
      quantity: 5,
      images: [
        "https://thumbs.dreamstime.com/b/womens-blue-denim-jeans-4462309.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStvIbWpN9VnfX-HxPAYfnxDgHH-ulWlFMrYA&usqp=CAU",
      ],
      category: category2._id,
    });
    await productController.create({
      name: "Cat tshirt",
      alias: "asu, hero",
      description: "Best tees in the town",
      type: "tshirt",
      price: 2000,
      isRelease: true,
      quantity: 4,
      images: [
        "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
        "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
        "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
      ],
      category: category1._id,
    });
    await productController.create({
      name: "Cat Jeans",
      description: "Best pants in the town",
      type: "jeans",
      price: 3000,
      isRelease: true,
      quantity: 5,
      images: [
        "https://thumbs.dreamstime.com/b/womens-blue-denim-jeans-4462309.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStvIbWpN9VnfX-HxPAYfnxDgHH-ulWlFMrYA&usqp=CAU",
      ],
      category: category2._id,
    });
    await productController.create({
      name: "Dog tshirt",
      alias: "asu, hero",
      description: "Best tees in the town",
      type: "tshirt",
      price: 2000,
      isRelease: true,
      quantity: 4,
      images: [
        "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
        "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
        "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
      ],
      category: category1._id,
    });
    await productController.create({
      name: "Dog Jeans",
      description: "Best pants in the town",
      type: "jeans",
      price: 3000,
      isRelease: true,
      quantity: 5,
      images: [
        "https://thumbs.dreamstime.com/b/womens-blue-denim-jeans-4462309.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStvIbWpN9VnfX-HxPAYfnxDgHH-ulWlFMrYA&usqp=CAU",
      ],
      category: category2._id,
    });
    await productController.create({
      name: "Elephant tshirt",
      alias: "asu, hero",
      description: "Best tees in the town",
      type: "tshirt",
      price: 2000,
      isRelease: true,
      quantity: 4,
      images: [
        "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
        "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
        "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
      ],
      category: category1._id,
    });
    await productController.create({
      name: "Elephant Jeans",
      description: "Best pants in the town",
      type: "jeans",
      price: 3000,
      isRelease: true,
      quantity: 5,
      images: [
        "https://thumbs.dreamstime.com/b/womens-blue-denim-jeans-4462309.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStvIbWpN9VnfX-HxPAYfnxDgHH-ulWlFMrYA&usqp=CAU",
      ],
      category: category2._id,
    });
    console.log("Finishing Products...");
    console.log("adding Products...");
    await productController.create({
      name: "Armani tshirt",
      alias: "asu, hero",
      description: "Best tees in the town",
      type: "tshirt",
      price: 2000,
      isRelease: true,
      quantity: 4,
      images: [
        "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
        "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
        "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
      ],
      category: category1._id,
    });
    await productController.create({
      name: "zara Jeans",
      description: "Best pants in the town",
      type: "jeans",
      price: 3000,
      isRelease: true,
      quantity: 5,
      images: [
        "https://thumbs.dreamstime.com/b/womens-blue-denim-jeans-4462309.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStvIbWpN9VnfX-HxPAYfnxDgHH-ulWlFMrYA&usqp=CAU",
      ],
      category: category2._id,
    });
    await productController.create({
      name: "Baka tshirt",
      alias: "asu, hero",
      description: "Best tees in the town",
      type: "tshirt",
      price: 2000,
      isRelease: true,
      quantity: 4,
      images: [
        "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
        "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
        "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
      ],
      category: category1._id,
    });
    await productController.create({
      name: "Baka Jeans",
      description: "Best pants in the town",
      type: "jeans",
      price: 3000,
      isRelease: true,
      quantity: 5,
      images: [
        "https://thumbs.dreamstime.com/b/womens-blue-denim-jeans-4462309.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStvIbWpN9VnfX-HxPAYfnxDgHH-ulWlFMrYA&usqp=CAU",
      ],
      category: category2._id,
    });
    await productController.create({
      name: "Cat tshirt",
      alias: "asu, hero",
      description: "Best tees in the town",
      type: "tshirt",
      price: 2000,
      isRelease: true,
      quantity: 4,
      images: [
        "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
        "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
        "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
      ],
      category: category1._id,
    });
    await productController.create({
      name: "Cat Jeans",
      description: "Best pants in the town",
      type: "jeans",
      price: 3000,
      isRelease: true,
      quantity: 5,
      images: [
        "https://thumbs.dreamstime.com/b/womens-blue-denim-jeans-4462309.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStvIbWpN9VnfX-HxPAYfnxDgHH-ulWlFMrYA&usqp=CAU",
      ],
      category: category2._id,
    });
    await productController.create({
      name: "Dog tshirt",
      alias: "asu, hero",
      description: "Best tees in the town",
      type: "tshirt",
      price: 2000,
      isRelease: true,
      quantity: 4,
      images: [
        "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
        "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
        "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
      ],
      category: category1._id,
    });
    await productController.create({
      name: "Dog Jeans",
      description: "Best pants in the town",
      type: "jeans",
      price: 3000,
      isRelease: true,
      quantity: 5,
      images: [
        "https://thumbs.dreamstime.com/b/womens-blue-denim-jeans-4462309.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStvIbWpN9VnfX-HxPAYfnxDgHH-ulWlFMrYA&usqp=CAU",
      ],
      category: category2._id,
    });
    await productController.create({
      name: "Elephant tshirt",
      alias: "asu, hero",
      description: "Best tees in the town",
      type: "tshirt",
      price: 2000,
      isRelease: true,
      quantity: 4,
      images: [
        "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
        "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
        "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
      ],
      category: category1._id,
    });
    await productController.create({
      name: "Elephant Jeans",
      description: "Best pants in the town",
      type: "jeans",
      price: 3000,
      isRelease: true,
      quantity: 5,
      images: [
        "https://thumbs.dreamstime.com/b/womens-blue-denim-jeans-4462309.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStvIbWpN9VnfX-HxPAYfnxDgHH-ulWlFMrYA&usqp=CAU",
      ],
      category: category2._id,
    });
    console.log("Finishing Products...");
    console.log("adding Products...");
    await productController.create({
      name: "Armani tshirt",
      alias: "asu, hero",
      description: "Best tees in the town",
      type: "tshirt",
      price: 2000,
      isRelease: true,
      quantity: 4,
      images: [
        "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
        "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
        "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
      ],
      category: category1._id,
    });
    await productController.create({
      name: "zara Jeans",
      description: "Best pants in the town",
      type: "jeans",
      price: 3000,
      isRelease: true,
      quantity: 5,
      images: [
        "https://thumbs.dreamstime.com/b/womens-blue-denim-jeans-4462309.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStvIbWpN9VnfX-HxPAYfnxDgHH-ulWlFMrYA&usqp=CAU",
      ],
      category: category2._id,
    });
    await productController.create({
      name: "Baka tshirt",
      alias: "asu, hero",
      description: "Best tees in the town",
      type: "tshirt",
      price: 2000,
      isRelease: true,
      quantity: 4,
      images: [
        "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
        "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
        "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
      ],
      category: category1._id,
    });
    await productController.create({
      name: "Baka Jeans",
      description: "Best pants in the town",
      type: "jeans",
      price: 3000,
      isRelease: true,
      quantity: 5,
      images: [
        "https://thumbs.dreamstime.com/b/womens-blue-denim-jeans-4462309.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStvIbWpN9VnfX-HxPAYfnxDgHH-ulWlFMrYA&usqp=CAU",
      ],
      category: category2._id,
    });
    await productController.create({
      name: "Cat tshirt",
      alias: "asu, hero",
      description: "Best tees in the town",
      type: "tshirt",
      price: 2000,
      isRelease: true,
      quantity: 4,
      images: [
        "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
        "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
        "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
      ],
      category: category1._id,
    });
    await productController.create({
      name: "Cat Jeans",
      description: "Best pants in the town",
      type: "jeans",
      price: 3000,
      isRelease: true,
      quantity: 5,
      images: [
        "https://thumbs.dreamstime.com/b/womens-blue-denim-jeans-4462309.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStvIbWpN9VnfX-HxPAYfnxDgHH-ulWlFMrYA&usqp=CAU",
      ],
      category: category2._id,
    });
    await productController.create({
      name: "Dog tshirt",
      alias: "asu, hero",
      description: "Best tees in the town",
      type: "tshirt",
      price: 2000,
      isRelease: true,
      quantity: 4,
      images: [
        "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
        "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
        "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
      ],
      category: category1._id,
    });
    await productController.create({
      name: "Dog Jeans",
      description: "Best pants in the town",
      type: "jeans",
      price: 3000,
      isRelease: true,
      quantity: 5,
      images: [
        "https://thumbs.dreamstime.com/b/womens-blue-denim-jeans-4462309.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStvIbWpN9VnfX-HxPAYfnxDgHH-ulWlFMrYA&usqp=CAU",
      ],
      category: category2._id,
    });
    await productController.create({
      name: "Elephant tshirt",
      alias: "asu, hero",
      description: "Best tees in the town",
      type: "tshirt",
      price: 2000,
      isRelease: true,
      quantity: 4,
      images: [
        "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
        "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
        "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
      ],
      category: category1._id,
    });
    await productController.create({
      name: "Elephant Jeans",
      description: "Best pants in the town",
      type: "jeans",
      price: 3000,
      isRelease: true,
      quantity: 5,
      images: [
        "https://thumbs.dreamstime.com/b/womens-blue-denim-jeans-4462309.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStvIbWpN9VnfX-HxPAYfnxDgHH-ulWlFMrYA&usqp=CAU",
      ],
      category: category2._id,
    });
    console.log("Finishing Products...");
    console.log("adding Products...");
    await productController.create({
      name: "Armani tshirt",
      alias: "asu, hero",
      description: "Best tees in the town",
      type: "tshirt",
      price: 2000,
      isRelease: true,
      quantity: 4,
      images: [
        "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
        "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
        "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
      ],
      category: category1._id,
    });
    await productController.create({
      name: "zara Jeans",
      description: "Best pants in the town",
      type: "jeans",
      price: 3000,
      isRelease: true,
      quantity: 5,
      images: [
        "https://thumbs.dreamstime.com/b/womens-blue-denim-jeans-4462309.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStvIbWpN9VnfX-HxPAYfnxDgHH-ulWlFMrYA&usqp=CAU",
      ],
      category: category2._id,
    });
    await productController.create({
      name: "Baka tshirt",
      alias: "asu, hero",
      description: "Best tees in the town",
      type: "tshirt",
      price: 2000,
      isRelease: true,
      quantity: 4,
      images: [
        "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
        "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
        "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
      ],
      category: category1._id,
    });
    await productController.create({
      name: "Baka Jeans",
      description: "Best pants in the town",
      type: "jeans",
      price: 3000,
      isRelease: true,
      quantity: 5,
      images: [
        "https://thumbs.dreamstime.com/b/womens-blue-denim-jeans-4462309.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStvIbWpN9VnfX-HxPAYfnxDgHH-ulWlFMrYA&usqp=CAU",
      ],
      category: category2._id,
    });
    await productController.create({
      name: "Cat tshirt",
      alias: "asu, hero",
      description: "Best tees in the town",
      type: "tshirt",
      price: 2000,
      isRelease: true,
      quantity: 4,
      images: [
        "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
        "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
        "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
      ],
      category: category1._id,
    });
    await productController.create({
      name: "Cat Jeans",
      description: "Best pants in the town",
      type: "jeans",
      price: 3000,
      isRelease: true,
      quantity: 5,
      images: [
        "https://thumbs.dreamstime.com/b/womens-blue-denim-jeans-4462309.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStvIbWpN9VnfX-HxPAYfnxDgHH-ulWlFMrYA&usqp=CAU",
      ],
      category: category2._id,
    });
    await productController.create({
      name: "Dog tshirt",
      alias: "asu, hero",
      description: "Best tees in the town",
      type: "tshirt",
      price: 2000,
      isRelease: true,
      quantity: 4,
      images: [
        "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
        "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
        "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
      ],
      category: category1._id,
    });
    await productController.create({
      name: "Dog Jeans",
      description: "Best pants in the town",
      type: "jeans",
      price: 3000,
      isRelease: true,
      quantity: 5,
      images: [
        "https://thumbs.dreamstime.com/b/womens-blue-denim-jeans-4462309.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStvIbWpN9VnfX-HxPAYfnxDgHH-ulWlFMrYA&usqp=CAU",
      ],
      category: category2._id,
    });
    await productController.create({
      name: "Elephant tshirt",
      alias: "asu, hero",
      description: "Best tees in the town",
      type: "tshirt",
      price: 2000,
      isRelease: true,
      quantity: 4,
      images: [
        "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
        "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
        "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
      ],
      category: category1._id,
    });
    await productController.create({
      name: "Elephant Jeans",
      description: "Best pants in the town",
      type: "jeans",
      price: 3000,
      isRelease: true,
      quantity: 5,
      images: [
        "https://thumbs.dreamstime.com/b/womens-blue-denim-jeans-4462309.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStvIbWpN9VnfX-HxPAYfnxDgHH-ulWlFMrYA&usqp=CAU",
      ],
      category: category2._id,
    });
    console.log("Finishing Products...");
    console.log("adding Products...");
    await productController.create({
      name: "Armani tshirt",
      alias: "asu, hero",
      description: "Best tees in the town",
      type: "tshirt",
      price: 2000,
      isRelease: true,
      quantity: 4,
      images: [
        "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
        "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
        "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
      ],
      category: category1._id,
    });
    await productController.create({
      name: "zara Jeans",
      description: "Best pants in the town",
      type: "jeans",
      price: 3000,
      isRelease: true,
      quantity: 5,
      images: [
        "https://thumbs.dreamstime.com/b/womens-blue-denim-jeans-4462309.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStvIbWpN9VnfX-HxPAYfnxDgHH-ulWlFMrYA&usqp=CAU",
      ],
      category: category2._id,
    });
    await productController.create({
      name: "Baka tshirt",
      alias: "asu, hero",
      description: "Best tees in the town",
      type: "tshirt",
      price: 2000,
      isRelease: true,
      quantity: 4,
      images: [
        "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
        "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
        "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
      ],
      category: category1._id,
    });
    await productController.create({
      name: "Baka Jeans",
      description: "Best pants in the town",
      type: "jeans",
      price: 3000,
      isRelease: true,
      quantity: 5,
      images: [
        "https://thumbs.dreamstime.com/b/womens-blue-denim-jeans-4462309.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStvIbWpN9VnfX-HxPAYfnxDgHH-ulWlFMrYA&usqp=CAU",
      ],
      category: category2._id,
    });
    await productController.create({
      name: "Cat tshirt",
      alias: "asu, hero",
      description: "Best tees in the town",
      type: "tshirt",
      price: 2000,
      isRelease: true,
      quantity: 4,
      images: [
        "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
        "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
        "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
      ],
      category: category1._id,
    });
    await productController.create({
      name: "Cat Jeans",
      description: "Best pants in the town",
      type: "jeans",
      price: 3000,
      isRelease: true,
      quantity: 5,
      images: [
        "https://thumbs.dreamstime.com/b/womens-blue-denim-jeans-4462309.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStvIbWpN9VnfX-HxPAYfnxDgHH-ulWlFMrYA&usqp=CAU",
      ],
      category: category2._id,
    });
    await productController.create({
      name: "Dog tshirt",
      alias: "asu, hero",
      description: "Best tees in the town",
      type: "tshirt",
      price: 2000,
      isRelease: true,
      quantity: 4,
      images: [
        "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
        "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
        "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
      ],
      category: category1._id,
    });
    await productController.create({
      name: "Dog Jeans",
      description: "Best pants in the town",
      type: "jeans",
      price: 3000,
      isRelease: true,
      quantity: 5,
      images: [
        "https://thumbs.dreamstime.com/b/womens-blue-denim-jeans-4462309.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStvIbWpN9VnfX-HxPAYfnxDgHH-ulWlFMrYA&usqp=CAU",
      ],
      category: category2._id,
    });
    await productController.create({
      name: "Elephant tshirt",
      alias: "asu, hero",
      description: "Best tees in the town",
      type: "tshirt",
      price: 2000,
      isRelease: true,
      quantity: 4,
      images: [
        "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
        "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
        "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
      ],
      category: category1._id,
    });
    await productController.create({
      name: "Elephant Jeans",
      description: "Best pants in the town",
      type: "jeans",
      price: 3000,
      isRelease: true,
      quantity: 5,
      images: [
        "https://thumbs.dreamstime.com/b/womens-blue-denim-jeans-4462309.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStvIbWpN9VnfX-HxPAYfnxDgHH-ulWlFMrYA&usqp=CAU",
      ],
      category: category2._id,
    });
    console.log("Finishing Products...");
    console.log("adding Products...");
    await productController.create({
      name: "Armani tshirt",
      alias: "asu, hero",
      description: "Best tees in the town",
      type: "tshirt",
      price: 2000,
      isRelease: true,
      quantity: 4,
      images: [
        "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
        "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
        "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
      ],
      category: category1._id,
    });
    await productController.create({
      name: "zara Jeans",
      description: "Best pants in the town",
      type: "jeans",
      price: 3000,
      isRelease: true,
      quantity: 5,
      images: [
        "https://thumbs.dreamstime.com/b/womens-blue-denim-jeans-4462309.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStvIbWpN9VnfX-HxPAYfnxDgHH-ulWlFMrYA&usqp=CAU",
      ],
      category: category2._id,
    });
    await productController.create({
      name: "Baka tshirt",
      alias: "asu, hero",
      description: "Best tees in the town",
      type: "tshirt",
      price: 2000,
      isRelease: true,
      quantity: 4,
      images: [
        "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
        "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
        "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
      ],
      category: category1._id,
    });
    await productController.create({
      name: "Baka Jeans",
      description: "Best pants in the town",
      type: "jeans",
      price: 3000,
      isRelease: true,
      quantity: 5,
      images: [
        "https://thumbs.dreamstime.com/b/womens-blue-denim-jeans-4462309.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStvIbWpN9VnfX-HxPAYfnxDgHH-ulWlFMrYA&usqp=CAU",
      ],
      category: category2._id,
    });
    await productController.create({
      name: "Cat tshirt",
      alias: "asu, hero",
      description: "Best tees in the town",
      type: "tshirt",
      price: 2000,
      isRelease: true,
      quantity: 4,
      images: [
        "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
        "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
        "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
      ],
      category: category1._id,
    });
    await productController.create({
      name: "Cat Jeans",
      description: "Best pants in the town",
      type: "jeans",
      price: 3000,
      isRelease: true,
      quantity: 5,
      images: [
        "https://thumbs.dreamstime.com/b/womens-blue-denim-jeans-4462309.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStvIbWpN9VnfX-HxPAYfnxDgHH-ulWlFMrYA&usqp=CAU",
      ],
      category: category2._id,
    });
    await productController.create({
      name: "Dog tshirt",
      alias: "asu, hero",
      description: "Best tees in the town",
      type: "tshirt",
      price: 2000,
      isRelease: true,
      quantity: 4,
      images: [
        "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
        "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
        "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
      ],
      category: category1._id,
    });
    await productController.create({
      name: "Dog Jeans",
      description: "Best pants in the town",
      type: "jeans",
      price: 3000,
      isRelease: true,
      quantity: 5,
      images: [
        "https://thumbs.dreamstime.com/b/womens-blue-denim-jeans-4462309.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStvIbWpN9VnfX-HxPAYfnxDgHH-ulWlFMrYA&usqp=CAU",
      ],
      category: category2._id,
    });
    await productController.create({
      name: "Elephant tshirt",
      alias: "asu, hero",
      description: "Best tees in the town",
      type: "tshirt",
      price: 2000,
      isRelease: true,
      quantity: 4,
      images: [
        "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
        "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
        "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
      ],
      category: category1._id,
    });
    await productController.create({
      name: "Elephant Jeans",
      description: "Best pants in the town",
      type: "jeans",
      price: 3000,
      isRelease: true,
      quantity: 5,
      images: [
        "https://thumbs.dreamstime.com/b/womens-blue-denim-jeans-4462309.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStvIbWpN9VnfX-HxPAYfnxDgHH-ulWlFMrYA&usqp=CAU",
      ],
      category: category2._id,
    });
    console.log("Finishing Products...");
    console.log("adding Products...");
    await productController.create({
      name: "Armani tshirt",
      alias: "asu, hero",
      description: "Best tees in the town",
      type: "tshirt",
      price: 2000,
      isRelease: true,
      quantity: 4,
      images: [
        "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
        "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
        "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
      ],
      category: category1._id,
    });
    await productController.create({
      name: "zara Jeans",
      description: "Best pants in the town",
      type: "jeans",
      price: 3000,
      isRelease: true,
      quantity: 5,
      images: [
        "https://thumbs.dreamstime.com/b/womens-blue-denim-jeans-4462309.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStvIbWpN9VnfX-HxPAYfnxDgHH-ulWlFMrYA&usqp=CAU",
      ],
      category: category2._id,
    });
    await productController.create({
      name: "Baka tshirt",
      alias: "asu, hero",
      description: "Best tees in the town",
      type: "tshirt",
      price: 2000,
      isRelease: true,
      quantity: 4,
      images: [
        "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
        "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
        "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
      ],
      category: category1._id,
    });
    await productController.create({
      name: "Baka Jeans",
      description: "Best pants in the town",
      type: "jeans",
      price: 3000,
      isRelease: true,
      quantity: 5,
      images: [
        "https://thumbs.dreamstime.com/b/womens-blue-denim-jeans-4462309.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStvIbWpN9VnfX-HxPAYfnxDgHH-ulWlFMrYA&usqp=CAU",
      ],
      category: category2._id,
    });
    await productController.create({
      name: "Cat tshirt",
      alias: "asu, hero",
      description: "Best tees in the town",
      type: "tshirt",
      price: 2000,
      isRelease: true,
      quantity: 4,
      images: [
        "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
        "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
        "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
      ],
      category: category1._id,
    });
    await productController.create({
      name: "Cat Jeans",
      description: "Best pants in the town",
      type: "jeans",
      price: 3000,
      isRelease: true,
      quantity: 5,
      images: [
        "https://thumbs.dreamstime.com/b/womens-blue-denim-jeans-4462309.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStvIbWpN9VnfX-HxPAYfnxDgHH-ulWlFMrYA&usqp=CAU",
      ],
      category: category2._id,
    });
    await productController.create({
      name: "Dog tshirt",
      alias: "asu, hero",
      description: "Best tees in the town",
      type: "tshirt",
      price: 2000,
      isRelease: true,
      quantity: 4,
      images: [
        "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
        "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
        "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
      ],
      category: category1._id,
    });
    await productController.create({
      name: "Dog Jeans",
      description: "Best pants in the town",
      type: "jeans",
      price: 3000,
      isRelease: true,
      quantity: 5,
      images: [
        "https://thumbs.dreamstime.com/b/womens-blue-denim-jeans-4462309.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStvIbWpN9VnfX-HxPAYfnxDgHH-ulWlFMrYA&usqp=CAU",
      ],
      category: category2._id,
    });
    await productController.create({
      name: "Elephant tshirt",
      alias: "asu, hero",
      description: "Best tees in the town",
      type: "tshirt",
      price: 2000,
      isRelease: true,
      quantity: 4,
      images: [
        "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
        "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
        "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
      ],
      category: category1._id,
    });
    await productController.create({
      name: "Elephant Jeans",
      description: "Best pants in the town",
      type: "jeans",
      price: 3000,
      isRelease: true,
      quantity: 5,
      images: [
        "https://thumbs.dreamstime.com/b/womens-blue-denim-jeans-4462309.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStvIbWpN9VnfX-HxPAYfnxDgHH-ulWlFMrYA&usqp=CAU",
      ],
      category: category2._id,
    });
    console.log("Finishing Products...");
    console.log("adding Products...");
    await productController.create({
      name: "Armani tshirt",
      alias: "asu, hero",
      description: "Best tees in the town",
      type: "tshirt",
      price: 2000,
      isRelease: true,
      quantity: 4,
      images: [
        "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
        "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
        "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
      ],
      category: category1._id,
    });
    await productController.create({
      name: "zara Jeans",
      description: "Best pants in the town",
      type: "jeans",
      price: 3000,
      isRelease: true,
      quantity: 5,
      images: [
        "https://thumbs.dreamstime.com/b/womens-blue-denim-jeans-4462309.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStvIbWpN9VnfX-HxPAYfnxDgHH-ulWlFMrYA&usqp=CAU",
      ],
      category: category2._id,
    });
    await productController.create({
      name: "Baka tshirt",
      alias: "asu, hero",
      description: "Best tees in the town",
      type: "tshirt",
      price: 2000,
      isRelease: true,
      quantity: 4,
      images: [
        "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
        "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
        "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
      ],
      category: category1._id,
    });
    await productController.create({
      name: "Baka Jeans",
      description: "Best pants in the town",
      type: "jeans",
      price: 3000,
      isRelease: true,
      quantity: 5,
      images: [
        "https://thumbs.dreamstime.com/b/womens-blue-denim-jeans-4462309.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStvIbWpN9VnfX-HxPAYfnxDgHH-ulWlFMrYA&usqp=CAU",
      ],
      category: category2._id,
    });
    await productController.create({
      name: "Cat tshirt",
      alias: "asu, hero",
      description: "Best tees in the town",
      type: "tshirt",
      price: 2000,
      isRelease: true,
      quantity: 4,
      images: [
        "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
        "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
        "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
      ],
      category: category1._id,
    });
    await productController.create({
      name: "Cat Jeans",
      description: "Best pants in the town",
      type: "jeans",
      price: 3000,
      isRelease: true,
      quantity: 5,
      images: [
        "https://thumbs.dreamstime.com/b/womens-blue-denim-jeans-4462309.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStvIbWpN9VnfX-HxPAYfnxDgHH-ulWlFMrYA&usqp=CAU",
      ],
      category: category2._id,
    });
    await productController.create({
      name: "Dog tshirt",
      alias: "asu, hero",
      description: "Best tees in the town",
      type: "tshirt",
      price: 2000,
      isRelease: true,
      quantity: 4,
      images: [
        "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
        "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
        "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
      ],
      category: category1._id,
    });
    await productController.create({
      name: "Dog Jeans",
      description: "Best pants in the town",
      type: "jeans",
      price: 3000,
      isRelease: true,
      quantity: 5,
      images: [
        "https://thumbs.dreamstime.com/b/womens-blue-denim-jeans-4462309.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStvIbWpN9VnfX-HxPAYfnxDgHH-ulWlFMrYA&usqp=CAU",
      ],
      category: category2._id,
    });
    await productController.create({
      name: "Elephant tshirt",
      alias: "asu, hero",
      description: "Best tees in the town",
      type: "tshirt",
      price: 2000,
      isRelease: true,
      quantity: 4,
      images: [
        "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
        "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
        "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
      ],
      category: category1._id,
    });
    await productController.create({
      name: "Elephant Jeans",
      description: "Best pants in the town",
      type: "jeans",
      price: 3000,
      isRelease: true,
      quantity: 5,
      images: [
        "https://thumbs.dreamstime.com/b/womens-blue-denim-jeans-4462309.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStvIbWpN9VnfX-HxPAYfnxDgHH-ulWlFMrYA&usqp=CAU",
      ],
      category: category2._id,
    });
    console.log("Finishing Products...");
    console.log("adding Products...");
    await productController.create({
      name: "Armani tshirt",
      alias: "asu, hero",
      description: "Best tees in the town",
      type: "tshirt",
      price: 2000,
      isRelease: true,
      quantity: 4,
      images: [
        "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
        "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
        "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
      ],
      category: category1._id,
    });
    await productController.create({
      name: "zara Jeans",
      description: "Best pants in the town",
      type: "jeans",
      price: 3000,
      isRelease: true,
      quantity: 5,
      images: [
        "https://thumbs.dreamstime.com/b/womens-blue-denim-jeans-4462309.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStvIbWpN9VnfX-HxPAYfnxDgHH-ulWlFMrYA&usqp=CAU",
      ],
      category: category2._id,
    });
    await productController.create({
      name: "Baka tshirt",
      alias: "asu, hero",
      description: "Best tees in the town",
      type: "tshirt",
      price: 2000,
      isRelease: true,
      quantity: 4,
      images: [
        "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
        "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
        "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
      ],
      category: category1._id,
    });
    await productController.create({
      name: "Baka Jeans",
      description: "Best pants in the town",
      type: "jeans",
      price: 3000,
      isRelease: true,
      quantity: 5,
      images: [
        "https://thumbs.dreamstime.com/b/womens-blue-denim-jeans-4462309.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStvIbWpN9VnfX-HxPAYfnxDgHH-ulWlFMrYA&usqp=CAU",
      ],
      category: category2._id,
    });
    await productController.create({
      name: "Cat tshirt",
      alias: "asu, hero",
      description: "Best tees in the town",
      type: "tshirt",
      price: 2000,
      isRelease: true,
      quantity: 4,
      images: [
        "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
        "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
        "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
      ],
      category: category1._id,
    });
    await productController.create({
      name: "Cat Jeans",
      description: "Best pants in the town",
      type: "jeans",
      price: 3000,
      isRelease: true,
      quantity: 5,
      images: [
        "https://thumbs.dreamstime.com/b/womens-blue-denim-jeans-4462309.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStvIbWpN9VnfX-HxPAYfnxDgHH-ulWlFMrYA&usqp=CAU",
      ],
      category: category2._id,
    });
    await productController.create({
      name: "Dog tshirt",
      alias: "asu, hero",
      description: "Best tees in the town",
      type: "tshirt",
      price: 2000,
      isRelease: true,
      quantity: 4,
      images: [
        "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
        "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
        "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
      ],
      category: category1._id,
    });
    await productController.create({
      name: "Dog Jeans",
      description: "Best pants in the town",
      type: "jeans",
      price: 3000,
      isRelease: true,
      quantity: 5,
      images: [
        "https://thumbs.dreamstime.com/b/womens-blue-denim-jeans-4462309.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStvIbWpN9VnfX-HxPAYfnxDgHH-ulWlFMrYA&usqp=CAU",
      ],
      category: category2._id,
    });
    await productController.create({
      name: "Elephant tshirt",
      alias: "asu, hero",
      description: "Best tees in the town",
      type: "tshirt",
      price: 2000,
      isRelease: true,
      quantity: 4,
      images: [
        "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
        "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
        "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
      ],
      category: category1._id,
    });
    await productController.create({
      name: "Elephant Jeans",
      description: "Best pants in the town",
      type: "jeans",
      price: 3000,
      isRelease: true,
      quantity: 5,
      images: [
        "https://thumbs.dreamstime.com/b/womens-blue-denim-jeans-4462309.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStvIbWpN9VnfX-HxPAYfnxDgHH-ulWlFMrYA&usqp=CAU",
      ],
      category: category2._id,
    });
    console.log("Finishing Products...");
  },
};
setup.initialize();
