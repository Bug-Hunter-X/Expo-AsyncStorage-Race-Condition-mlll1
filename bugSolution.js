This solution uses a Promise to ensure AsyncStorage is ready before attempting to access it:

```javascript
import * as AsyncStorage from 'async-storage';

const getData = async () => {
  try {
    await AsyncStorage.getItem('@my_key');
    return AsyncStorage.getItem('@my_key'); 
  } catch (e) {
    console.error('Error fetching data:', e);
    return null; // or handle the error appropriately
  }
};

const setData = async (value) => {
  try {
    await AsyncStorage.setItem('@my_key', value);
  } catch (e) {
    console.error('Error storing data:', e);
  }
};

(async () => {
  await AsyncStorage.setItem('@my_key', 'Initial Value');
  const data = await getData();
  console.log('Retrieved Data:', data);
})();
```