import axios from 'axios';
import currentEnvironment  from './constants/environment';
import { User } from 'dtos';

export const getUsers = async (page: number) => {
  try {
    const response = await axios.get<{ results: User[] }>(`${currentEnvironment.api.baseUrl}?results=5&gender=female&page=${String(page)}`);
    return response.data.results;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Axios error:', error.response?.data.message || error.message);
    } else {
      console.error('Unexpected error:', error);
    }
  }
};
