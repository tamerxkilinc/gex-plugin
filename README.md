# GEX Plugin

## Installation
Include the necessary script tag and iframe in your HTML file. Here are examples for different website frameworks.
Please make sure that the iframe has the ID `gex-plugin-iframe`.

### Configuration
Add one of the snippets below to your website to display the iframe. Replace `{YOUR_IFRAME_URL}` with the URL of the iframe. You can choose between these options:
- `/iframe/fahrzeuge` - Display your vehicles and a filter box
- `/iframe/newest-vehicles` - Display your newest 8 vehicles in a row
- `/iframe/fahrzeuge/{:vehicleId}` - Display a specific vehicle by setting its ID for `{:vehicleId}`
- `/iframe/fahrzeuge/{:vehicleId}/expose` - Display a specific vehicle's expose by setting its ID for `{:vehicleId}`
- `/iframe/ankauf` - Display a tool for receiving vehicle trade-in offers

### Embedding

#### Plain HTML
Include this to the end of your HTML body.
```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/tamerxkilinc/gex-plugin@main/dist/gex-plugin.min.js"></script>
```

```html
<iframe id="gex-plugin-iframe" width="100%" src="{YOUR_IFRAME_URL}" style="border:none;"></iframe>
```

#### WordPress
Include this in your theme's `functions.php` file.
```php
add_action('wp_enqueue_scripts', function() {
    wp_enqueue_script('gex-plugin-js', 'https://cdn.jsdelivr.net/gh/tamerxkilinc/gex-plugin@main/dist/gex-plugin.min.js', array(), null, true);
});
```
