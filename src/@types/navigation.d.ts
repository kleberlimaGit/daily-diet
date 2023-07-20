export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined;
      food: {
        idDiet?: string;
      }
      estatistic: undefined;
      information: {
        id: string;
      };
      finish: {
        isGood: boolean;
      };
    }
  }
}
