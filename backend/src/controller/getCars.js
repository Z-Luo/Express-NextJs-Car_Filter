import { car as CarModel, car } from "../model/index.js";

const getCars = async (req, res) => {
  try {
    const car = await CarModel.find();
    return res.json(car);
  } catch (err) {
    console.error(err);
  }
};

export { getCars };
