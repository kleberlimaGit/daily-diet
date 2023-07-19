import AsyncStorage from "@react-native-async-storage/async-storage";

import { DIET_COLLECTION } from "@storage/storageConfig";
import { convertStringToDate } from "@utils/utils";

export async function getAllDiet() {
  try {
    const storage = await AsyncStorage.getItem(DIET_COLLECTION);
    const diet: DietDTO[] = storage ? JSON.parse(storage) : [];
    return diet.sort(
      (a: DietDTO, b: DietDTO) =>
      convertStringToDate(a.date).getTime() - convertStringToDate(b.date).getTime()
    );
  } catch (error) {
    throw error;
  }
}

export async function addDiet(diet: DietDTO) {
  try {
    const storageDiet = await getAllDiet();
    const storage = JSON.stringify([...storageDiet, diet]);
    await AsyncStorage.setItem(DIET_COLLECTION, storage);
  } catch (error) {
    throw error;
  }
}

export async function RemoveDiet(id: string) {
  try {
    const storage = await getAllDiet();
    const newStorage = storage.filter((item) => item.id !== id);
    await AsyncStorage.setItem(DIET_COLLECTION, JSON.stringify(newStorage));
  } catch (error) {
    throw error;
  }
}

export async function getPercentDiet() {
  try {

    const storage = await getAllDiet();
    const dietGood = storage.filter((item) => item.isDietGood).length;
    const dietNotGood = storage.filter((item) => !item.isDietGood).length;
    if(dietGood >= dietNotGood && dietGood !== 0) {
        const percent = (dietGood/storage.length)*100
        const percentDiet:DietPercent = {
            title: `${Math.ceil(percent)}%`,
            subtitle: "das refeições dentro da dieta",
            isPercentGood: true,
        }
        return percentDiet
    }else  if(dietGood < dietNotGood && dietNotGood !== 0) {
        const percent = (dietNotGood/storage.length)*100
        const percentDiet:DietPercent = {
            title: `${Math.ceil(percent)}%`,
            subtitle: "das refeições fora da dieta",
            isPercentGood: false,
        }
        return percentDiet
  }
  
  else {
    const percentDiet:DietPercent = {
        title: `0%`,
        subtitle: "Nenhuma dieta cadastrada no momento.",
    }
    return percentDiet
  }
} catch (error) {
    throw error;
  }
}

export async function getDatesDiet(){
  const storage = await getAllDiet();
  const dates: string[] = [];
  storage.forEach(d => {
    if(!dates.includes(d.date)){
      dates.push(d.date);
    }
  })
  return dates;
}
