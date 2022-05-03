import axios from "axios";

const downloadReport = async (id) => {
  const url = `http://127.0.0.1:8000/api/get-report/${id}`;

  try {
    const response = await axios({
      url: url,
      method: "GET",
      responseType: "blob",
    });
    return response;
  } catch (err) {
    return err;
  }
};

export default downloadReport;
