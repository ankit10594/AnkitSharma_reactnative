import Config from 'react-native-config';
import axios from 'axios';
import {ProoductAddInterface} from '../interfaces/index';

export const getCategory = () => {
  console.log(`${Config.API_URL}categories`);
  console.log(`${Config.TOKEN}`);
  const config = {
    headers: {
      Authorization: 'Bearer ' + Config.TOKEN,
    },
  };
  return axios.get(`${Config.API_URL}categories`, config);
};

export const getcategoryById = (id: string) => {
  const config = {
    headers: {
      Authorization: 'Bearer ' + Config.TOKEN,
    },
  };
  return axios.get(`${Config.API_URL}categories/${id}`, config);
};

export const getProduct = () => {
  const config = {
    headers: {
      Authorization: 'Bearer ' + Config.TOKEN,
    },
  };
  return axios.get(`${Config.API_URL}products`, config);
};

export const getProductDetails = (id: string) => {
  const config = {
    headers: {
      Authorization: 'Bearer ' + Config.TOKEN,
    },
  };
  return axios.get(`${Config.API_URL}products/${id}`, config);
};

export const addProduct = ({
  name,
  price,
  category,
  description,
  avatar,
  developerEmail,
}: ProoductAddInterface) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + Config.TOKEN,
    },
  };

  return axios.post(
    `${Config.API_URL}products`,
    JSON.stringify({
      name,
      price,
      category,
      description,
      avatar,
      developerEmail,
    }),
    config,
  );
};
