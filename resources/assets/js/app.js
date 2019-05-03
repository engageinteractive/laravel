/* eslint-disable no-new */

import Vue from 'vue';
import svg4everybody from 'svg4everybody';

import './bootstrap';

// components
import ForgotPassword from './components/accounts/forgot-password-form';
import LoginForm from './components/accounts/login-form';
import PasswordReset from './components/accounts/password-reset-form';
import RegisterForm from './components/accounts/register-form';
import ResendVerifyCodeForm from './components/accounts/resend-verify-code-form';

// filters
import lang from './i18n';

Vue.filter('trans', (...args) => lang.get(...args));

new Vue({
	el: '#app',

	components: {
		ForgotPassword,
		LoginForm,
		PasswordReset,
		RegisterForm,
		ResendVerifyCodeForm,
	},

	mounted: () => {
		svg4everybody();
	},
});
