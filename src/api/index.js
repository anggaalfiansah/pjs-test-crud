import axios from "axios";
import { base_url } from "../constant";

export const getTypeLocation = async () => {
  try {
    const config = {
      method: "get",
      url: base_url + "/api/locations/type",
    };
    const tipe = await axios(config);
    return tipe.data;
  } catch (error) {
    return error;
  }
};

export const getProject = async () => {
  try {
    const config = {
      method: "get",
      url: base_url + "/api/locations/project",
    };
    const project = await axios(config);
    return project.data;
  } catch (error) {
    return error;
  }
};

export const getBuilding = async (locCode) => {
  try {
    const config = {
      method: "get",
      url: base_url + "/api/locations/building/" + locCode,
    };
    const building = await axios(config);
    return building.data;
  } catch (error) {
    return error;
  }
};

export const getFloor = async (locCode) => {
  try {
    const config = {
      method: "get",
      url: base_url + "/api/locations/floor/" + locCode,
    };
    const floor = await axios(config);
    return floor.data;
  } catch (error) {
    return error;
  }
};

export const getAllLocation = async () => {
  try {
    const config = {
      method: "get",
      url: base_url + "/api/locations/",
    };
    const location = await axios(config);
    return location.data;
  } catch (error) {
    return error;
  }
};

export const getLocationByLocCode = async (locCode) => {
  try {
    const config = {
      method: "get",
      url: base_url + "/api/locations/" + locCode,
    };
    const project = await axios(config);
    return project.data;
  } catch (error) {
    return error;
  }
};

export const postTambahData = async (data) => {
  try {
    const config = {
      method: "post",
      url: base_url + "/api/locations/",
      data: data,
    };
    const tambah = await axios(config);
    console.log(tambah.data)
    return tambah.data;
  } catch (error) {
    return error;
  }
};
