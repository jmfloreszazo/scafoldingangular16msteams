# Angular Application for Microsoft Teams

This project is an Angular application designed to run within Microsoft Teams and retrieve the current user's token. However, **please note that this application will not work on the Microsoft Teams mobile app** unless you have a valid SSL certificate. Self-signed certificates or tools like `ngrok` are insufficient for mobile app compatibility.

## Prerequisites

To use this application, you need an **Azure AD App Registration** configured as follows:
1. **Redirect URI**: Must include the URL where your app is hosted (e.g., `https://yourdomain.com`).
2. **API Permissions**: Grant the app `User.Read` or other necessary permissions.
3. **Manifest**: Ensure the app manifest includes the `accessTokenAcceptedVersion` set to `2`.

Additionally, you need to create an app in Microsoft Teams and configure it to load this Angular application.


[Configuration of Azure Entra ID](assets/entraid.png)





---

## How to Run the Angular Application

1. **Install Angular CLI**: Run the following command to install the Angular CLI used in this project:
```bash
npm install --save-dev @angular/cli@16.2.16
```
Note: You can use newer versions of Angular CLI if needed, but this is the version used for this example.

2. **Install Dependencies**: Run the following command in the project directory:
```bash
npm install
```

3. **Run the Application**: Start the Angular development server:
```bash
npm start
```
By default, the app will be available at https://localhost:4200.

4. **Expose the Application**: Use a tool like ngrok to expose your local server to the internet:
```bash
ngrok http https://localhost:4200 --host-header=localhost
```
Copy the public URL provided by ngrok (e.g., https://your-ngrok-url.ngrok-free.app).

## How to Install the App in Microsoft Teams
1. **Update the Manifest**:

- Open the manifest.json file located in appPackage.local.
Update the contentUrl and websiteUrl fields with the public URL of your Angular app (e.g., https://your-ngrok-url.ngrok-free.app).
- Ensure the validDomains array includes your domain (e.g., your-ngrok-url.ngrok-free.app).
2. **Package the App**: Compress the manifest.json file along with the outline.png and color.png icons into a .zip file.

3. **Upload to Teams**:

- Open Microsoft Teams.
- Go to "Apps" > "Upload a custom app" > "Upload for me or my team."
- Select the .zip file you created.

4. **Test the App**: Add the app to a personal tab in Teams and verify it loads correctly.

## Important Notes About SSL

To use this application on the Microsoft Teams mobile app, you need a valid SSL certificate. Tools like ngrok provide temporary SSL certificates, but they are not recognized by the mobile app. You must host the application on a server with a trusted SSL certificate (e.g., using Azure App Service or another hosting provider).

[View Test Image & SSL](assets/Test.png)

## Disclaimer
This application is intended for educational purposes and may require additional configuration for production use. Ensure you follow best practices for security and deployment when using this application in a real-world scenario.