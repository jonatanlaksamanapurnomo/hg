import '../styles/globals.css'
import type {AppProps} from 'next/app'
import "../assets/vendor/bootstrap/css/bootstrap.min.css"
import "../assets/vendor/animate.css/animate.min.css"
import "../assets/vendor/aos/aos.css"
import "../assets/vendor/bootstrap-icons/bootstrap-icons.css"
import "../assets/vendor/boxicons/css/boxicons.min.css"
import "../assets/vendor/glightbox/css/glightbox.min.css"
import "../assets/vendor/swiper/swiper-bundle.min.css"
import "../assets/css/style.css"


function MyApp({Component, pageProps}: AppProps) {

    // @ts-ignore
    return (
        <>
            <head>
                <title>HolyGrail</title>
                <meta name="description" content="Generated by create next app"/>
                <link rel="icon" href="/favicon.ico"/>

                <link
                    href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i"
                    rel="stylesheet"/>
                <script src="/static/vendor/aos/aos.js"/>
                <script src="/static/vendor/bootstrap/js/bootstrap.bundle.min.js"/>
                <script src="/static/vendor/glightbox/js/glightbox.min.js"/>
                <script src="/static/vendor/isotope-layout/isotope.pkgd.min.js"/>
                <script src="/static/vendor/swiper/swiper-bundle.min.js"/>
                <script src="/static/vendor/php-email-form/validate.js"/>
                <script src="/static/js/main.js"/>


                <script dangerouslySetInnerHTML={{
                    __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-5N99VR6');`
                }}></script>


                <script
                    async
                    src="https://www.googletagmanager.com/gtag/js?id=UA-214926520-1"
                />

                <script
                    dangerouslySetInnerHTML={{
                        __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', UA-214926520-1', { page_path: window.location.pathname });
            `,
                    }}
                />

            </head>
            <body>
            <noscript dangerouslySetInnerHTML={{
                __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5N99VR6"
            height="0" width="0" style="display:none;visibility:hidden"></iframe>`
            }}></noscript>
            <Component {...pageProps} />
            </body>

        </>
    )


}

export default MyApp
