![alt text](http://brandonmlewin.com/wp-content/uploads/2016/05/hotjar.jpg "Hotjar Analytics.js integration")

#[Analytics.js](https://github.com/astronomerio/analytics.js) Integration for [Hotjar](https://www.hotjar.com/), by [Astronomer.io](http://www.astronomer.io/).

## Step 1: Create a Hotjar account
Create a Hotjar account through [their website](https://www.hotjar.com/).

## Step 2: Add the Hotjar tracking code to your site and validate it
See [Hotjar's documentation](http://docs.hotjar.com/docs/getting-started) for getting set up.

## Step 3: Log into your app's Astronomer dashboard and select Hotjar.  The Hotjar Configuration pane should appear on the right side of your screen.

## Step 4: Enter your Hotjar ID (hjid) and Hotjar Snippet Version (hjsv) into the Hotjar Configuration

Your Hotjar ID comes from your Hotjar tracking code, shown as `hjid` below.  Your Hotjar Snippet Version is shown as `hjsv` below.

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

## Step 5: Activate the Hotjar integration
Activate the integration by toggling the switch so that it is flipped to the right and turned red.

## Step 6: Log into your Hotjar dashboard and you should see pageviews show up in any Heatmaps you have setup!

## Step 7: Watch this [funny video]().  You've earned it!

## License

Released under the [MIT license](License.md).
