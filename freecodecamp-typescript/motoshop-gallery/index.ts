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

// 5. Main Gallery App Class
class MotorcycleGalleryApp {
  private allMotorcycles: Motorcycle[] = [];

  constructor() {
    this.init();
  }

  private async init(): Promise<void> {
    const loadingContainer = document.getElementById('loading-container');
    if (loadingContainer) {
      loadingContainer.style.display = 'flex';
    }

    try {
      this.allMotorcycles = await fetchMotorcycles();
      this.renderMotorcycles(this.allMotorcycles);
      this.setupEventListeners();
    } catch (error) {
      console.error('An error occurred during initialization:', error);
    } finally {
      if (loadingContainer) {
        loadingContainer.style.display = 'none';
      }
    }
  }
  // Render function to display motorcycles in the grid container
  public renderMotorcycles(motorcycles: Motorcycle[] = this.allMotorcycles): void {
    // Early return: If the array is not provided, is undefined, or has no elements, stop execution.
    if (!motorcycles || motorcycles.length === 0) {
      return;
    }

    const grid = document.getElementById('motorcycle-grid');
    const resultsNumber = document.getElementById('results-number');
    const noResults = document.getElementById('no-results');

    if (grid) {
      grid.innerHTML = motorcycles.map(moto => renderMotorcycleCard(moto)).join('');
    }

    if (resultsNumber) {
      resultsNumber.textContent = motorcycles.length.toString();
    }

    if (noResults) {
      noResults.style.display = 'none';
    }
  }

  // Setup input listener for filtering the list
  private setupEventListeners(): void {
    const filterInput = document.getElementById('name-filter-input') as HTMLInputElement | null;
    if (filterInput) {
      filterInput.addEventListener('input', (event) => {
        const target = event.target as HTMLInputElement;
        const searchTerm = target.value.toLowerCase().trim();

        const filtered = this.allMotorcycles.filter(moto =>
          moto.name.toLowerCase().includes(searchTerm) ||
          moto.manufacturer.toLowerCase().includes(searchTerm)
        );

        // Update the view with filtered results
        const noResults = document.getElementById('no-results');
        if (filtered.length === 0) {
          const grid = document.getElementById('motorcycle-grid');
          const resultsNumber = document.getElementById('results-number');
          if (grid) grid.innerHTML = '';
          if (resultsNumber) resultsNumber.textContent = '0';
          if (noResults) noResults.style.display = 'block';
        } else {
          this.renderMotorcycles(filtered);
        }
      });
    }
  }
}

(window as any).fetchMotorcycles = fetchMotorcycles;
(window as any).renderMotorcycleCard = renderMotorcycleCard;
(window as any).MotorcycleGalleryApp = MotorcycleGalleryApp;

// Instantiation
const appInstance = new MotorcycleGalleryApp();
(window as any).appInstance = appInstance;