import Document, { Html, Head, Main, NextScript } from 'next/document'
import { FB_PIXEL_ID } from '../lib/fpixel'
import { FB_PAGE_ID } from '../lib/constants'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="vi">
        <Head>
        <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
          />
          <script charset="utf-8" type="text/javascript" src="//js.hsforms.net/forms/shell.js" />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });

            (function() {
              var hbspt = window.hbspt = window.hbspt || {};
              hbspt.forms = hbspt.forms || {};
              hbspt._wpFormsQueue = [];
              hbspt.enqueueForm = function(formDef) {
                if (hbspt.forms && hbspt.forms.create) {
                  hbspt.forms.create(formDef);
                } else {
                  hbspt._wpFormsQueue.push(formDef);
                }
              };
              if (!window.hbspt.forms.create) {
                Object.defineProperty(window.hbspt.forms, 'create', {
                  configurable: true,
                  get: function() {
                    return hbspt._wpCreateForm;
                  },
                  set: function(value) {
                    hbspt._wpCreateForm = value;
                    while (hbspt._wpFormsQueue.length) {
                      var formDef = hbspt._wpFormsQueue.shift();
                      if (!document.currentScript) {
                        var formScriptId = 'leadin-forms-v2-js';
                        hubspot.utils.currentScript = document.getElementById(formScriptId);
                      }
                      hbspt._wpCreateForm.call(hbspt.forms, formDef);
                    }
                  },
                });
              }
            })();
          `,
            }}
          />
          <noscript>
            <img
              height="1"
              width="1"
              style={{ display: 'none' }}
              src={`https://www.facebook.com/tr?id=${FB_PIXEL_ID}&ev=PageView&noscript=1`}
            />
          </noscript>
        </Head>
        <body>
          <Main />
          <NextScript />
          <div id="fb-root"></div>
          <div id="fb-customer-chat" class="fb-customerchat">
          </div>
          <script
          dangerouslySetInnerHTML={{
            __html: `
            var chatbox = document.getElementById('fb-customer-chat');
            chatbox.setAttribute("page_id", "${FB_PAGE_ID}");
            chatbox.setAttribute("attribution", "biz_inbox");

            window.fbAsyncInit = function() {
              FB.init({
                xfbml            : true,
                version          : 'v13.0'
              });
            };
      
            (function(d, s, id) {
              var js, fjs = d.getElementsByTagName(s)[0];
              if (d.getElementById(id)) return;
              js = d.createElement(s); js.id = id;
              js.src = 'https://connect.facebook.net/vi_VN/sdk/xfbml.customerchat.js';
              fjs.parentNode.insertBefore(js, fjs);
            }(document, 'script', 'facebook-jssdk'));

						hbspt.enqueueForm({
							portalId: 19555470,
							formId: "d437421b-1dcc-4d05-a434-16410c8dda49",
							target: "#hbspt-form-lam-cong-nhan",
							region: "na1",
							
						});
            `,
          }}
        />
        </body>
      </Html>
    )
  }
}
