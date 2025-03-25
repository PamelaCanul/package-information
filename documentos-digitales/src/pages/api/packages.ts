import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

const API_URL = "https://67e1c46558cc6bf7852705e2.mockapi.io/package-list";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const response = await axios.get(API_URL);
    res.status(200).json(response.data);
  } catch (error: any) {
    console.log(error);
    res.status(500).json({ message: "Failed to fetch packages" });
  }
}
