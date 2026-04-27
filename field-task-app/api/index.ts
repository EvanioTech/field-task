import { Platform } from 'react-native';

const API_BASE_URL =
  process.env.EXPO_PUBLIC_API_URL ??
  (Platform.OS === 'android' ? 'http://10.0.2.2:6000/tasks' : 'http://localhost:6000/tasks');

export async function getApiData<T = unknown>(): Promise<T> {
  const response = await fetch(API_BASE_URL, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error(`API request failed with status ${response.status}`);
  }

  const data = (await response.json()) as T;
  console.log('API response:', data);
  return data;
}

export default getApiData;