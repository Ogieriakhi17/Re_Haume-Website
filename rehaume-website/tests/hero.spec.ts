import { test, expect } from '@playwright/test';

test('Hero section loads with logo', async ({ page }) => {
  await page.goto('http://localhost:3000');

  // Check that the hero section exists
  const hero = page.locator('section');
  await expect(hero).toBeVisible();


  // Check that your logo or tagline text appears
  await page.waitForTimeout(2000); // wait for animations to complete   
  const logo = page.getByRole('img', { name: "Rehaume Logo" });
  await expect(logo).toBeVisible();
  
  // Check tagline text
  await expect(page.locator('text=Home. ReImagined.')).toBeVisible();

  
});
