// 1. Define the Category union type
type Category = 'Sport' | 'Cruiser' | 'Touring' | 'Dirt' | 'Adventure' | 'Naked' | 'Electric';

// 2. Define the Motorcycle interface matching all specified properties
interface Motorcycle {
  id: string;
  name: string;
  manufacturer: string;
  category: Category;
  price: number;
  image_url: string;
  created_at: Date | string;
  description: string;
  year: number;
  engine: string;
}

