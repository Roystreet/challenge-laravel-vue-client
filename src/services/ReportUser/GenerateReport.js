import axios from "axios";

const generateReport = async (payload) => {
  const url = `http://127.0.0.1:8000/api/generate-report`;

  try {
    const response = await axios.post(url, payload);
    return response.data;
  } catch (err) {
    return err;
  }
};

export default generateReport;
