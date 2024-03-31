import { car as CarModel, car } from "../model/index.js";

const getCars = async (req, res) => {
  try {
    let pipeline = [];

    if (req.query.maker) {
      pipeline.push({ $match: { make: req.query.maker } });
    }

    if (req.query.model) {
      pipeline.push({ $match: { model: req.query.model } });
    }

    if (req.query.year) {
      pipeline.push({ $match: { year: req.query.year } });
    }

    let cars =
      pipeline.length > 0
        ? await CarModel.aggregate(pipeline)
        : await CarModel.find();

    switch (req.query.sortByDate) {
      case "asc":
        cars = cars.sort((a, b) => new Date(a.saleDate) - new Date(b.saleDate));
        break;
      case "desc":
        cars = cars.sort((a, b) => new Date(b.saleDate) - new Date(a.saleDate));
        break;
      default:
        // Default sorting order: descending
        cars = cars.sort((a, b) => new Date(b.saleDate) - new Date(a.saleDate));
        break;
    }

    const count = cars.length;
    const totalKm = cars.reduce((acc, car) => acc + +car.odometer, 0);
    const averageKm = Math.floor(totalKm / count);

    const averageAgeYears =
      cars.reduce(
        (acc, car) => acc + (new Date().getFullYear() - car.year),
        0
      ) / cars.length;

    // Calculate the remaining months
    const averageAgeMonths = (
      (averageAgeYears - Math.floor(averageAgeYears)) *
      12
    ).toFixed(0);

    // Format the average age into string format
    const averageAgeString = `${Math.floor(
      averageAgeYears
    )}yrs ${averageAgeMonths}mos`;

    return res.json({ docs: cars, count, averageKm, averageAgeString });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Internal server error" });
  }
};

export { getCars };
