import AsyncStorage from "@react-native-async-storage/async-storage";

import { DIET_COLLECTION } from "@storage/storageConfig";
import { convertStringToDate } from "@utils/utils";

export async function getAllDiet() {
  try {
    const storage = await AsyncStorage.getItem(DIET_COLLECTION);
    const diet: DietDTO[] = storage ? JSON.parse(storage) : [];
    if (diet.length > 0) {
      return diet.sort(
        (a: DietDTO, b: DietDTO) =>
          convertStringToDate(b.date).getTime() -
          convertStringToDate(a.date).getTime()
      );
    }
    return [];
  } catch (error) {
    throw error;
  }
}

export async function getById(id: string) {
  const storage = await getAllDiet();
  const diet = storage.find((x) => x.id === id);
  return diet;
}

export async function addDiet(diet: DietDTO) {
  try {
    let storageDiet = await getAllDiet();
    let storage: string = "";
    if (diet.id) {
      storageDiet = storageDiet.map((x) => {
        if (x.id === diet.id) {
          x = diet;
          return x;
        } else return x;
      });

      storage = JSON.stringify([...storageDiet]);
    } else {
      diet.id = new Date().getTime().toString();
      storage = JSON.stringify([...storageDiet, diet]);
    }
    await AsyncStorage.setItem(DIET_COLLECTION, storage);
  } catch (error) {
    throw error;
  }
}

export async function removeDiet(id: string) {
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
    if (dietGood >= dietNotGood && dietGood !== 0) {
      const percent = (dietGood / storage.length) * 100;
      const percentDiet: DietPercent = {
        title: `${Math.ceil(percent)}%`,
        subtitle: "das refeições dentro da dieta",
        isPercentGood: true,
      };
      return percentDiet;
    } else if (dietGood < dietNotGood && dietNotGood !== 0) {
      const percent = (dietNotGood / storage.length) * 100;
      const percentDiet: DietPercent = {
        title: `${Math.ceil(percent)}%`,
        subtitle: "das refeições fora da dieta",
        isPercentGood: false,
      };
      return percentDiet;
    } else {
      const percentDiet: DietPercent = {
        title: `0%`,
        subtitle: "Nenhuma dieta cadastrada no momento.",
      };
      return percentDiet;
    }
  } catch (error) {
    throw error;
  }
}

export async function getDatesDiet() {
  const storage = await getAllDiet();
  const dates: string[] = [];
  storage.forEach((d) => {
    if (!dates.includes(d.date)) {
      dates.push(d.date);
    }
  });
  return dates;
}

export async function getEstatiscticDiet() {
  const storage = await getAllDiet();
  let betterSequence = 0;
  let count = 0;
  let estatistic: Estatistic = {
    betterSequenceDietGood: 0,
    totalMeal: 0,
    totalMealBad: 0,
    totalMealGood: 0,
  };
  estatistic.totalMealBad = storage.filter((x) => !x.isDietGood).length;
  estatistic.totalMealGood = storage.filter((x) => x.isDietGood).length;
  estatistic.totalMeal = storage.length;
  storage.forEach((x) => {
    if (x.isDietGood) {
      count++;
    } else {
      if (betterSequence <= count) {
        betterSequence = count;
      }
      count = 0;
    }
  });
  estatistic.betterSequenceDietGood = betterSequence;
  return estatistic;
}
