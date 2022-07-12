# webpage-catalog

Useless service to host static web pages with a catalog.  

## How to host by yourself

- `npm install`
- modify the `config.json`
	- If you want to use HTTPS change secure to true, and place your HTTPS stuff on `cert/`
	- private key **MUST BE** named: `private.pem`
	- certificate **MUST BE** named: `cert.pem`
- `npm run start`

## Adding pages

Just create a folder on `pages/`.  
That folder needs a `index.html` and a `info.json`.  
The `info.json` must have the following structure:
```json
{
	"title":"example",
	"about": [
		"About example page",
		"This page is comfy"
	]
}
```

## Custom css

To use your custom css just modify `views/style.css`.  
```css
.page {
/* Class to change the 'main' div of the pages */
}
.about {
	/* Class to change the about text */
}
.link {
	/* Class to change the link style */
}
```
