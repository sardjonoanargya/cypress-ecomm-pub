Markdown

# 🛒 Cypress E-Commerce E2E Testing Suite

Automated End-to-End (E2E) test framework built with **Cypress** targeting checkout flows on [SauceDemo](https://www.saucedemo.com/).

## 🚀 Key Features & Architecture

- **Custom Commands:** Refactored authentication logic into reusable `cy.login()` custom commands.
- **Reliable Selectors:** Prioritized stable `data-test` attributes to prevent test flakiness.
- **Full Order Flow Verification:** Automates user login, inventory navigation, shopping cart interactions, and final purchase confirmation.

## 🛠️ Tech Stack

- **Test Runner:** Cypress (v13+)
- **Language:** JavaScript (ES6+)

## 🧪 Running Tests Locally

### Installation

bash

# Install dependencies

npm install

# Run tests in headless mode

npm test

# Open Cypress interactive test runner

npm run test:open
