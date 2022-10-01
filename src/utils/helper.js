import { IE_CATEGORY, IE_TYPES } from './constants';
import { IMAGES } from './images';

export const calculateTotalAmount = (list) => {
  let amount = 0;
  for (let i = 0; i < list.length; i++) {
    if (list[i].type === IE_TYPES.INCOME) {
      amount = amount + Number(list[i].amount);
    } else {
      amount = amount - Number(list[i].amount);
    }
  }
  return amount;
};

export const getIeIconFromCategory = (type) => {
  switch (type) {
    case IE_CATEGORY.ENTERTAINMENT:
      return IMAGES.entertainment;

    case IE_CATEGORY.FOOD:
      return IMAGES.food;

    case IE_CATEGORY.RENT:
      return IMAGES.rent;

    case IE_CATEGORY.SHOPPING:
      return IMAGES.shopping;

    default:
      return IMAGES.entertainment;
  }
};
