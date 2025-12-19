# Web Form Input Specimen

A modern, responsive web application designed for recording concrete specimen data and synchronizing it directly with Google Sheets. Built with Cloudflare Workers for high performance and reliability.

## 🚀 Key Features

-   **Direct Google Sheets Integration**: Seamlessly syncs form data to Google Sheets via a Google Apps Script backend.
-   **Smart Date Calculations**: Automatically calculates 7-day and 28-day specimen ages based on the input date.
-   **Modern UI/UX**: Feature-rich interface with glassmorphism aesthetics, subtle animations, and responsive design.
-   **Flexible Input**: Supports both predefined dropdowns (Proyek, Teknisi, Mutu) and manual text entry for maximum flexibility.
-   **Automatic Formatting**: Automatically converts project and customer names to uppercase and handles project abbreviations.
-   **Real-time Previews**: Shows a live preview of the generated "Pekerjaan" output string before saving.

## 🛠️ Tech Stack

-   **Frontend**: Vanilla HTML5, CSS3 (Custom Design), and JavaScript.
-   **Hosting**: [Cloudflare Workers](https://workers.cloudflare.com/)
-   **Backend/Database**: [Google Apps Script](https://developers.google.com/apps-script) + Google Sheets.

## 📦 Project Structure

```text
webFormInputSpeciment/
├── form.html      # The main frontend form and logic
├── index.js       # Cloudflare Worker entry point
├── wrangler.toml  # Cloudflare Workers configuration
└── README.md      # Project documentation
```

## ⚙️ Setup and Deployment

### 1. Google Apps Script Configuration
1.  Create a new Google Sheet.
2.  Open **Extensions > Apps Script**.
3.  Implement a `doPost(e)` function to handle the incoming data.
4.  Deploy as a Web App and set access to "Anyone".
5.  Copy the Web App URL and update the `CONFIG.scriptURL` in `form.html`.

### 2. Local Development
To run the project locally for testing:
```bash
npx wrangler dev
```

### 3. Deployment
To deploy to Cloudflare Workers:
```bash
npx wrangler deploy
```

## 📄 License
This project is for internal use for concrete specimen data management.
