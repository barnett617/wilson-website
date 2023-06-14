const apiUrl = "https://api.github.com/events";
import mockData from './mock.json';

const getData = async () => {
  if ((process as any).env.NODE_ENV === 'development') {
    return {
      isMock: true,
      data: [mockData]
    };
  } else {
    const data = await fetchRealData()
    return {
      isMock: false,
      data,
    }
  }
};

const fetchRealData = async () => {
  const originData = await fetch(apiUrl);
  const json = originData.json();
  return json;
};

export default {
  async load() {
    debugger
    const data = await getData();
    return data;
  },
};
