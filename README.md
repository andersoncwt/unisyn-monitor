# Unisyn Monitor

## Setting up and deploying the application

`
npm install
`
`
npm run build
`

## URL for API

https://stalwart-beijinho-5554ba.netlify.app/.netlify/functions/api/demo

## Console Logs

PS D:\GitHub\unisyn-monitor> npm run build

> back_end_netly@1.0.0 build
> netlify deploy --prod

This folder isn't linked to a site yet
? What would you like to do? Link this directory to an existing site

netlify link will connect this folder to a site on Netlify

? How do you want to link this folder to a site? Choose from a list of your recently updated sites
Fetching recently updated sites...

 »   Error: You don't have any sites yet. Run netlify sites:create to create a site.
PS D:\GitHub\unisyn-monitor> netlify sites:create
netlify : File C:\Users\anuja\AppData\Roaming\npm\netlify.ps1 cannot be loaded. The file C:\Users\anuja\AppData\Roaming\npm\netlify.ps1 is 
not digitally signed. You cannot run this script on the current system. For more information about running scripts and setting execution      
policy, see about_Execution_Policies at https:/go.microsoft.com/fwlink/?LinkID=135170.
At line:1 char:1
+ netlify sites:create
+ ~~~~~~~
    + CategoryInfo          : SecurityError: (:) [], PSSecurityException
    + FullyQualifiedErrorId : UnauthorizedAccess
PS D:\GitHub\unisyn-monitor> Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
PS D:\GitHub\unisyn-monitor> netlify sites:create
? Team: anujalamahewaneuralleap’s team
? Site name (leave blank for a random name; you can change it later):

Site Created

Admin URL: https://app.netlify.com/sites/stalwart-beijinho-5554ba
URL:       https://stalwart-beijinho-5554ba.netlify.app
Site ID:   af0e9e87-622f-4030-873b-cba0d4b7bef4

Linked to stalwart-beijinho-5554ba
PS D:\GitHub\unisyn-monitor> npm run build

> back_end_netly@1.0.0 build
> netlify deploy --prod

Please provide a publish directory (e.g. "public" or "dist" or "."):
D:\GitHub\unisyn-monitor
? Publish directory D:\GitHub\unisyn-monitor\dist
Deploy path:        D:\GitHub\unisyn-monitor\dist
Functions path:     D:\GitHub\unisyn-monitor\functions
Configuration path: D:\GitHub\unisyn-monitor\netlify.toml
Deploying to main site URL...
✔ No cached functions were found
✔ Finished hashing 2 files and 1 functions
✔ CDN requesting 0 files and 1 functions
✔ Finished uploading 1 assets
✔ Deploy is live!

Logs:              https://app.netlify.com/sites/stalwart-beijinho-5554ba/deploys/65adce427f62d8cd39ed7b21
Unique Deploy URL: https://65adce427f62d8cd39ed7b21--stalwart-beijinho-5554ba.netlify.app
Website URL:       https://stalwart-beijinho-5554ba.netlify.app