## <img src="https://raw.githubusercontent.com/mrmattwright/close-aws-zpn/main/icons/48.png" width="20" height =""/>  Close-AWS-VPN-Tabs

This crome Extension extension allows users to quickly close all tabs that are opened by a rouge AWS VPN Client.

## Install

- Clone this repo
- Open Chrome and go to [chrome://extensions/](chrome://extensions/)
- Enable `Developer mode`
- Click on `Load unpacked` and select the `close-aws-vpn`  folder (wherever you cloned it)

You've now got a nice little button in your toolbar that you can click to close all the tabs that are opened by the AWS VPN Client:  
<img src="https://raw.githubusercontent.com/mrmattwright/close-aws-zpn/main/docs/screenshots/VPNTabCloser.png" />  

Before blindly installing this, do check what it's doing so you know it's legit and not mining bitcoin or something.

Have a look in the `manifest.json` file and you'll see that it's only asking for permission to control tabs. Have a look in the `background.js` file and you'll see that it's only closing tabs that have a URLs that match `http://127.0.0.1:35001/"`. If you're not happy with that, don't install it.

### Contributing

Every time you click that button and it makes you smile in satisfaction, you're contributing to the project. 😊
