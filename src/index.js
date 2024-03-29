// ** React Imports
import { Suspense, lazy } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

// ** Redux Imports
import { store } from './redux/store';
import { Provider } from 'react-redux';

// ** Intl, CASL & ThemeColors Context
import ability from './configs/acl/ability';
import { AbilityContext } from './utility/context/Can';
import { ThemeContext } from './utility/context/ThemeColors';

// ** ThemeConfig
import themeConfig from './configs/themeConfig';

// ** Toast
import { Toaster } from 'react-hot-toast';

// ** i18n
import './configs/i18n';

// ** Spinner (Splash Screen)
import Spinner from './@core/components/spinner/Fallback-spinner';

// ** Ripple Button
import './@core/components/ripple-button';
import './@fake-db';

// ** CSS & JS Imports
import 'prismjs';
import '@src/assets/css/style.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import '@src/assets/vendor/bootstrap-icons/bootstrap-icons.css';
import '@src/assets/vendor/boxicons/css/boxicons.min.css';
import '@src/assets/vendor/glightbox/css/glightbox.min.css';
import '@src/assets/vendor/swiper/swiper-bundle.min.css';



import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/components/prism-jsx.min';
import 'react-perfect-scrollbar/dist/css/styles.css';
import 'font-awesome/css/font-awesome.min.css';
import '@styles/react/libs/react-hot-toasts/react-hot-toasts.scss';
import './@core/assets/fonts/feather/iconfont.css';
import './@core/scss/core.scss';
import './assets/scss/style.scss';

import '@src/assets/vendor/purecounter/purecounter_vanilla.js';
import '@src/assets/vendor/bootstrap/js/bootstrap.bundle.min.js';
import '@src/assets/vendor/glightbox/js/glightbox.min.js';
import '@src/assets/vendor/isotope-layout/isotope.pkgd.min.js';
import '@src/assets/vendor/swiper/swiper-bundle.min.js';
import '@src/assets/js/main.js';


const LazyApp = lazy(() => import('./App'));

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <BrowserRouter>
    <Provider store={store}>
      <Suspense fallback={<Spinner />}>
        <AbilityContext.Provider value={ability}>
          <ThemeContext>
            <LazyApp />
            <Toaster position={themeConfig.layout.toastPosition} toastOptions={{ className: 'react-hot-toast' }} />
          </ThemeContext>
        </AbilityContext.Provider>
      </Suspense>
    </Provider>
  </BrowserRouter>
);

