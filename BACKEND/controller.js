import { getPassengers, exportCsv } from "./service.js";

export const HelloWorld = async (req, res) => {
  const passengers = await getPassengers();
  res.status(200).json(passengers);
}

export const csvController = async (req, res) => {
  const csv = await exportCsv();
  res.header("Content-Type", "text/csv");
  res.attachment("passengers.csv");
  res.send(csv);
}