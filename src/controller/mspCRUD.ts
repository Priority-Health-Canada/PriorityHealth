import { Request, Response } from "express";
import mongoose from "mongoose";
import Msp from "../models/Msp";

// GET all msp data
export const getMspData = async (req: Request, res: Response) => {
  try {
    const data = await Msp.find().exec();
    // const formattedData = data.map(doc => doc.toObject({ versionKey: false }));
    // res.status(200).json(formattedData);
    res.status(200).json(data);
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
};

export const update = async (req: Request, res: Response) => {
  try {
    const { id, data } = req.body;
    const updatedMsp = await Msp.findByIdAndUpdate(id, data, {
      new: true,
    });
    res.status(200).json(updatedMsp);
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
};
