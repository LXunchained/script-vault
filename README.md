# ScriptVault - Digital Tool Shop

A sleek, modern React application for selling professional automation scripts and tools.

## Features

- **Product Showcase**: Detailed pages for each script with features, specs, and FAQs.
- **Responsive Design**: Built with Tailwind CSS for mobile and desktop.
- **Purchase Workflow**: Includes a mocked checkout modal ready for Stripe/Payment integration.
- **Google Drive Awareness**: Specific notes for running in synchronized environments.

## Getting Started

### Installation

1. Clone or download the repository.
2. Install dependencies:

   ```bash
   npm install
   ```

### Running Locally

Start the development server:

```bash
npm run dev
```

Visit `http://localhost:5173` to view the shop.

## Troubleshooting

### Google Drive Sync Issues

If you are running this project inside a Google Drive folder (e.g., `G:/My Drive/...`), you may encounter `TAR_ENTRY_ERROR` or file locking issues during `npm install`. This is because Google Drive locks files while syncing.

**Solution**:

1. Pause Google Drive syncing temporarily.
2. Run `npm install`.
3. Resume syncing.
4. Alternatively, move the project to a local folder (e.g., `C:\Projects\ScriptVault`) for development.

## Project Structure

- `src/pages/Home.jsx`: Main landing page.
- `src/pages/ProductDetails.jsx`: Individual product sales page.
- `src/components/ProductCard.jsx`: Reusable product component.
- `src/data/products.js`: Centralized product data (prices, descriptions, specs).
