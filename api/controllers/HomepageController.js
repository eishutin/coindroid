/**
 * HomepageController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  watch: function (req, res) {

    var upnav = {
      name: 'upper',
      container: [
        {
          label: 'Support', link: '#', isActive: true, children: [
            {label: ' Electrum server ', link: '#', isActive: 'active'},
            {label: ' DAG chain ', link: '#', isActive: true},
            {label: ' Blockchain ', link: '#', isActive: true},
            {label: ' DAG chain ', link: '#', isActive: true}
          ]
        },
        {label: ' About ', link: '#', isActive:true},
        {label: ' Technology ', link: '#', isActive:true},
        {label: ' Price ', link: '#', isActive:true},
        {label: ' Portfolio ', link: '#', isActive:true},
        {label: ' Contact' , link: '#', isActive:true}
      ]
    };
    var possibstrip = [
      { urlImg:'icon icon-android',
        text:'Making Android wallet',
        popText:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
        popImg:'images/img-android.png'},
      { urlImg:'icon icon-design',
        text:'Customized design UX/UI',
        popText:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
        popImg:'images/img-android.png'},
      { urlImg:'icon icon-models',
        text:'Implement business models',
        popText:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
        popImg:'images/img-android.png'},
      { urlImg:'icon icon-chain',
        text:'Side chain development',
        popText:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
        popImg:'images/img-android.png'},
      { urlImg:'icon icon-dag',
        text:'DAG chain development',
        popText:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
        popImg:'images/img-android.png'},
      { urlImg:'icon icon-crypto',
        text:'Crypto WEB development',
        popText:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
        popImg:'images/img-android.png'},
      { urlImg:'icon icon-support',
        text:'Full support blockchain projects',
        popText:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
        popImg:'images/img-android.png'}];
    var support={
      head:'SUPPORT',
      mainText:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet mauris commodo quis imperdiet. Eget egestas purus viverra accumsan in. Est ullamcorper eget nulla facilisi etiam. Odio eu feugiat pretium nibh ipsum consequat nisl. Fames ac turpis egestas maecenas pharetra. Justo donec enim diam vulputate ut pharetra.\n',
      buttonText:'Open ticket',
      urlButton:'#'
    };
    var ourWorks=[
      {urlImage:'images/img-work-1.png',
        popText:'Tooltip text'},
      {urlImage:'images/img-work-2.png',
        popText:'Tooltip text'},
      {urlImage:'images/img-work-3.png',
        popText:'Tooltip text'},
      {urlImage:'images/img-work-4.png',
        popText:'Tooltip text'},
      {urlImage:'images/img-work-5.png',
        popText:'Tooltip text'},
      {urlImage:'images/img-work-6.png',
        popText:'Tooltip text'},
      {urlImage:'images/img-work-7.png',
        popText:'Tooltip text'},
      {urlImage:'images/img-work-8.png',
        popText:'Tooltip text'},
      {urlImage:'images/img-work-9.png',
        popText:'Tooltip text'},
      {urlImage:'images/img-work-10.png',
        popText:'Tooltip text'},
      {urlImage:'images/img-work-11.png',
        popText:'Tooltip text'},
      {urlImage:'images/img-work-12.png',
        popText:'Tooltip text'},
      {urlImage:'images/img-work-13.png',
        popText:'Tooltip text'},
      {urlImage:'images/img-work-14.png',
        popText:'Tooltip text'},
      {urlImage:'images/img-work-15.png',
        popText:'Tooltip text'},
      {urlImage:'images/img-work-16.png',
        popText:'Tooltip text'},
      {urlImage:'images/img-work-17.png',
        popText:'Tooltip text'},
      {urlImage:'images/img-work-18.png',
        popText:'Tooltip text'},
      {urlImage:'images/img-work-19.png',
        popText:'Tooltip text'},
      {urlImage:'images/img-work-20.png',
        popText:'Tooltip text'},
      {urlImage:'images/img-work-21.png',
        popText:'Tooltip text'},
      {urlImage:'images/img-work-22.png',
        popText:'Tooltip text'},
      {urlImage:'images/img-work-23.png',
        popText:'Tooltip text'},
      {urlImage:'images/img-work-24.png',
        popText:'Tooltip text'},
      {urlImage:'images/img-work-25.png',
        popText:'Tooltip text'},
      {urlImage:'images/img-work-26.png',
        popText:'Tooltip text'},
      {urlImage:'images/img-work-27.png',
        popText:'Tooltip text'},
      {urlImage:'images/img-work-28.png',
        popText:'Tooltip text'},
      {urlImage:'images/img-work-29.png',
        popText:'Tooltip text'},
      {urlImage:'images/img-work-30.png',
        popText:'Tooltip text'},
      {urlImage:'images/img-work-31.png',
        popText:'Tooltip text'},
      {urlImage:'images/img-work-32.png',
        popText:'Tooltip text'},
      {urlImage:'images/img-work-33.png',
        popText:'Tooltip text'},
      {urlImage:'images/img-work-34.png',
        popText:'Tooltip text'},
      {urlImage:'images/img-work-35.png',
        popText:'Tooltip text'},
      {urlImage:'images/img-work-36.png',
        popText:'Tooltip text'}];

    res.render('index',
      {urlimg1:'images/logo.png',
        upNavigation:upnav,
        rusLang:'RUS', rusUrl:'#',
        espLang:'ESP', espUrl:'#',
        gerLang:'GER', gerUrl:'#',
        mainText1:'Join the crypto ', mainText2: 'revolution',
        twitterClass:'icon icon-twitter', twitterUrl: '#',
        facebookClass:'icon icon-facebook', facebookUrl:'#',
        soc2Class:'icon icon-soc2', soc2Url:'#',
        telegramClass:'icon icon-telegram', telegramUrl:'#',
        youtubeClass:'icon icon-youtube', youtubeUrl:'#',
        viberClass:'icon icon-viber', viberUrl:'#',
        socClass:'icon icon-soc', socUrl:'#',
        emailClass:'icon icon-email', emailUrl:'#',
        possibilityStrip:possibstrip,
        referalText1:'referal system give you 10% from deal and get you referaller 10%',
        referalText2:'* Deposits are made after three wallets',
        referalPlaceholder:'Get referal',
        orangeStripText:'IF YOU HAVE ANOTHER OFFER ABOUT THE WORK, JUST EMAIL US',
        supportStrip:support,
        supportStripImg:'images/img-support-mobile.png',
        ourWorksHead:'OUR WORKS',
        ourWorksStrip:ourWorks,
        downlIcon:'icon icon-email-orange',
        downlIconMessage:'Ваш e-mail был отправлен!'
      });
  }

};

