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

// 3. Fetch motorcycle data from the FCC endpoint
function fetchMotorcycles(): Promise<Motorcycle[]> {
  return fetch('https://cdn.freecodecamp.org/curriculum/labs/data/motorcycles.json')
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      return response.json();
    })
    .then((data: any[]) => {
      return data.map(item => ({
        id: item.id,
        name: item.name,
        manufacturer: item.manufacturer,
        category: item.category as Category,
        price: item.price,
        image_url: item.image_url,
        created_at: new Date(item.created_at),
        description: item.description,
        year: item.year,
        engine: item.engine
      }));
    });
}

// 4. Render a single motorcycle card returning a formatted HTML string
function renderMotorcycleCard(motorcycle: Motorcycle): string {
  return `
    <div class="motorcycle-card">
      <div class="motorcycle-card-image-container">
        <img class="motorcycle-card-image" src="${motorcycle.image_url}" alt="${motorcycle.name}" />
      </div>
      <span class="motorcycle-card-year-badge">${motorcycle.year}</span>
      <div class="motorcycle-card-content">
        <div class="motorcycle-card-header">
          <div>
            <h3 class="motorcycle-card-title">${motorcycle.name}</h3>
            <p class="motorcycle-card-manufacturer">${motorcycle.manufacturer}</p>
          </div>
          <span class="motorcycle-card-category">${motorcycle.category}</span>
        </div>
        <p class="motorcycle-card-description">${motorcycle.description}</p>
        <div class="motorcycle-card-footer">
          <span class="motorcycle-card-price">$${motorcycle.price}</span>
          <span class="motorcycle-card-engine">${motorcycle.engine}</span>
        </div>
      </div>
    </div>
  `;
}