![alt text](http://brandonmlewin.com/wp-content/uploads/2016/05/hotjar.jpg "Hotjar Analytics.js integration")

#[Analytics.js](https://gitlab.com/metarouter/analytics-js/) Integration for [Hotjar](https://www.hotjar.com/), by [Metarouter](http://www.metarouter.io/).

## Step 1: Create a Hotjar account
Create a Hotjar account through [their website](https://www.hotjar.com/).

## Step 2: Add the Hotjar tracking code to your site and validate it
See [Hotjar's documentation](http://docs.hotjar.com/docs/getting-started) for getting set up.

## Step 3: Log into your app's Metarouter dashboard and select Hotjar.

## Step 4: Enter your Hotjar Site ID (hjid) into the Hotjar Configuration

Your Hotjar Site ID comes from your Hotjar tracking code, shown as `hjid` below.

```html
<!-- Hotjar Tracking Code for http://www.example.com -->
<script>
    (function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:123456,hjsv:5};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
    })(window,document,'//static.hotjar.com/c/hotjar-','.js?sv=');
</script>
```
Save your settings.

## Step 5: Log into your Hotjar dashboard and you should see pageviews show up in any Heatmaps you have setup!

## Step 6: Watch this [funny video](https://www.youtube.com/watch?v=dQw4w9WgXcQ).  You've earned it!

## License

Released under the [MIT license](License.md).
