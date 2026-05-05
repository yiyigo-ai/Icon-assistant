export const categories = [
  {
    id: 'fashion',
    name: 'Fashion',
    nameZh: '时尚',
    description: 'Clothing, accessories, footwear',
    descriptionZh: '服装、配饰、鞋履',
    icon: '👗',
    priority: 1,
    sensitivity: 'high'
  },
  {
    id: 'beauty',
    name: 'Beauty',
    nameZh: '美妆',
    description: 'Cosmetics, skincare, haircare',
    descriptionZh: '化妆品、护肤品、护发产品',
    icon: '💄',
    priority: 2,
    sensitivity: 'critical'
  },
  {
    id: 'electronics',
    name: 'Electronics',
    nameZh: '电子',
    description: 'Phones, gadgets, accessories',
    descriptionZh: '手机、数码产品、配件',
    icon: '📱',
    priority: 3,
    sensitivity: 'medium'
  }
];

export const getCategoryById = (id) => categories.find(c => c.id === id);
