import axios from "axios";

const listReport = async () => {
  const url = `http://localhost:8000/api/list-reports`;
  try {
    const response = await axios.get(url);
    return response.data.response;
  } catch (err) {
    return err;
  }
};

export default listReport;
