import { test, expect } from '@playwright/test';

 
 test('velg opptak link', async ({ page }) => {
    await page.goto('https://test-personbrukerflate.sikt.no/nb/');
  
    // Click the get started link.
    await page.getByText('Velg Opptak').click();
  
    // Expects page to have a heading with the name of Installation.
    await expect(page.getByRole('heading', { name: 'Velg opptak' })).toBeVisible();
  });